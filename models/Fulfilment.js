import Model from './Model'
import locale from '../support/locale.js'
import $T from '../support/translations.js'

class Fulfilment extends Model {

	selectedRate = undefined;
	shippoAPIURL = "https://api.goshippo.com/";
	shipmentID = "";
	rateXHR = undefined;
	selectedRateKey = "";

	constructor(order) {
		super();
		this.order = order;
	}

	compileShipmentData() {
		return {
			address_from: {
				"name":"Coast Beachwear Inc.",
				"street1":"601-420 Lewis Street",
				"city":"Ottawa",
				"state":"Ontario",
				"zip":"K2P0S9",
				"country":"CA",
				"phone":"+1 613 986 8612",
				"email":"help@coastbeachwear.com"
			},
			address_to: {
				"name": this.order.shippingAddr.first_name + " " + this.order.shippingAddr.last_name,
				"street1": this.order.shippingAddr.address,
				"street2": this.order.shippingAddr.apt? "Unit " + this.order.shippingAddr.apt: "",
				"city": this.order.shippingAddr.city,
				"state": this.order.shippingAddr.territory,
				"zip": this.order.shippingAddr.postal_code,
				"country": this.order.shippingAddr.country,
				"phone": this.order.shippingAddr.phone,
				"email": this.order.shippingAddr.email
			},
			"customs_declaration": {
				"contents_type": "MERCHANDISE",
				"contents_explanation": "Swimsuit",
				"non_delivery_option": "RETURN",
				"certify": true,
				"certify_signer": "Luc Charbonneau",
				"items": [
					{
						"description": "Coast Swimsuits",
						"quantity": this.order.countUnits(),
						"net_weight": "200",
						"mass_unit": "g",
						"value_amount": 72.00,
						"value_currency": "CAD",
						"origin_country": "CA"
					}
				]
			},
			"parcels": [this.generateParceDetails()],
			"async": false
		}
	}

	createShipment(success, fail) {
		var stringifiedData = "";
		var data = {};

		success = success || function() {};
		fail = fail || function() {}
		
		function xhrFail(error) {
			this.rateXHR = undefined;
			fail(error);
		}
		xhrFail = xhrFail.bind(this)

		if (this.rateXHR) this.rateXHR.abort();
		if (this.order.countUnits() < 1) {
			this.selectedRate = undefined;
			this.shipmentID = "";
			this.rates = {};
			success();
			return;
		}
		
		this.rateXHR = new XMLHttpRequest();
		this.rateXHR.open("POST", this.shippoAPIURL + "shipments");
		this.rateXHR.setRequestHeader( "Authorization", `ShippoToken ${ENV.shippoAPIKey}` );
		this.rateXHR.setRequestHeader( "Content-Type", "application/json;" );
		this.rateXHR.timeout = 15000;
		this.rateXHR.ontimeout = function() { xhrFail($T(74)) }; // Process did not finish with a reasonable delay.
		this.rateXHR.onerror = function() { xhrFail($T(75)) }; // There seems to be a problem connecting.

		this.rateXHR.onreadystatechange = (function () {
			var setShippingAddrOutput = "";
			var json = {};
		    
		    if (this.rateXHR.readyState === 4) {
		    	if (this.rateXHR.status === 201) {
			        json = JSON.parse(this.rateXHR.responseText);
			        setShippingAddrOutput = this.order.setShippingAddr(json.address_to);

			        if (setShippingAddrOutput !== true) return xhrFail(setShippingAddrOutput);

			        this.shipmentID = json.object_id;
			        this.rates = this.compileRates(json.rates);
			     	this.updateSelectedRate();
			        this.rateXHR = undefined;
			        success();
			    } else {
			    	xhrFail($T(76)); // Shipping rate search returned an error.
			    }
		    }
		}).bind(this);

		stringifiedData = JSON.stringify(this.compileShipmentData());
		this.getRateXHR = this.rateXHR.send(stringifiedData);
	}

	generateParceDetails() {
		var purchaseCount = this.order.countUnits();

		return {
			length: "8.5",
			width: "7",
			height: (2 * purchaseCount).toString(),
			distance_unit: "in",
			weight: (200 * purchaseCount).toString(),
			mass_unit: "g"
		};


	}

	updateSelectedRate() {
		if (!this.selectedRateKey) return;

		this.selectedRate =
			this.rates[this.selectedRateKey] || 
			this.rates["leastCostly"] || 
			this.rates["bestValue"] || 
			this.rates["fastest"];
	}

	setSelectedRate(rateKey) {
		this.selectedRate = this.rates[rateKey];
		this.selectedRateKey = rateKey;
	}

	compileRates(rates) {
		var compiledRates = {}

		compiledRates.leastCostly = this.findLeastCostlyRate(rates);
		compiledRates.bestValue = this.findBestValueRate(rates);
		compiledRates.fastest = this.findFastesRate(rates);

		return compiledRates;
	}

	findLeastCostlyRate(rates) {
		var index = 0;
		var leastCostlyRates = [];
		var leastCostlyRatesDays = [];


		leastCostlyRates = rates.filter(function(rate) { return rate.attributes.includes("CHEAPEST") });
		leastCostlyRatesDays = leastCostlyRates.map(function(rate) { 
			return (isNaN(parseFloat(rate.estimated_days)) ? 999 : parseFloat(rate.estimated_days));
		});

		index = leastCostlyRatesDays.indexOf(leastCostlyRatesDays.min());
		
		return leastCostlyRates[index]
	}

	findBestValueRate(rates) {
		return rates.filter(function(rate) { return rate.attributes.includes("BESTVALUE") })[0];
	}

	findFastesRate(rates) {
		var index = 0;
		var fastestRates = [];
		var fastestRatesAmounts = [];
		
		fastestRates = rates.filter(function(rate) { return rate.attributes.includes("FASTEST") });
		fastestRatesAmounts = fastestRates.map(function(rate) { return parseFloat(rate.amount) })

		index = fastestRatesAmounts.indexOf(fastestRatesAmounts.max());
		return fastestRates[index]
	}
}

export default Fulfilment

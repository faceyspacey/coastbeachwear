import Model from './Model.js'
import beachHut from '../main/BeachHut.js'
import { taxRates } from '../support/settings.js'
import $T from '../support/translations.js'
import Fulfilment from './Fulfilment.js'
import { originCountryCode } from '../support/settings.js'


class Order extends Model {
	
	static billingAddrFields = ["first_name", "last_name", "company", "address", "city", "country", "apt", "territory", "postal_code", "email", "phone"];
	static shippingAddrFields = ["first_name", "last_name", "company", "address", "city", "country", "apt", "territory", "postal_code", "email", "phone", "placeId"];
	static paymentInfoFields = ["card_number", "card_holder", "card_type", "expiry", "cvv"];

	billingAddr = {};
	shippingAddr = {};
	paymentInfo = {}
	purchases = [];

	fulfilment = {};

	constructor() {
		super();
		this.fulfilment = new Fulfilment(this);
	}

	setBillingAddr(obj) {
		var fields = this.constructor.billingAddrFields;

		for (var key in obj) {
			if (fields.includes(key)) this.billingAddr[key] = obj[key];
		}

		this.updateUIState();
	}

	setShippingAddr(obj) {
		var fields = this.constructor.shippingAddrFields;
		var validation = false;

		obj.territory = obj.territory || obj.state;
		obj.postal_code = obj.postal_code || obj.zip;

		validation = this.validateShippingAddress(obj);

		if (validation !== true) return validation;
		
		for (var key in obj) {
			if (fields.includes(key)) this.shippingAddr[key] = obj[key];
		}

		this.updateUIState();

		return true;
	}

	getBillingAddr() {
		return JSON.parse(JSON.stringify(this.billingAddr));
	}

	getShippingAddr() {
		return JSON.parse(JSON.stringify(this.shippingAddr));
	}

	validateShippingAddress(obj) {
		var country = obj.country.toLowerCase();
		var territory = obj.territory.toLowerCase();

		if (taxRates[country] && !taxRates[country][territory]) return $T(67); // Territory entered is not valid.

		return true;
	}

	setPaymentInfo(obj) {
		var fields = this.constructor.paymentInfoFields;

		for (var key in obj) {
			if (fields.includes(key)) this.paymentInfo[key] = obj[key];
		}

		this.updateUIState();
	}

	addPurchase(purchase, success, fail) {
		var existingVariantPurchase;

		function createShipmentSuccess() {
			this.updateUIState();

			success();

			gtag('event', 'add_to_cart', { items: [{
				id: purchase.variant.id,
				name: purchase.variant.product.name,
				variant: purchase.variant.color + " " + purchase.variant.size
			}] });
		};
		createShipmentSuccess = createShipmentSuccess.bind(this);

		function createShipmentFail() {
			this.removePurchase(purchase);
			fail();
		};
		createShipmentFail = createShipmentFail.bind(this);

		success = success || function() {};
		fail = fail || function() {};

		if (this.purchases.includes(purchase)) return;

		existingVariantPurchase = this.purchases.filter(function(p) {
			return p.variant.id == purchase.variant.id;
		})[0]

		if (existingVariantPurchase) {
			existingVariantPurchase.quantity = purchase.quantity;
			return;
		}

		this.purchases.push(purchase);

		if (Object.keys(this.shippingAddr).length === 0) createShipmentSuccess();
		else this.fulfilment.createShipment(createShipmentSuccess, createShipmentFail);
	}

	removePurchase(purchase, success, fail) {
		success = success || function() {};
		fail = fail || function() {};

		this.purchases.remove(purchase);

		function createShipmentSuccess() {
			this.updateUIState();
			success();

			gtag('event', 'remove_from_cart', { items: [{
				id: purchase.variant.id,
				name: purchase.variant.product.name,
				variant: purchase.variant.color + " " + purchase.variant.size
			}] });
		};
		createShipmentSuccess = createShipmentSuccess.bind(this);

		function createShipmentFail() {
			this.purchases.push(purchase);
			fail();
		};
		createShipmentFail = createShipmentFail.bind(this);

		if (Object.keys(this.shippingAddr).length !== 0) this.fulfilment.createShipment(createShipmentSuccess, createShipmentFail);
		else createShipmentSuccess();

	}

	updateUIState() {
		beachHut.ui.setState({ order: this })
	}

	calcSubtotal() {
		var total = 0; 

		this.purchases.forEach(function(purchase) {

			var product = purchase.variant.product
			total = total + product.price * purchase.quantity
		})

		return total
	}

	isSameAddress() {
		var i = 0;
		var isSame = true;
		var field = "";

		for (i=0; i < this.constructor.billingAddrFields.length; i++ ) {
			field = this.constructor.billingAddrFields[i];

			if (this.billingAddr[field] !== this.shippingAddr[field]) {
				isSame = false;
				break;
			}
		}

		return isSame;
	}

	isShippingAddrEmpty() {
		var i = 0;
		var isEmpty = true;
		var field = "";

		for (i=0; i < this.constructor.shippingAddrFields.length; i++ ) {

			field = this.constructor.shippingAddrFields[i];

			if (this.shippingAddr[field] !== undefined) {
				isEmpty = false;
				break;
			}
		}

		return isEmpty;
	}

	calcShippingCosts() {
		if (!this.fulfilment.selectedRate) return 0;
		return parseFloat(this.fulfilment.selectedRate.amount);
	}

	calcTaxes() {
		var country = this.shippingAddr.country.toLowerCase();
		var territory = this.shippingAddr.territory.toLowerCase();
		var rate = taxRates[country] && taxRates[country][territory];

		if (rate) return this.calcSubtotal() * rate;
		else return 0;
	}

	calcDiscounts() {
		return 0;
	}

	compileAddition() {
		var addition = {};
		var key = "";

		addition.subtotal = this.calcSubtotal();
		addition.shipping = this.calcShippingCosts();
		addition.taxes = this.calcTaxes();
		addition.discounts = this.calcDiscounts();

		addition.total = function() {
			var total = 0;

			for (key in addition) {
				if (!isNaN(addition[key])) total+=addition[key];
			}
			
			return total;
		}();

		return addition;
	}

	countUnits() {
		var count = 0;

		this.purchases.forEach(function(purchase) {
			count+= purchase.quantity
		})

		return count;
	}

	isShippedInterational() {
		if (this.shippingAddr.country === undefined) return undefined;
		else return this.shippingAddr.country.toLowerCase() !== originCountryCode;
	}
}

export default Order
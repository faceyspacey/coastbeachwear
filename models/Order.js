import Model from './Model'
import {ui} from '../main/BeachHut.js'

class Order extends Model {
	
	static billingAddrFields = ["first_name", "last_name", "company", "address", "country", "apt", "province", "postal_code", "email", "phone"];
	static shippingAddrFields = ["first_name", "last_name", "company", "address", "country", "apt", "province", "postal_code", "email", "phone"];
	static paymentInfoFields = ["card_number", "card_holder", "card_type", "expiry", "cvv"];

	constructor() {
		super();
		this.billingAddr = {};
		this.shippingAddr = {};
		this.paymentInfo = {}
		this.purchases = [];
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

		for (var key in obj) {
			if (fields.includes(key)) this.shippingAddr[key] = obj[key];
		}

		this.updateUIState();
	}

	setPaymentInfo(obj) {
		var fields = this.constructor.paymentInfoFields;

		for (var key in obj) {
			if (fields.includes(key)) this.paymentInfo[key] = obj[key];
		}

		this.updateUIState();
	}

	addPurchase(purchase) {
		var existingVariantPurchase;

		if (this.purchases.includes(purchase)) return;

		existingVariantPurchase = this.purchases.filter(function(p) {
			return p.variant.id == purchase.variant.id;
		})[0]

		if (existingVariantPurchase) {
			existingVariantPurchase.quantity = purchase.quantity;
			return;
		}

		this.purchases.push(purchase);
		this.updateUIState();
	}

	removePurchase(purchase) {
		this.purchases.remove(purchase);
		this.updateUIState();
	}

	updateUIState() {
		ui.setState({order: this})
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
}

export default Order
import Model from './Model'
import {ui} from '../main/BeachHut.js'

class Order extends Model {
	
	static billingAddrFields = ["first_name", "last_name", "company", "address", "country", "apt", "province", "postal_code", "email", "phone"];
	static shippingAddrFields = ["first_name", "last_name", "company", "address", "country", "apt", "province", "postal_code", "email", "phone"];

	constructor() {
		super();
		this.billingAddr = {};
		this.shippingAddr = {};
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

	addPurchase(purchase) {
		var existingVariantPurchase;

		if (this.purchases.includes(purchase)) return;

		existingVariantPurchase = this.purchases.filter(function(p) {
			return p.variant == purchase.variant;
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
}

export default Order
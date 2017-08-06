import Model from './Model'
import {ui} from '../main/BeachHut.js'

class Customer extends Model {
	
	static billingAddrFields = ["first_name", "last_name", "company", "address", "country", "province", "postal_code"];
	static shippingAddrFields = ["first_name", "last_name", "company", "address", "country", "province", "postal_code"];

	constructor() {
		super();
		this.billingAddr = {};
		this.shippingAddr = {};
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

	updateUIState() {
		ui.setState({customer: this})
	}

}

export default Customer
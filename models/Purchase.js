import Model from './Model'
import { ui, order } from '../main/BeachHut.js'

class Purchase extends Model {

	static attributes = ["variant", "quantity"];

	constructor(data) {
		super();
		
		this.setData(data);
	}

	displayInOverlay() {
		ui.displayPurchaseOverlay(this);
	}

	calcPrice() {
		return parseInt(this.variant.product.price) * this.quantity;
	}

	add(success, fail) {
		order.addPurchase(this, success, fail);
	}

	save(data, success, fail) {
		if (!this.quantity) this._create(data, success, fail);
		else this._update(data, success, fail);
	}

	_create(data, success, fail) {
		this.setData(data);
		order.addPurchase(this, success, fail);
	}

	_update(data, success, fail) {
		var wasData = this.asJSON();

		this.setData(data);

		function createShipmentFail() {
			this.setData(wasData);
			fail();
		};
		createShipmentFail = createShipmentFail.bind(this);

		if (this.quantity !== wasData.quantity && Object.keys(order.shippingAddr).length > 0) {
			order.fulfilment.createShipment(success, createShipmentFail);
		} else {
			success();
		}
	}

	destroy() {
		order.removePurchase(this);
	}
}

export default Purchase
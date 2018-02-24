import Model from './Model'
import beachHut from '../main/BeachHut.js'

class Purchase extends Model {

	static attributes = ["variant", "quantity"];

	constructor(data) {
		super();
		
		this.order = beachHut.order;
		this.setData(data);
	}

	displayInOverlay() {
		beachHut.ui.displayPurchaseOverlay(this);
	}

	calcPrice() {
		return parseInt(this.variant.product.price) * this.quantity;
	}

	add(success, fail) {
		this.order.addPurchase(this, success, fail);
	}

	save(data, success, fail) {
		if (!this.quantity) this._create(data, success, fail);
		else this._update(data, success, fail);
	}

	_create(data, success, fail) {
		this.setData(data);
		this.order.addPurchase(this, success, fail);
	}

	_update(data, success, fail) {
		var wasData = this.asJSON();

		this.setData(data);

		function createShipmentFail() {
			this.setData(wasData);
			fail();
		};
		createShipmentFail = createShipmentFail.bind(this);

		if (this.quantity !== wasData.quantity && Object.keys(this.order.shippingAddr).length > 0) {
			this.order.fulfilment.createShipment(success, createShipmentFail);
		} else {
			success();
		}
	}

	destroy() {
		this.order.removePurchase(this);
	}
}

export default Purchase
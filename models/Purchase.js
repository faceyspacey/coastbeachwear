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

	add() {
		order.addPurchase(this);
	}

	destroy() {
		order.removePurchase(this);
	}
}

export default Purchase
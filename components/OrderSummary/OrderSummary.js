import React, { Component } from 'react'
import styles from './OrderSummary.css'
import Icons from '../../support/Icons.js'
import { $T, $TInject } from '../../support/translations.js'
import PurchaseSummary from '../PurchaseSummary/PurchaseSummary.js'

class OrderSummary extends Component {
	
	wasPurchaseCount = 0;
	element = {};

	constructor(props, context) {
		super();
	}

	storeDOM(element) {
		this.element = element;
	}

	scrollIntoView() {

		this.element.scrollIntoView({ behavior: "smooth" });
	}

	render() {
		var order = this.props.order;
		var purchaseCount = order.purchases.length;

		if (purchaseCount > this.wasPurchaseCount) this.scrollIntoView();

		this.wasPurchaseCount = purchaseCount;

		return (
			<div className={styles["main"]} ref={ this.storeDOM.bind(this)}>
				<div className={styles["title"]}>
					{ $T(16) /* Order Summary */}
				</div>
				<div className={styles["order-list"]}>
					{ order.purchases.length == 0 &&
						<div className={styles["empty"]}>
							{ $T(23) /* Order Empty */ }
						</div>
					}
					{ order.purchases.length > 0 &&
						<div> {
							order.purchases.map(function(purchase) {
								return <PurchaseSummary purchase={ purchase } key={ purchase.variant.id } />
							})
						}
							<div className={styles["footer"] }>
								<div className={styles["subtotal"] }>
									{ $T(28) + $TInject(27, [this.props.order.calcSubtotal().toFixed(2)]) }
								</div>
							</div>
						</div>
					}
				</div>
			</div>
		)
	}
}

export default OrderSummary
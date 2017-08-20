import React, { Component } from 'react'
import styles from './OrderSummary.css'
import Icons from '../../support/Icons.js'
import { $T, $TInject } from '../../support/translations.js'
import PurchaseSummary from '../PurchaseSummary/PurchaseSummary.js'

class OrderSummary extends Component {
	constructor(props, context) {
		super();
	}

	render() {
		var order = this.props.order;

		return (
			<div className={styles["main"]}>
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
		)
	}
}

export default OrderSummary
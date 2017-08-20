import React, { Component } from 'react'
import styles from './PurchaseSummary.css'
import Icons from '../../support/Icons.js'
import { $T, $TInject} from '../../support/translations.js'

class PurchaseSummary extends Component {
	constructor(props, context) {
		super();
	}

	onremoveclick(event) {
		event.stopPropagation();
		this.props.purchase.destroy();
	}

	onclick() {
		this.props.purchase.displayInOverlay();
	}

	render() {
		var purchase = this.props.purchase;
		var variant = purchase.variant;
		var product = variant.product;

		return (
			<div className={ styles["main"] } onClick={ this.onclick.bind(this) }>
				<img className={ styles["thumbnail"] } src={ variant.images[0] }/>
				<div className={ styles["title"] }>
					<div  className={ styles["name"] }>
						{ "Coast " + product.name }
					</div>
					<div  className={ styles["style"] }>
						{ $T(variant.color) + " " + $T(variant.size + "_full") }
					</div>
				</div>
				<div className={ styles["addition"] }>
					<div className={ styles["price"] }>
						{ $TInject(27, [product.price.toFixed(2)]) }
					</div>
					<div className={ styles["quantity"] }>
						{ $T(26) /* Qty */ + purchase.quantity }
					</div>
				</div>
				<div className={ styles["remove"] } onClick={ this.onremoveclick.bind(this) }>
					{ Icons.insert("clear") }
				</div>
			</div>
		)
	}
}

export default PurchaseSummary
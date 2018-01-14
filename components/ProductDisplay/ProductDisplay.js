import React, { Component } from 'react'
import styles from './ProductDisplay.css'
import Icons from '../../support/Icons.js'
import $T from '../../support/translations.js'
import Purchase from '../../models/Purchase.js'
import { order } from '../../main/BeachHut.js'

class ProductDisplay extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			index: props.index.toString()
		}
	}

	onViewClick() {
		var data = {};
		var purchase;
		var matchedPurchase;

		order.purchases.forEach((function(purchase) {
			if (purchase.variant.color == this.props.variant.color) {
				matchedPurchase = purchase;
			}
		}).bind(this))

		data.variant = this.props.variant;
		purchase = matchedPurchase || new Purchase(data);

		purchase.displayInOverlay();
	}

	title_text() {
		var productName = this.props.variant.product.name;
		var colorText = $T(this.props.variant.color);

		return `${productName} - ${colorText}`
	}

	render() {
		return (
			<div className={ styles["main" + this.state.index] }>
				<div className={ styles["title"] }>
					{ this.title_text() }
				</div>
				<img 
					src={ IMGS.swimsuit }
					className={ styles["image"] }
				/>
				<div className={ styles["button-view"] } onClick={ this.onViewClick.bind(this) }>{ $T(13) /* View */}
				</div>
				<div className={ styles["tip"] }>
					<div className={ styles["triangle"] }>
					</div>
				</div>
			</div>
		)
	}
}

export default ProductDisplay
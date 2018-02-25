import React, { Component } from 'react'
import styles from './ProductDisplay.css'
import Icons from '../../support/Icons.js'
import $T from '../../support/translations.js'
import Purchase from '../../models/Purchase.js'
import beachHut from '../../main/BeachHut.js'

class ProductDisplay extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			index: props.index.toString()
		}
	}

	matchPurchase() {
		var matchedPurchase;

		beachHut.order.purchases.forEach((function(purchase) {
			if (purchase.variant.color == this.props.variant.color) {
				matchedPurchase = purchase;
			}
		}).bind(this))

		return matchedPurchase;
	}

	onViewClick() {
		var data = {};
		var purchase;

		data.variant = this.props.variant;
		purchase = (!beachHut.order.isComplete && this.matchPurchase()) || new Purchase(data);

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
				<div className={ styles["header"] }>
					<div className={ styles["title"] }>
						{ this.title_text() }
					</div>
					<div className={ styles["tip"] }>
						<div className={ styles["triangle"] }>
						</div>
					</div>
				</div>
				<div className={ styles["film"] }>
					<img 
						src={ IMGS.swimsuit }
						className={ styles["image"] }
					/>
					<div className={ styles["button-view"] } onClick={ this.onViewClick.bind(this) }>{ $T(13) /* View */}
					</div>
				</div>
			</div>
		)
	}
}

export default ProductDisplay
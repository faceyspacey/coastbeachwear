import React from 'react'
import styles from './OverlayPurchase.css'
import Icons from '../../support/Icons.js'
import {$T, $TInject} from '../../support/translations.js'
import Overlay from '../Overlay/Overlay.js'
import ImageCarousel from '../ImageCarousel/ImageCarousel.js'
import SizePicker from '../SizePicker/SizePicker.js'


class OverlayPurchase extends Overlay {
	constructor(props, context) {
		super();

		this.state = {
			currentVariant: props.purchase.variant
		}
	}

	setCurrentVariant(variant) {
		this.setState({
			currentVariant: variant
		})
	}

	addPurchase() {
		var data = {};

		data.quantity = 1;
		data.variant = this.state.currentVariant;

		this.props.closeOverlay();
		this.props.purchase.setData(data);
		this.props.purchase.add();
	}

	getSizeVariants() {
		var currentVariant = this.props.purchase.variant;
		var product = currentVariant.product;

		return product.variants.filter(function(variant) {
			return variant.color == currentVariant.color;
		})
	}

	content() {
		var purchase = this.props.purchase;
		var variant = this.state.currentVariant;
		var product = variant.product;

		return (
			<div className={ styles["content"] }>
				<div className={ styles["product-info"] }>
					<div className={ styles["title-container"] }>
						<div className={ styles["title"] }>
							{ product.name }
						</div>
						<div className={ styles["subtitle"] }>
							{ $TInject(29, [product.version])}&nbsp;{$T(variant.color ) }
						</div>
					</div>
					<div className={ styles["details"] }>
						<SizePicker 
							sizeVariants={ product.getVariantsByColor(variant.color) }
							currentVariant={ variant }
							setCurrentVariant={ this.setCurrentVariant.bind(this) }
						/>
						<div className={ styles["detail"] }>
							{ $T(22) /* Description: */ }{ product.description }
						</div>
					</div>
					<div className={ styles["description"] }>
					</div>
				</div>
				<div className={ styles["carousel-container"] }>
					<ImageCarousel images={ variant.images }/>
				</div>
				<div className={ styles["add-button"] } onClick={ this.addPurchase.bind(this) } >
					{ this.props.purchase.quantity ? $T(30) /* Update Order */ :$T(24) /* Add To Order */ }
				</div>
			</div>
		)
	}
}

export default OverlayPurchase
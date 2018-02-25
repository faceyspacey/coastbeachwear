import React from 'react'
import styles from './OverlayPurchase.css'
import beachHut from '../../main/BeachHut.js'
import Icons from '../../support/Icons.js'
import {$T, $TInject} from '../../support/translations.js'
import Overlay from '../Overlay/Overlay.js'
import ImageCarousel from '../ImageCarousel/ImageCarousel.js'
import SizePicker from '../SizePicker/SizePicker.js'
import QuantityPicker from '../QuantityPicker/QuantityPicker.js'


class OverlayPurchase extends Overlay {
	constructor(props, context) {
		super();

		this.state = {
			currentVariant: props.purchase.variant,
			quantity: props.purchase.quantity || 1,
			isProcessing: false
		};

		gtag('config', ENV.gaid, {'page_path': '/purchase'});
	}

	onOverlayClick(event) {
		if (this.state.isProcessing) return;
		super.onOverlayClick(event);
	}

	onCloseClick(event) {
		if (this.state.isProcessing) return;
		super.onCloseClick();
		gtag('config', ENV.gaid, {'page_path': '/'});
	}

	setCurrentVariant(variant) {
		this.setState({
			currentVariant: variant
		})
	}

	setQuantity(value) {
		if (Number.isNaN(value) || !Number.isInteger(value) || value < 1)	return;	
		
		this.setState({
			quantity: value
		})

	}

	displayCompletePrompt() {
		var promptButtons = [
			{
				caption: $T(103), /* Cancel*/
			},
			{
				caption: $T(99), /* New Order */
				onclick: (function() {
					beachHut.resetOrder();
					
					this.props.purchase.order = beachHut.order;
					this.addPurchase();
				}).bind(this)
			}
		]

		beachHut.ui.displayPrompt(
			$T(99), /* New Order */
			$T(104) /* Would you like to create a new order with this product in it? */,
			promptButtons
		);
	}

	addPurchase() {
		var data = {};

		function onaddsuccess() {
			this.props.closeOverlay();
		};
		onaddsuccess = onaddsuccess.bind(this);

		function onaddfail(error) {
			this.setState({ isProcessing: false });
		};
		onaddfail = onaddfail.bind(this);
		
		if (this.props.purchase.order.isComplete) {
			return this.displayCompletePrompt();
		}

		this.setState({ isProcessing: true });

		data.quantity = this.state.quantity;
		data.variant = this.state.currentVariant;

		this.props.purchase.save(data, onaddsuccess, onaddfail);
	}

	getSizeVariants() {
		var currentVariant = this.props.purchase.variant;
		var product = currentVariant.product;

		return product.variants.filter(function(variant) {
			return variant.color == currentVariant.color;
		})
	}

	addButtonCaption() {
		if (this.props.purchase.order.isComplete === true) return  $T(99); /* New Order */
		if (this.props.purchase.quantity > 0) return $T(30); /* Update Order */

		return $T(24); /* Add To Order */ 
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
							{ $TInject(29, [product.version])}&nbsp;{$T("code" + variant.color) }
						</div>
					</div>
					<div className={ styles["details"] }>
						<SizePicker 
							sizeVariants={ product.getVariantsByColor(variant.color) }
							currentVariant={ variant }
							setCurrentVariant={ this.setCurrentVariant.bind(this) }
						/>
						<div className={ styles["detail"] }>
							<div className={ styles["description"] }>
								{ $T(22) /* Description: */ }{ product.description }
							</div>
						</div>
						<div className={ styles["quantity-picker-container"] }>
							<div className={ styles["quantity-caption"] }>
								{ $T(31) /*How Many do you want? */}
							</div>
							<QuantityPicker quantity={ this.state.quantity } setQuantity={ this.setQuantity.bind(this) } /> 
						</div>
					</div>
					<div className={ styles["description"] }>
					</div>
				</div>
				<div className={ styles["carousel-container"] }>
					<ImageCarousel images={ variant.images }/>
				</div>
				{
					!this.state.isProcessing && <div className={ styles["add-button"] } onClick={ this.addPurchase.bind(this) } >
						<div className={ styles["add-button-caption"] }>
							{ this.addButtonCaption() }
						</div>
					</div>
				}
				{
					this.state.isProcessing && <div className={ styles["add-button-processing"] } onClick={ this.addPurchase.bind(this) } >
						<div className={ styles["add-button-caption"] }>
							{ $T(66) /* Processing */ }
						</div>

					</div>
				}
			</div>
		)
	}
}

export default OverlayPurchase
import React, { Component } from 'react'
import styles from './FormNavigation.css'
import ShippingAddrForm from '../ShippingAddrForm/ShippingAddrForm.js'
import OrderSummary from '../OrderSummary/OrderSummary.js'
import Icons from '../../support/Icons.js'
import $T from '../../support/translations.js'


class FormNavigation extends Component {
	constructor(props, context) {
		super(props, context)
	}

	renderPrevArrow() {
		return (
			<div className={ styles["previous-arrow"]} onClick={ this.props.navigateBackward }>
				{ Icons.insert("next_arrow_long") }
			</div>
		) 
	}

	renderNextArrow() {
		return (
			<div className={ styles["next-arrow"]} onClick={ this.props.navigateForward }>
				<div className={ styles["caption"]}>
					{ $T(11) }
				</div>
				{ Icons.insert("next_arrow_outline") }
			</div>
		)
	}

	renderProcessingLabel() {
		return (
			<div className={ styles["processing-label"]} onClick={ this.props.navigateForward }>
				<div className={ styles["caption"]}>
					{ $T(66) /* Processing */ }
				</div>
			</div>
		)
	}

	renderCompleteButton() {
		return (
			<div className={ styles["complete-button"]} onClick={ this.props.oncomplete }>
				<div className={ styles["caption"]}>
					{ $T(57) /* Complete Order */ }
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className={ styles["navigation"] }>
				{ this.props.navigateBackward && this.renderPrevArrow() }
				{ this.props.navigateForward && ( this.props.isProcessing ? this.renderProcessingLabel() : this.renderNextArrow() ) }
				{ this.props.oncomplete && this.renderCompleteButton() }
			</div>
		)
	}
}

export default FormNavigation
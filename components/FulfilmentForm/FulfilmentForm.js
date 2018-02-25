import React, { Component } from 'react'
import styles from './FulfilmentForm.css'
import formStyles from '../CheckoutForm/CheckoutForm.css'
import InputUnderline from '../Inputs/InputUnderline/InputUnderline.js'
import $T from '../../support/translations.js'
import beachHut from '../../main/BeachHut.js'
import FormNavigation from '../FormNavigation/FormNavigation.js'
import ShippingProviderSelector from '../ShippingProviderSelector/ShippingProviderSelector.js'
import BillingAddrForm from '../BillingAddrForm/BillingAddrForm.js'
import ShippingAddrForm from '../ShippingAddrForm/ShippingAddrForm.js'
import PaymentForm from '../PaymentForm/PaymentForm.js'

class FulfilmentForm extends Component {

	constructor(props, context) {
		var compiledRates = {};

		super(props, context)

		gtag('config', ENV.gaid, {'page_path': '/fulfilmentform'});

		this.state = {
			selectedRateKey: this.props.order.fulfilment.selectedRateKey
		};
	}

	recoverselectedRateKey() {
		this.props.order.fulfilment.selectedRate
	}

	navigateForward() {
		if (!this.state.selectedRateKey) {
			beachHut.ui.displayMessage(
				$T(101), /* Seletect Option */
				$T(102) /* Select shipping option to proceed. */
			);
			return;
		}

		if (this.props.order.countUnits() < 1) {
			beachHut.ui.displayMessage(
				$T(78), /* Order Empty */
				$T(77) /* Add item to order to proceed. */
			);
			return;
		}

		this.props.order.fulfilment.setSelectedRate(this.state.selectedRateKey);
		this.props.setCurrentForm(PaymentForm);
	}

	navigateBackward() {
		var prevForm = this.props.order.isSameAddress()? ShippingAddrForm : BillingAddrForm;

		if (this.props.order.countUnits() < 1) {
			beachHut.ui.displayMessage(
				$T(78), /* Order Empty */
				$T(77) /* Add item to order to proceed. */
			);
			return;
		}
		
		this.props.setCurrentForm(prevForm);
	}

	hasRates(rates) {
		var key;

		for (key in rates) {
			if (rates[key] !== undefined) return true;
		}

		return false;
	}

	displayError() {
		if (this.props.order.countUnits() < 1)
			return this.renderOrderEmptySection (
				$T(78) /* Order Empty */,
				$T(79) /* Add item to order to view shipping options */
			)
		else
			return this.renderOrderEmptySection (
				$T(80) /* Order Empty */,
				$T(81) /* Add item to order to view shipping options */
			)
	}

	renderOrderEmptySection(title, msg) {
		return (
			<div className={styles["order-empty"]}>
				<div className={styles["order-empty-title"]}>
					{ title }
				</div>
				<div className={styles["order-empty-sub-title"]}>
					{ msg }
				</div>
			</div>
		)
	}

	onchange(obj) {
		this.setState(obj);
		this.props.order.setBillingAddr(obj);
	}

	onrateselect(key) {
		this.setState({
			selectedRateKey: key
		})
	}

	render() {
		return (
			<div className={styles["main"]}>
				<div className={ formStyles["header"] }>{ $T(62) /* Shipping */}</div>
				{ !this.hasRates(this.props.order.fulfilment.rates) && this.displayError() }
				<ShippingProviderSelector 
					selectedKey={ this.state.selectedRateKey }
					fulfilment={ this.props.order.fulfilment }
					onselect={ this.onrateselect.bind(this) }
				/>
				<FormNavigation 
					navigateForward={ this.navigateForward.bind(this) }
					navigateBackward= { this.navigateBackward.bind(this)}
				/>
			</div>
		)
	}
}

export default FulfilmentForm
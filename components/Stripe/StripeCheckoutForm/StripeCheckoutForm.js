import React, { Component } from 'react'
import {injectStripe} from 'react-stripe-elements';
import beachHut from '../../../main/BeachHut.js'
import InputUnderline from '../../Inputs/InputUnderline/InputUnderline.js';
import CardSection from '../StripeCardSection/StripeCardSection.js';
import InputStripeCardNumber from "../InputStripeCardNumber/InputStripeCardNumber.js"
import InputStripeExpiry from "../InputStripeExpiry/InputStripeExpiry.js"
import InputStripeCVV from "../InputStripeCVV/InputStripeCVV.js"
import FormNavigation from "../../FormNavigation/FormNavigation.js"
import styles from './StripeCheckoutForm.css'
import $T from '../../../support/translations.js'

class StripeCheckoutForm extends Component {

	oncompleteclick = (ev) => {
		ev.preventDefault();
		
		if (this.props.order.countUnits() < 1) {
			beachHut.ui.displayMessage(
				$T(78), /* Order Empty */
				$T(77) /* Add item to order to proceed. */
			);
			return;
		}

		this.props.navigateForward();
		
		// this.props.stripe.createToken({ name: this.props.card_holder }).then(({ token }) => {
		// 	console.log('Received Stripe token:', token);
		// });
	}

	render() {
		return (
			<form onSubmit={ this.handleSubmit }>
				<InputUnderline 
					dataKey={ "cardHolder" } 
					data={ this.props.data }
					onchange={ this.props.onchange }
					inputWidth="500px" 
					placeholder={$T("34") /* Name On Card */}
					autocomplete={"cc-name"}
				/>
				<InputStripeCardNumber 
					inputWidth="360px" 
					placeholder={$T("33") /* Card Number */ } 
				/>
				<InputStripeExpiry
					inputWidth="130px"
					placeholder={$T("35") /* MM/YY */} 
				/> 
				<InputStripeCVV
					inputWidth="140px"
					placeholder={$T("36") /* CVV */} 
				/>
				<FormNavigation
					navigateBackward = { this.props.navigateBackward }
					oncomplete = { this.oncompleteclick.bind(this) }
				/>
			</form>
		);
	}	
}

export default injectStripe(StripeCheckoutForm);
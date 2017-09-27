import React, { Component } from 'react'
import formStyles from '../CheckoutForm/CheckoutForm.css'
import styles from './PaymentForm.css'
import $T from '../../support/translations.js'
import Input from '../Inputs/Input.js'
import InputExpiry from '../Inputs/InputExpiry.js'
import FormNavigation from '../FormNavigation/FormNavigation.js'
import CardTypeSelector from '../CardTypeSelector/CardTypeSelector.js'
import BillingAddrForm from '../BillingAddrForm/BillingAddrForm.js'
import ShippingAddrForm from '../ShippingAddrForm/ShippingAddrForm.js'

class PaymentForm extends Component {
	constructor(props, context) {
		super(props, context)

		this.cardConfirmed = false;
	}

	static getTitle() {
		return $T(32) // Payment
	}

	navigateForward() {
		
	}

	navigateBackward() {
		var prevForm = this.props.order.isSameAddress()? ShippingAddrForm : BillingAddrForm;

		this.props.setCurrentForm(prevForm);
	}

	paymentInfo() {
		return this.props.order.paymentInfo;
	}

	onchange(obj) {
		if (obj.card_number != undefined && !this.cardConfirmed) {
			obj.card_type = this.detectCardType(obj.card_number);
		}

		this.props.order.setPaymentInfo(obj);
	}

	confirmCardType(type) {
		this.cardConfirmed = true;
		this.setCardType(type);
	}

	setCardType(type) {
		this.props.order.setPaymentInfo({
			card_type: type
		})
	}

	detectCardType(number) {
	    var re = {
	        // electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
	        // maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
	        // dankort: /^(5019)\d+$/,
	        // interpayment: /^(636)\d+$/,
	        // unionpay: /^(62|88)\d+$/,
	        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
	        mastercard: /^5[1-5][0-9]{14}$/,
	        amex: /^3[47][0-9]{13}$/,
	        // diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
	        // discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
	        // jcb: /^(?:2131|1800|35\d{3})\d{11}$/
	    }

	    for (var key in re) {
	        if(re[key].test(number)) {
	            return key
	        }
	    }
	}

	render() {
		var data = {};

		Object.assign(data, this.props.order.paymentInfo);
		
		return (
			<div className={ styles["main"] }>
				<div className={ formStyles["header"] }>{ $T(32) /* Payment*/ }</div>
				<Input 
					dataKey={ "card_number" }
					data={ data }
					onchange={ this.onchange.bind(this) }
					inputWidth="480px" 
					placeholder={$T("33") /* Card Number */ } 
				/>
				<CardTypeSelector 
					selected={ this.props.order.paymentInfo.card_type }
					confirmCardType={ this.confirmCardType.bind(this) }
				/>
				<InputExpiry
					dataKey={ "expiry" }
					data={ data }
					onchange={ this.onchange.bind(this) }
					inputWidth="130px"
					placeholder={$T("35") /* MM/YY */} 
				/> 
				<Input 
					dataKey={ "cvv" }
					data={ data }
					onchange={ this.onchange.bind(this) }
					inputWidth="130px"
					placeholder={$T("36") /* CVV */} 
				/>
				<Input 
					dataKey={ "card_holder" } 
					data={ data }
					onchange={ this.onchange.bind(this) }
					inputWidth="480px" 
					placeholder={$T("34") /* Name On Card */}
				/> 
				<FormNavigation 
					navigateForward={ this.navigateForward.bind(this) }
					navigateBackward= { this.navigateBackward.bind(this) }
				/>
			</div>
		)
	}
}

export default PaymentForm
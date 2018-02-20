import React, { Component } from 'react'
import formStyles from '../CheckoutForm/CheckoutForm.css'
import styles from './PaymentForm.css'
import beachHut from '../../main/BeachHut.js'
import $T from '../../support/translations.js'
import Icons from '../../support/Icons.js'
import {StripeProvider, Elements} from 'react-stripe-elements';
import InputUnderline from '../Inputs/InputUnderline/InputUnderline.js'
import TotalDetails from '../TotalDetails/TotalDetails.js'
import StripeCheckoutForm from '../Stripe/StripeCheckoutForm/StripeCheckoutForm.js'
import FormNavigation from '../FormNavigation/FormNavigation.js'
import CardTypeSelector from '../CardTypeSelector/CardTypeSelector.js'
import FulfilmentForm from '../FulfilmentForm/FulfilmentForm.js'

class PaymentForm extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			promoCode: "",
			cardHolder: ""
		}

		gtag('config', ENV.gaid, {'page_path': '/paymentform'});
	}

	static getTitle() {
		return $T(32) // Payment
	}

	navigateBackward() {
		if (this.props.order.countUnits() > 0) {
			this.props.setCurrentForm(FulfilmentForm);
		} else {
			beachHut.ui.displayMessage(
				$T(78), /* Order Empty */
				$T(77) /* Add item to order to proceed. */
			);
		}
	}

	onchange(obj) {
		this.setState(obj)
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
		return (
			<div className={ styles["main"] }>
				<div className={ formStyles["header"] }>{ $T(32) /* Payment*/ }</div>
				<div className={ styles["total-details-container"] }>
					<TotalDetails
						addition={ this.props.order.compileAddition() }
						isShippedInterational={ this.props.order.isShippedInterational() }
					/>
				</div>
				<div className={ styles["thank-you"] }>
					<div className={ styles["made-in-canada-icon"] } >
						{ Icons.insert('made_in_canada') }
					</div>
					<div className={ styles["thank-you-caption"] }>
						{ $T("73") /* "Thank you!" */ }
					</div>
				</div>
				<InputUnderline 
					dataKey={ "promoCode" }
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="340px"
					placeholder={$T("68") /* Promo Code */}
				/>
				<div className={ styles["apply-button"] }>
					<div className={ styles["caption"] }>
						{ $T("69") /* Apply */ }
					</div>
				</div>
				<InputUnderline 
					dataKey={ "cardHolder" } 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="500px" 
					placeholder={$T("34") /* Name On Card */}
				/>
				<StripeProvider apiKey="pk_test_RqVvmoPTp9c6r8OZlt1KOGUQ">
					<Elements
						fonts={ 
							[
							    {
									family: 'quantumrounded',
									src: 'url("https://cdn.shopify.com/s/files/1/1777/1415/t/1/assets/quantumrounded.otf?6009573855513922617")',
							    }
						  	] 
						}
					>
						<StripeCheckoutForm
							order={ this.props.order }
							card_holder={ this.state.cardHolder }
							navigateBackward={ this.navigateBackward.bind(this) }
							navigateForward={ this.props.order.complete }
						/>
					</Elements>
				</StripeProvider>
			</div>
		)
	}
}

export default PaymentForm
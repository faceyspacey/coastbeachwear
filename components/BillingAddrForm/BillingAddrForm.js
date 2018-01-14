import React, { Component } from 'react'
import styles from './BillingAddrForm.css'
import formStyles from '../CheckoutForm/CheckoutForm.css'
import InputUnderline from '../Inputs/InputUnderline/InputUnderline.js'
import $T from '../../support/translations.js'
import FormNavigation from '../FormNavigation/FormNavigation.js'
import ShippingAddrForm from '../ShippingAddrForm/ShippingAddrForm.js'
import FulfilmentForm from '../FulfilmentForm/FulfilmentForm.js'

class BillingAddrForm extends Component {
	constructor(props, context) {
		super(props, context)
		
		this.state = props.order.getBillingAddr();
		this.styles = styles;
		gtag('config', ENV.gaid, {'page_path': '/billingaddrform'});
	}

	static getTitle() {
		return $T(15) // Billing Details
	}

	navigateForward() {
		this.props.setCurrentForm(FulfilmentForm);
	}

	navigateBackward() {
		this.props.setCurrentForm(ShippingAddrForm);
	}

	onchange(obj) {
		this.setState(obj);
		this.props.order.setBillingAddr(obj);
	}

	render() {
		return (
			<div className={styles["main"]}>
				<div className={ formStyles["header"] }>{ $T(15) /* Shipping Address*/}</div>
								<InputUnderline 
					dataKey={"first_name"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="260px" 
					placeholder={$T("1") /* First Name */ } 
				/> 
				<InputUnderline 
					dataKey={"last_name"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="340px"
					placeholder={$T("2") /* Last Name */}
				/> 
				<InputUnderline
					dataKey={"company"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="610px"
					placeholder={$T("9") /* Company */} 
				/> 
				<InputUnderline 
					dataKey={"address"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="440px"
					placeholder={$T("4") /* Address */} 
				/>
				<InputUnderline
					dataKey={"apt"} 
					data={ this.state } 
					onchange={ this.onchange.bind(this) }
					inputWidth="160px"
					placeholder={$T("5") /* Apt, Suite (opt) */} 
				/>
				<InputUnderline
					dataKey={"city"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="300px"
					placeholder={$T(58) /* City */}
				/>
				<InputUnderline 
					dataKey={"territory"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="300px"
					placeholder={$T("7") /* Provice */} 
				/>
				<InputUnderline
					dataKey={"country"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="420px"
					placeholder={$T("6") /* Country */}
				/>
				<InputUnderline 
					dataKey={"postal_code"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="180px"
					placeholder={$T("8") /* Postal Code */} 
				/>
				<InputUnderline 
					dataKey={"email"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="360px"
					placeholder={$T(18) /* Email */} 
				/>
				<InputUnderline 
					dataKey={"phone"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="240px"
					placeholder={$T(17) /* Phone (optional) */} 
				/>
				<FormNavigation 
					navigateForward={ this.navigateForward.bind(this) }
					navigateBackward= { this.navigateBackward.bind(this)}
				/>
			</div>
		)
	}
}

export default BillingAddrForm
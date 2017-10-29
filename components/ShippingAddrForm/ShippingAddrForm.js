import React, { Component } from 'react'
import formStyles from '../CheckoutForm/CheckoutForm.css'
import styles from './ShippingAddrForm.css'
import Input from '../Inputs/Input.js'
import $T from '../../support/translations.js'
import FormNavigation from '../FormNavigation/FormNavigation.js'
import BillingAddrForm from '../BillingAddrForm/BillingAddrForm.js'
import PaymentForm from '../PaymentForm/PaymentForm.js'
import Checkbox from '../Checkbox/Checkbox.js'

class ShippingAddrForm extends Component {
	constructor(props, context) {
		super(props, context)
		
		this.state = props.order.shippingAddr;
		this.state.sameAsBilling = !this.props.order.isShippingAddrEmpty() && this.props.order.isSameAddress();
	}

	static getTitle() {
		return $T(10) // Shipping Details
	}

	navigateForward() {
		var nextForm;

		if (this.state.sameAsBilling) {
			nextForm = PaymentForm;
			this.props.order.setBillingAddr(this.state);
		} else {
			nextForm = BillingAddrForm;
		}
		
		this.props.setCurrentForm(nextForm);
	}

	onchange(obj) {
		this.setState(obj);
		this.props.order.setShippingAddr(obj);

	}

	setSameAsBilling () {
		this.setState({
			sameAsBilling: !this.state.sameAsBilling
		})
	}

	render() {
		
		return (
			<div className={styles["main"]}>
				<div className={formStyles["header"]}>{ $T(10) /* Shipping Address*/ }</div>
				<Input 
					dataKey={"first_name"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="260px" 
					placeholder={$T("1") /* First Name */ } 
				/> 
				<Input 
					dataKey={"last_name"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="340px"
					placeholder={$T("2") /* Last Name */}
				/> 
				<Input
					dataKey={"company"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="610px"
					placeholder={$T("9") /* Company */} 
				/> 
				<Input 
					dataKey={"address"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="440px"
					placeholder={$T("4") /* Address */} 
				/>
				<Input
					dataKey={"apt"} 
					data={ this.state } 
					onchange={ this.onchange.bind(this) }
					inputWidth="160px"
					placeholder={$T("5") /* Apt, Suite (opt) */} 
				/>
				<Input
					dataKey={"country"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="196.6px"
					placeholder={$T("6") /* Country */}
				/>
				<Input 
					dataKey={"province"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="196.6px"
					placeholder={$T("7") /* Provice */} 
				/>
				<Input 
					dataKey={"postal_code"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="196.6px"
					placeholder={$T("8") /* Postal Code */} 
				/>
				<Input 
					dataKey={"email"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="360px"
					placeholder={$T(18) /* Email */} 
				/>
				<Input 
					dataKey={"phone"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="240px"
					placeholder={$T(17) /* Phone (optional) */} 
				/>
				<Checkbox 
					caption={ $T(37) /* Billing address same as shipping address? */ }
					checked={ this.state.sameAsBilling }
					onclick = { this.setSameAsBilling.bind(this) }
				/>
				<FormNavigation 
					navigateForward={ this.navigateForward.bind(this) }
				/>
			</div>
		)
	}
}

export default ShippingAddrForm
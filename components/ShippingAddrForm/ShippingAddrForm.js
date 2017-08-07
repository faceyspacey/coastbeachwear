import React, { Component } from 'react'
import formStyles from '../CheckoutForm/CheckoutForm.css'
import styles from './ShippingAddrForm.css'
import Input from '../input/input.js'
import $T from '../../support/translations.js'
import FormNavigation from '../FormNavigation/FormNavigation.js'
import BillingAddrForm from '../BillingAddrForm/BillingAddrForm.js'

class ShippingAddrForm extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = props.order.shippingAddr;
	}

	navigateForward() {
		this.props.setCurrentForm(BillingAddrForm);
	}

	navigateBackward() {
		
	}

	onchange(obj) {
		this.props.order.setShippingAddr(obj);
	}

	render() {
		return (
			<div className={styles["main"]}>
				<div className={formStyles["header"]}>{ $T(10) /* Shipping Details*/ }</div>
				<Input 
					dataKey={"first_name"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="300px" 
					placeholder={$T("1") /* First Name */ } 
				/> 
				<Input 
					dataKey={"last_name"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="300px"
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
				<FormNavigation 
					navigateForward={ this.navigateForward.bind(this) }
					navigateBackward= { this.navigateBackward.bind(this) }
				/>
			</div>
		)
	}
}

export default ShippingAddrForm
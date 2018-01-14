import React, { Component } from 'react'
import formStyles from '../CheckoutForm/CheckoutForm.css'
import styles from './ShippingAddrForm.css'
import InputUnderline from '../Inputs/InputUnderline/InputUnderline.js'
import $T from '../../support/translations.js'
import FormNavigation from '../FormNavigation/FormNavigation.js'
import BillingAddrForm from '../BillingAddrForm/BillingAddrForm.js'
import FulfilmentForm from '../FulfilmentForm/FulfilmentForm.js'
import Checkbox from '../Checkbox/Checkbox.js'
import { ui } from '../../main/BeachHut.js'

class ShippingAddrForm extends Component {
	constructor(props, context) {
		super(props, context)
		
		this.state = props.order.getShippingAddr();
		this.state.sameAsBilling = !this.props.order.isShippingAddrEmpty() && this.props.order.isSameAddress();
		this.state.isProcessing = false;
	}

	static getTitle() {
		return $T(10) // Shipping Details
	}

	navigateForward() {
		var nextForm;

		if (!this.props.order.countUnits()) {
			ui.displayMessage(
				$T(78), /* Order Empty */
				$T(77) /* Add item to order to proceed. */
			);
			return;
		}

		function createShipmentSuccess() {
			if (this.state.sameAsBilling) {
				nextForm = FulfilmentForm;
				this.props.order.setBillingAddr(this.props.order.shippingAddr);
			} else {
				nextForm = BillingAddrForm;
			}

			this.props.setCurrentForm(nextForm);
		}
		createShipmentSuccess = createShipmentSuccess.bind(this);

		function createShipmentFail() {
			this.setState({ isProcessing: false });
		}
		createShipmentFail = createShipmentFail.bind(this);

		this.setState({ isProcessing: true });

		this.props.order.setShippingAddr(this.state);
		this.props.order.fulfilment.createShipment(createShipmentSuccess, createShipmentFail);
	}

	onchange(obj) {
		this.setState(obj);
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
				<Checkbox 
					caption={ $T(37) /* Billing address same as shipping address? */ }
					checked={ this.state.sameAsBilling }
					onclick = { this.setSameAsBilling.bind(this) }
				/>
				<FormNavigation 
					navigateForward={ this.navigateForward.bind(this) }
					isProcessing={ this.state.isProcessing }
				/>
			</div>
		)
	}
}

export default ShippingAddrForm
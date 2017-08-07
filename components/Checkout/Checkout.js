import React, { Component } from 'react'
import styles from './Checkout.css'
import ShippingAddrForm from '../ShippingAddrForm/ShippingAddrForm.js'
import BillingAddrForm from '../BillingAddrForm/BillingAddrForm.js'
import OrderSummary from '../OrderSummary/OrderSummary.js'
import Icons from '../../support/Icons.js'

class Checkout extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = { currentForm: ShippingAddrForm }
	}

	setCurrentForm(form) {
		this.setState({
			currentForm: form
		})
	}

	updateBillingAddr(data) {
		var wasData = this.state.billingAddr;

		for (key in data) {
			if (!wasData[key]) continue;
			wasData[key] = data[key]
		}

		this.setState({
			billingAddr: wasData
		})
	}

	updateShippingAddr(data) {
		var wasData = this.state.shippingAddr;

		for (key in data) {
			if (!wasData[key]) continue;
			wasData[key] = data[key]
		}

		this.setState({
			shippingAddr: wasData
		})
	}

	render() {
		return (
			<div className={ styles["main"] }>
				<div className={ styles["left-column"] }>
					<div className={ styles["form-container"] }>
						{ <this.state.currentForm order={ this.props.order } setCurrentForm = { this.setCurrentForm.bind(this) }/> }
					</div>
				</div>
				<div className={styles["right-column"]}>
					<OrderSummary/>
				</div>
			</div>
		)
	}
}

export default Checkout
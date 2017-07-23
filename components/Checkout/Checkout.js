import React, { Component } from 'react'
import styles from './Checkout.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm.js'
import OrderSummary from '../OrderSummary/OrderSummary.js'


class Checkout extends Component {
	render() {
		return (
			<div className={styles["main"]}>
				<div className={styles["left-column"]}>
					<CheckoutForm />
				</div>
				<div className={styles["right-column"]}>
					<OrderSummary/>
				</div>
			</div>
		)
	}
}

export default Checkout
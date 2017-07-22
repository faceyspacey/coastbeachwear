import React, { Component } from 'react'
import styles from './Checkout.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm.js'


class Checkout extends Component {
	render() {
		return (
			<div className={styles["main"]}>
				<div className={styles["left-column"]}>
					<CheckoutForm />
				</div>
				<div className={styles["right-column"]}>
				</div>
			</div>
		)
	}
}

export default Checkout
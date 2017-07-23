import React, { Component } from 'react'
import styles from './CheckoutForm.css'
import Input from '../input/input.js'

class CheckoutForm extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			firstName: "",
			LastName: "",
			company: "",
			apartment: ""
		}
	}

	render() {
		return (
			<div className={styles["main"]}>
				<Input inputWidth="300px" placeholder="First Name" />
				<Input inputWidth="300px" placeholder="Last Name" />
				<Input inputWidth="610px" placeholder="Company (optional)"/>
				<Input inputWidth="440px" placeholder="Address" />
				<Input inputWidth="160px" placeholder="Apt, Suite (opt)" />
				<Input inputWidth="196.6px" placeholder="Country" />
				<Input inputWidth="196.6px"placeholder="Provice" />
				<Input inputWidth="196.6px" placeholder="Postal Code" />
			</div>
		)
	}
}

export default CheckoutForm
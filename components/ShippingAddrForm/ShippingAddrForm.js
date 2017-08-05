import React, { Component } from 'react'
import styles from './ShippingAddrForm.css'
import Input from '../input/input.js'
import $T from '../../support/translations.js'

class ShippingAddrForm extends Component {
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
				<Input inputWidth="300px" placeholder={$T("1") /* First Name */ } /> 
				<Input inputWidth="300px" placeholder={$T("2") /* Last Name */} /> 
				<Input inputWidth="440px" placeholder={$T("4") /* Address */} />
				<Input inputWidth="160px" placeholder={$T("5") /* Apt, Suite (opt) */} />
				<Input inputWidth="196.6px" placeholder={$T("6") /* Country */} />
				<Input inputWidth="196.6px"placeholder={$T("7") /* Provice */} />
				<Input inputWidth="196.6px" placeholder={$T("8") /* Postal Code */} />
			</div>
		)
	}
}

export default ShippingAddrForm
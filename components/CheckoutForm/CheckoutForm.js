import React, { Component } from 'react'
import styles from './CheckoutForm.css'
import Input from '../input/input.js'

class CheckoutForm extends Component {
	render() {
		return (
			<div className={styles["main"]}>
				<Input/>
				<Input/>
				<Input/>
			</div>
		)
	}
}

export default CheckoutForm
import React, { Component } from 'react'
import { CardNumberElement } from 'react-stripe-elements';
import InputStripe from "../InputStripe/InputStripe.js"
import Icons from '../../../support/Icons.js'
import styles from './InputStripeCardNumber.css'

class InputStripeCardNumber extends InputStripe {
	styles = Object.assign({}, this.styles, styles);

	cardBrand2Icon = {
		visa: "visa",
		mastercard: "mastercard",
		amex: "amex"
	}

	constructor(props, context) {
		super(props, context)

		this.state = {
			cardBrand: "",
			empty: true,
			focused: false
		}
	}

	getIconFromState() {
		return this.cardBrand2Icon[this.state.cardBrand] || "credit_card";
	}

	onchange(event) {
		this.setState({
			cardBrand: event.brand,
			empty: event.empty
		})
	}

	inputElement() {
		return (
			<div 
				style={{ width: this.props.inputWidth }}
				className={ this.classString() } 
			>
				<div className={this.styles["cc-icon"]}>
					{ Icons.insert(this.getIconFromState()) }
				</div >
				<div className={this.styles["stripe-element-container"]}>
					<CardNumberElement
						onChange={ this.onchange.bind(this)}
						onFocus={ this.onfocus.bind(this) }
						onBlur={ this.onblur.bind(this) }
						placeholder={ this.props.placeholder }
						style={{ 
							base: { 
								fontSize: '14px',
								fontFamily: "quantumrounded",
								color: "#383838",
								"::placeholder": {
									"fontFamily": "quantumrounded"
								}
							}
						}}
					/>
				</div>
			</div>
		)
	}
};

export default InputStripeCardNumber;
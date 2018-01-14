import React, { Component } from 'react'
import { CardExpiryElement } from 'react-stripe-elements';
import InputStripe from "../InputStripe/InputStripe.js"

class InputStripeExpiry extends InputStripe {
  	inputElement() {
		return (
			<div 
				style={{ width: this.props.inputWidth }}
				className={ this.classString() } 
			>
				<div className={this.styles["stripe-element-container"]}>
					<CardExpiryElement
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

export default InputStripeExpiry;
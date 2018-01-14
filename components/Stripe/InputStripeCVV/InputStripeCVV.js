import React, { Component } from 'react'
import { CardCVCElement } from 'react-stripe-elements';
import InputStripe from "../InputStripe/InputStripe.js"
import Icons from "../../../support/Icons.js"
import styles from "./InputStripeCVV.css"

class InputStripeCVV extends InputStripe {
	styles = Object.assign({}, this.styles, styles);

	inputElement() {
		return (
			<div 
				style={{ width: this.props.inputWidth }}
				className={ this.classString() } 
			>
				<div className={this.styles["stripe-element-container"]}>
					<CardCVCElement
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
				<div className={this.styles["cvv-icon"]}>
					{ Icons.insert("cvv") }
				</div>
			</div>
		)
	}
};

export default InputStripeCVV;
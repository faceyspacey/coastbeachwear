import React, { Component } from 'react'
import { CardNumberElement } from 'react-stripe-elements';
import InputUnderline from "../../Inputs/InputUnderline/InputUnderline.js"
import styles from './InputStripe.css'


class InputStripe extends InputUnderline {
	styles = Object.assign({}, this.styles, styles);

	constructor(props, context) {
		super(props, context)

		this.state = {
			empty: true,
			focused: false
		}
	}

	hasContent() {
		return !this.state.empty;
	}

	onchange(event) {
		this.setState({
			empty: event.empty
		})
	}


	onfocus() {
		this.setState({
			focused: true
		})
	}

	onblur() {
		this.setState({
			focused: false
		})
	}

	classString() {
		var filledClass = this.state.empty? this.styles["input"] : this.styles["input-filled"];
		var focusClass = this.state.focused? this.styles["focus"]: "";

		return [filledClass, focusClass].filter(Boolean).join(" ")
	}
};

export default InputStripe;
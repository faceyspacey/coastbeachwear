import React, { Component } from 'react'
import InputUnderline from '../InputUnderline/InputUnderline.js'

class InputExpiry extends InputUnderline {

	static type = "numeric";

	constructor(props, context) {
		super(props, context)
	}

	onchange(event) {
		var newData = {}

		newData[this.props.dataKey] = event.target.value.replace('/', '').slice(0, 4);

		if (isNaN(newData[this.props.dataKey])) return;

		this.props.onchange(newData);
	}

	formatedValue() {
		var expiry = this.props.data.expiry;

		if (expiry && expiry.length > 2) {
			expiry = expiry.splice(2, 0, '/');
		}
		
		return expiry
	}
}

export default InputExpiry
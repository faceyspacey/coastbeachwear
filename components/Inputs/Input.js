import React, { Component } from 'react'
import styles from './Input.css'
import Icons from '../../support/Icons.js'

class Input extends Component {

	static type = "text";
	styles = styles;

	constructor(props, context) {
		super(props, context)
		this.state = {
			dataKey: props.dataKey
		}
	}

	onchange(event) {
		var newData = {}

		newData[this.props.dataKey] = event.target.value

		this.props.onchange(newData);
	}

	formatedValue() {
		return this.props.data[this.state.dataKey];
	}

	hasContent() {
		return !!this.props.data[this.state.dataKey];
	}

	inputElement() {
		return (
			<input 
				className={ this.hasContent()? this.styles["input-filled"] : this.styles["input"] } 
				placeholder={ this.props.placeholder }
				onChange={ this.onchange.bind(this) } 
				style={{ width: this.props.inputWidth }}
				type= { this.constructor.type }
				value= { this.formatedValue() }
			/>
		)
	}

	render() {
		return (
			<div className={ this.styles["main"] }>
				<div className={ this.styles["text-area"] }>
					<label className={ this.hasContent()? this.styles["placeholder"]: this.styles["placeholder-hidden"] }>{ this.props.placeholder }</label>
					{ this.inputElement() }
				</div>
				<div className={ this.styles["error-message"] }>
				</div>
			</div>
		)
	}
}

export default Input
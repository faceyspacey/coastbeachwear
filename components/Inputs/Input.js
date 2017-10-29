import React, { Component } from 'react'
import styles from './Input.css'
import Icons from '../../support/Icons.js'

class Input extends Component {

	static type = "text";

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

	render() {
		var hasContent = !!this.props.data[this.state.dataKey];
		return (
			<div className={ styles["main"] }>
				<div className={ styles["text-area"] }>
					<label className={ hasContent? styles["placeholder"]: styles["placeholder-hidden"] }>{ this.props.placeholder }</label>
					<input 
						className={ hasContent? styles["input-filled"] : styles["input"] } 
						placeholder={ this.props.placeholder }
						onChange={ this.onchange.bind(this) } 
						style={{ width: this.props.inputWidth }}
						type= { this.constructor.type }
						value= { this.formatedValue() }
					/>
				</div>
			</div>
		)
	}
}

export default Input
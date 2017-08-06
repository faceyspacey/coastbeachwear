import React, { Component } from 'react'
import styles from './input.css'
import Icons from '../../support/Icons.js'

class Input extends Component {

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

	render() {
		var text = this.props.data[this.state.dataKey];
		
		return (
			<div className={ styles["main"] }>
				<div className={ styles["text-area"] }>
					<label className={ text? styles["placeholder"]: styles["placeholder-hidden"] }>{ this.props.placeholder }</label>
					<input 
						className={ styles["input"] } 
						placeholder={ this.props.placeholder }
						onChange={ this.onchange.bind(this) } 
						style={{ width: this.props.inputWidth }}
						type="text"
						value= { text }
					/>
				</div>
			</div>
		)
	}
}

export default Input
import React, { Component } from 'react'
import styles from './QuantityPicker.css'
import Icons from '../../support/Icons.js'
import {$T, $TInject} from '../../support/translations.js'

class QuantityPicker extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			inputValue: this.props.quantity
		}
	}

	decrementQuantity() {
		var wasQuantity = this.props.quantity;

		if (wasQuantity < 2) return
		
		this.setQuantity(--wasQuantity);
	}

	incrementQuantity() {
		var wasQuantity = this.props.quantity;

		this.setQuantity(++wasQuantity);
	}

	onchange(event) {
		var value = parseInt(event.target.value);

		this.setState({
			inputValue: value
		})

		if (Number.isNaN(value) || !Number.isInteger(value) || value < 1) return;	
		
		this.setQuantity(value);

	}

	setQuantity(value) {
		this.props.setQuantity(value);

		this.setState({
			inputValue: value
		})

	}

	render() {
		return (
			<div className={ styles["main"] }>
				<div className={ styles["minus"] } onClick={ this.decrementQuantity.bind(this) }>
					&#45;
				</div>
				<div className={ styles["quantity"] }>
					<input type="number" value={ this.state.inputValue } onChange={ this.onchange.bind(this) }/>
				</div>
				<div className={ styles["plus"] } onClick={ this.incrementQuantity.bind(this) }>
					&#43;
				</div>
			</div>
		)
	}
}

export default QuantityPicker
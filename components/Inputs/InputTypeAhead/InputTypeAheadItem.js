import React, { Component } from 'react'
import styles from './InputTypeAheadItem.css'

class InputTypeAheadItem extends Component {

	constructor(props, context) {
		super(props, context)
	}

	onselect() {
		this.props.onselect(this.props.dataKey);
	}

	render() {
		return (
			<div 
				className={ this.props.selected? styles["main-selected"] : styles["main"] }
				onClick={ this.onselect.bind(this) }
			>
				{ this.props.caption }
			</div>
		)
	}
}

export default InputTypeAheadItem
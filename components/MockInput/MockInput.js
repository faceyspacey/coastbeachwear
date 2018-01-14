import React, { Component } from 'react'
import styles from '../Inputs/Input.css'
import Icons from '../../support/Icons.js'

class MockInput extends Component {
	constructor(props, context) {
		super(props, context)
	}

	styles = styles;

	render() {
		return (
			<div className={ this.styles["main"] }>
				<div className={ this.styles["text-area"] }>
					<label className={ this.styles["placeholder"] }>{ this.props.placeholder }</label>
					<input 
						className={ this.styles["input-filled"] } 
						style={{ width: this.props.inputWidth }}
						value= { this.props.value }
						disabled={"disabled"}
					/>
				</div>
			</div>
		)
	}
}

export default MockInput
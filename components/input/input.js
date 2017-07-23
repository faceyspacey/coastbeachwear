import React, { Component } from 'react'
import styles from './input.css'
import Icons from '../../support/Icons.js'

class Input extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			text: ""
		}
	}
	
	onchange = (event) =>  {
		this.setState({
			text: event.target.value
		})
	};

	render() {
		return (
			<div className={styles["main"]}>
				<div className={styles["text-area"]}>
					<label className={this.state.text? styles["placeholder"]: styles["placeholder-hidden"]}>{this.props.placeholder}</label>
					<input 
						className={styles["input"]} 
						placeholder={this.props.placeholder}
						onChange={this.onchange} 
						style={{width: this.props.inputWidth}}
						type="text" 
					/>
				</div>
			</div>
		)
	}
}

export default Input
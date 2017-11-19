import React, { Component } from 'react'
import styles from './FooterMenuItem.css'
import $T from '../../support/translations.js'

class FooterMenuItem extends Component {

	constructor(props, context) {
		super(props, context)
	}

	onselect() {
		this.props.onselect(this.props.option);
	}

	render() {
		return (
			<div 
				className={ this.props.selected? styles["main-selected"] : styles["main"] }
				onClick={ this.onselect.bind(this) }
			>
				{ $T(this.props.option) }
			</div>
		)
	}
}

export default FooterMenuItem
import React, { Component } from 'react'
import styles from './SizePickerChoice.css'
import Icons from '../../support/Icons.js'
import {$T, $TInject} from '../../support/translations.js'

class SizePickerChoice extends Component {
	constructor(props, context) {
		super(props, context);
	}

	onsizeclick() {
		this.props.setCurrentVariant(this.props.variant);
	}

	render() {
		return (
			<div
				className={ this.props.selected? styles["main-selected"]:  styles["main-unselected"]}
				onClick={ this.onsizeclick.bind(this) }
			>
				{ $T(this.props.variant.size) }
			</div>
		)
	}
}

export default SizePickerChoice
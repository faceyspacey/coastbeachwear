import React, { Component } from 'react'
import styles from './SizePicker.css'
import Icons from '../../support/Icons.js'
import {$T, $TInject} from '../../support/translations.js'
import SizePickerChoice from './SizePickerChoice.js'

class SizePicker extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className={ styles["main"] }>
				{
					this.props.sizeVariants.map((function(variant) {						
						return <SizePickerChoice
						 	key={ variant.size }
						 	variant={ variant }
						 	selected={ this.props.currentVariant == variant }
						 	setCurrentVariant={ this.props.setCurrentVariant }/>
					}).bind(this))
				}
			</div>
		)
	}
}

export default SizePicker
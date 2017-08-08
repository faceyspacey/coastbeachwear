import React, { Component } from 'react'
import styles from './ProductDisplay.css'
import Icons from '../../support/Icons.js'
import $T from '../../support/translations.js'

class ProductDisplay extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			index: props.index.toString()
		}
	}

	render() {
		return (
			<div className={ styles["main" + this.state.index] }>
				<div>{$T(13)}</div>
				<div>{$T(14)}</div>
				<div className={ styles["tip"] }>
				</div>
			</div>
		)
	}
}

export default ProductDisplay
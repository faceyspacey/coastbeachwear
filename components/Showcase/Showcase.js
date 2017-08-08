import React, { Component } from 'react'
import styles from './Showcase.css'
import Icons from '../../support/Icons.js'
import ProductDisplay from '../ProductDisplay/ProductDisplay.js'

class Showcase extends Component {
	render() {
		return (
			<div className={ styles["main"] }>
				{ Icons.insert('logo', styles.logo) }
				<div className={ styles["product-showcase"] }>
					<ProductDisplay index={0} />
					<ProductDisplay index={1} />
				</div>
			</div>
		)
	}
}

export default Showcase
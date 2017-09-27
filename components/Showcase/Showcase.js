import React, { Component } from 'react'
import styles from './Showcase.css'
import Icons from '../../support/Icons.js'
import ProductDisplay from '../ProductDisplay/ProductDisplay.js'

class Showcase extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className={ styles["main"] }>
				{ Icons.insert('logo', styles.logo) }
				<div className={ styles["product-showcase"] }>
					<img src="/product_imgs/torso.png" className={ styles["torso"] } />
					{
						this.props.product.getVariantsBySize("m").map(function(variant, index) {
							return <ProductDisplay index={index} key={ variant.id } variant={ variant } />
						})
					}
				</div>
			</div>
		)
	}
}

export default Showcase
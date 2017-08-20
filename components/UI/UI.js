import React, { Component } from 'react'
import styles from './UI.css'
import Showcase from '../ShowCase/ShowCase.js'
import Checkout from '../Checkout/Checkout.js'
import Footer from '../Footer/Footer.js'
import OverlayPurchase from '../OverlayPurchase/OverlayPurchase.js'

class UI extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			order: props.order,
			currentOverlay: undefined,
		};
	}

	closeOverlay() {
		this.setState({
			currentOverlay: undefined
		});
	}

	displayPurchaseOverlay(purchase) {
		var overlay = (
			<OverlayPurchase purchase={ purchase } closeOverlay={ this.closeOverlay.bind(this) } />
		)

		this.setState({
			currentOverlay: overlay
		});
	}

	render() {
		return (
			<div>
				<Showcase product={ this.props.products[0] }/>
				<Checkout order= { this.state.order }/>
				<Footer/>
				{ this.state.currentOverlay }
			</div>
		)
	}
} 

export default UI
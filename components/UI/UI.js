import React, { Component } from 'react'
import styles from './UI.css'
import Showcase from '../Showcase/Showcase.js'
import Checkout from '../Checkout/Checkout.js'
import Footer from '../Footer/Footer.js'
import OverlayPurchase from '../OverlayPurchase/OverlayPurchase.js'
import OverlayAbout from '../OverlayAbout/OverlayAbout.js'
import OverlayPolicies from '../OverlayPolicies/OverlayPolicies.js'
import HelpButton from '../HelpButton/HelpButton.js'

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

	displayAboutOverlay() {
		this.setState({
			currentOverlay: (
				<OverlayAbout closeOverlay={ this.closeOverlay.bind(this) } />
			)
		});
	}

	displayPolicyOverlay() {
		this.setState({
			currentOverlay: (
				<OverlayPolicies closeOverlay={ this.closeOverlay.bind(this) } />
			)
		});
	}

	render() {
		return (
			<div>
				<Showcase product={ this.props.products[0] }/>
				<Checkout order= { this.state.order }/>
				<Footer />
				{ this.state.currentOverlay }
				<HelpButton />
			</div>
		)
	}
} 

export default UI
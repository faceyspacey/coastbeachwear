import React, { Component } from 'react'
import styles from './App.css'
import 'normalize.css'
import Showcase from '../ShowCase/ShowCase.js'
import Checkout from '../Checkout/Checkout.js'
import Footer from '../Footer/Footer.js'

class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			order: props.order
		};
	}

	render() {
		return (
			<div>
				<Showcase/>
				<Checkout order= { this.state.order }/>
				<Footer/>
			</div>
		)
	}
} 

export default App
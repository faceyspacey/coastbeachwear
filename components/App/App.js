import React, { Component } from 'react'
import styles from './App.css'
import 'normalize.css'
import Showcase from '../ShowCase/ShowCase.js'
import Checkout from '../Checkout/Checkout.js'
import Footer from '../Footer/Footer.js'

class App extends Component {
	render() {
		return (
			<div>
				<Showcase/>
				<Checkout/>
				<Footer/>
			</div>
		)
	}
} 

export default App
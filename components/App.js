import React, { Component } from 'react'
import styles from './App.css'
import 'normalize.css'
import ShowCase from './ShowCase'

class App extends Component {
	render() {
		return (
			<div>
				<h1 className={styles.test}>12</h1>
				<ShowCase className="show_case"/>
			</div>
		)
	}
} 

export default App
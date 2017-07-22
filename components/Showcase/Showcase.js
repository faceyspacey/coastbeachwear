import React, { Component } from 'react'
import styles from './Showcase.css'
import Icons from '../../support/Icons.js'

class Showcase extends Component {
	render() {
		return (
			<div className={styles["main"]}>
					{ Icons.insert('logo', styles.logo) }
			</div>
		)
	}
}

export default Showcase
import React, { Component } from 'react'
import styles from './Showcase.css'
import Icons from '../../support/Icons.js'

class Showcase extends Component {
	render() {
		return (
			<div className={ styles["main"] }>
					{ Icons.insert('logo', styles.logo) }
					<div className={ styles["main"] }>
						<div className={ styles["main"] }>
						</div>
					</div>
			</div>
		)
	}
}

export default Showcase
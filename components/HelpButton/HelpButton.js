import React, { Component } from 'react'
import styles from './HelpButton.css'
import Icons from '../../support/Icons.js'

class helpButton extends Component {
	
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<div className={ styles["main"] }>
				<div className={ styles["help-icon"] }>
					{ Icons.insert('help') }
				</div>
			</div>
		)
	}
}

export default helpButton
import React, { Component } from 'react'
import styles from './MessageBoxButton.css'
import Icons from '../../../support/Icons.js'
import $T from '../../../support/translations.js'

import beachHut from '../../../main/BeachHut.js' 

class MessageBoxButton extends Component {
	constructor(props, context) {
		super(props, context)
	}

	onclick() {
		beachHut.ui.setState({ message: undefined });
		if (this.props.onclick) this.props.onclick();
	}

	render() {
		return (
			<div className={styles["main"]} onClick={ this.onclick.bind(this) }>
				{ this.props.caption }
			</div>
		)
	}
}

export default MessageBoxButton
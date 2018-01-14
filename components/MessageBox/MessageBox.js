import React, { Component } from 'react'
import styles from './MessageBox.css'
import Icons from '../../support/Icons.js'
import $T from '../../support/translations.js'

class MessageBox extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<div className={styles["main"]}>
				<div className={styles["title"]}>
					{ this.props.title }
				</div>
				<div className={styles["message"]}>
					{ this.props.message }
				</div>
			</div>
		)
	}
}

export default MessageBox
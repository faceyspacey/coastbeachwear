import React, { Component } from 'react'
import styles from './MessageBox.css'
import Icons from '../../support/Icons.js'
import $T from '../../support/translations.js'

import MessageBoxButton from './MessageBoxButton/MessageBoxButton.js'

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
				{
					this.props.buttons && this.props.buttons.length > 0 &&
					<div className={styles["button-section"]}>				
						{
							this.props.buttons.map(function(button, index) {
								return (
									<MessageBoxButton
										key={`button-${index + 1}`}
										caption={ button.caption }
										onclick={ button.onclick }
									/>
								)
							})
						}
					</div>
				}

			</div>
		)
	}
}

export default MessageBox
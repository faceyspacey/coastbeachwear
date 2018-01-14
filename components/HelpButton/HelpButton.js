import React, { Component } from 'react'
import styles from './HelpButton.css'
import Icons from '../../support/Icons.js'
import { ui } from '../../main/BeachHut.js'

class helpButton extends Component {
	
	constructor(props, context) {
		super(props, context)
		this.state = {
			active: false
		}
	}

	closeCallBack() {
		this.setState({
			active: false
		})
	}

	onclick() {
		if (!this.state.active) {
			ui.displayHelpOverlay(this.closeCallBack.bind(this))
		} else {
			ui.closeOverlay();
			this.closeCallBack();
		}

		this.setState({
			active: !this.state.active
		});

	}

	mainCssClass() {
		return this.state.active? `${styles["main"]} ${styles["active"]}` : styles["main"]; 
	}

	render() {
		return (
			<div className={ this.mainCssClass() } onClick={ this.onclick.bind(this) }>
				<div className={ styles["help-icon"] }>
					{ Icons.insert('help') }
				</div>
			</div>
		)
	}
}

export default helpButton
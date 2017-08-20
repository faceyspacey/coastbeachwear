import React, { Component } from 'react'
import styles from './Overlay.css'
import Icons from '../../support/Icons.js'
import $T from '../../support/translations.js'

class Overlay extends Component {
	constructor(props, context) {
		super(props, context)
	}

	onOverlayClick(event) {
		event.stopPropagation();
		this.props.closeOverlay();
	}

	onMainClick(event) {
		event.stopPropagation();
	}

	onCloseClick() {
		event.stopPropagation();
		this.props.closeOverlay();
	}

	render() {
		return (
			<div className={ styles["overlay"] } onClick={ this.onOverlayClick.bind(this) }>
				<div className={ styles["main"] } onClick={ this.onMainClick }>
					<div className={ styles["title-bar"] }>
						<div className={ styles["title-bar-inner"] }>
						</div>
						<div className={ styles["cut-out-container"] }>
							<div className={ styles["cut-out"] } >
							</div>
						</div>
					</div>
					<div className={ styles["close"] } onClick={ this.onCloseClick.bind(this) }>
						{ Icons.insert("clear") }
					</div>
					<div className={ styles["body"] }>
						{ 
							this.content() 
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Overlay
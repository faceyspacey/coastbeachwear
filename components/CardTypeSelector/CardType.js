import React, { Component } from 'react'
import styles from './CardType.css'
import Icons from '../../support/Icons.js'
import {$T, $TInject} from '../../support/translations.js'

class CardType extends Component {
	constructor(props, context) {
		super(props, context)
	}

	onclick() {
		this.props.confirmCardType(this.props.type);
	}

	render() {
		return (
			<div className={ styles["main"] } onClick={ this.onclick.bind(this) } >
				<div className={ styles[this.props.selected === true? "highlight-selected": "highlight" ] }>
					{ Icons.insert(this.props.type) }
				</div>
			</div>
		)
	}

}

export default CardType
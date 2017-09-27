import React, { Component } from 'react'
import styles from './CardTypeSelector.css'
import Icons from '../../support/Icons.js'
import { $T, $TInject } from '../../support/translations.js'
import { acceptedCards } from '../../support/settings.js'
import CardType from './CardType.js'

class CardTypeSelector extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<div className={ styles["main"] }>
				{
					acceptedCards.map((function(type) {
						return <CardType 
							key={ type } 
							type= { type } 
							selected={ type === this.props.selected }
							confirmCardType={ this.props.confirmCardType }
						/>
					}).bind(this))
				}
			</div>
		)
	}
}

export default CardTypeSelector
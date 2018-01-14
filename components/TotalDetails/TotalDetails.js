import React, { Component } from 'react'
import styles from './TotalDetails.css'
import Icons from '../../support/Icons.js'
import {$T, $TInject} from '../../support/translations.js'

class TotalDetails extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {}
	}


	render() {
		return (
			<div className={ styles['main'] }>
				<div className={ styles['addition'] }>
					<div className={ styles['line'] }>
						<div className={ styles['caption'] }>
							{ $T(28) /* Subtotal: */ } 
						</div>
						<div className={ styles['amount'] }>
							{ $TInject(27, [this.props.addition.subtotal.toFixed(2).toString()]) }
						</div>
					</div>
					<div className={ styles['line'] }>
						<div className={ styles['caption'] }>
							{ $T(71 /* Shipping */) }
						</div>
						<div className={ styles['amount'] }>
							{ $TInject(27, [this.props.addition.shipping.toFixed(2).toString()]) }
						</div>
					</div>
					<div className={ styles['line'] }>
						<div className={ styles['caption'] }>
							{ $T(70) /* Taxes */ }
						</div>
						<div className={ styles['amount'] }>
							{ $TInject(27, [this.props.addition.taxes.toFixed(2).toString()]) }
						</div>
					</div>
				</div>
				<div className={ styles['total'] }>
					<div className={ styles['caption'] }>
						{ $T(72) /* Total */ }
					</div>
					<div className={ styles['amount'] }>
						{ $TInject(27 ,[this.props.addition.total.toFixed(2).toString()]) }
					</div>
				</div>
			</div>
		)
	}
}

export default TotalDetails
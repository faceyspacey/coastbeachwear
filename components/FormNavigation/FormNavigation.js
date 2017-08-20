import React, { Component } from 'react'
import styles from './FormNavigation.css'
import ShippingAddrForm from '../ShippingAddrForm/ShippingAddrForm.js'
import OrderSummary from '../OrderSummary/OrderSummary.js'
import Icons from '../../support/Icons.js'
import $T from '../../support/translations.js'


class FormNavigation extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		return (
			<div className={ styles["navigation"] }>
				<div className={ styles["previous-arrow"]} onClick={ this.props.navigateBackward }>
					{ Icons.insert("next_arrow_long", styles["deleteme"]) }
				</div>
				<div className={ styles["next-arrow"]} onClick={ this.props.navigateForward }>
					<div className={ styles["caption"]}>
						{ $T(11) }
					</div>
					{ Icons.insert("next_arrow_outline") }
				</div>
			</div>
		)
	}
}

export default FormNavigation
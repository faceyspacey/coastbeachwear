import React, { Component } from 'react'
import styles from './ShippingProviderSelection.css'
import Icons from '../../../support/Icons.js'

class ShippingProviderSelection extends Component {
	styles = styles;

	constructor(props, context) {
		super(props, context)

		this.state = {};
	}

	onselect() {
		this.props.onselect(this.props.dataKey);
	}

	render() {
		var checked = this.props.selectedKey == this.props.dataKey;
		
		return (
			<div className={ this.styles["main"] }>
				<div className={ this.styles["title"] }>
					{ this.props.caption }
				</div>
				<div className={ styles["inner"] }>
					<div className={ styles["checkbox-container"] }>
						<div className={ checked? styles["checkbox-checked"]: styles["checkbox"] } onClick={ this.onselect.bind(this) }>
							{ checked? Icons.insert("checkmark"): "" }
						</div>
					</div>
					<div className={ styles["details"] }>
						<div className={ styles["provider"] }>
							{ this.props.provider }
						</div>
						<div className={ styles["eta"] }>
							{ this.props.term }
						</div>
					</div>
					<div className={ styles["price"] }>
						{ this.props.price }
					</div>
				</div>
			</div>
		)
	}
}

export default ShippingProviderSelection
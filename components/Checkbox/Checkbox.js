import React, { Component } from 'react'
import styles from './Checkbox.css'
import Icons from '../../support/Icons.js'

class Checkbox extends Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		var checked = this.props.checked;

		return (
			<div className={ styles["main"] }>
				<div className={ styles["inner"] }>
					<div className={ styles["box-container"] }>
						<div className={ checked? styles["box-checked"]: styles["box"] } onClick={ this.props.onclick }>
							{ checked? Icons.insert("checkmark"): "" }
						</div>
					</div>
					<div className={ styles["caption"] }>
						{ this.props.caption }
					</div>
				</div>
			</div>
		)
	}
}

export default Checkbox
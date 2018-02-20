import React, { Component } from 'react'
import styles from './AddressDisplay.css'
import Icons from '../../../support/Icons.js'
import $T from '../../../support/translations.js'

class AddressDisplay extends Component {

	styles = styles;

	constructor(props, context) {
		super(props, context);
	}

	compileAddrLines() {
		var addrObj = this.props.addrObj;
		var lines = [];

		lines = [
			addrObj.company,
			`${addrObj.first_name} ${addrObj.last_name}`,
			addrObj.apt?`${addrObj.apt}-${addrObj.address}`: addrObj.address,
			`${addrObj.city}, ${addrObj.territory}, ${addrObj.country}`,
			addrObj.postal_code
		]

		return lines.filter(function(line) {
			return !!line;
		});
	}

	rendreAddrLines(AddrObj) {
		return this.compileAddrLines().map((function(line, index) {
			var key = `line${ index + 1 }`
			
			return (
				<div className={ this.styles["address-line"] } key={ key }>
					{ line }
				</div>
			)	
		}).bind(this))
	}

	render() {
		return (
			<div className={ this.styles["main"] }>
				<div className={ this.styles["content"] }>
					<div className={ this.styles["title"] }>
						{ this.props.title }
					</div>
					<div>
						{ this.rendreAddrLines() }
					</div>
				</div>
			</div>
		)
	}
}

export default AddressDisplay
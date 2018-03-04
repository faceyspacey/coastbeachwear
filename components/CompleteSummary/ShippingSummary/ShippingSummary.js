import React, { Component } from 'react'
import AddressDisplay from '../AddressDisplay/AddressDisplay.js'
import styles from './ShippingSummary.css'
import Icons from '../../../support/Icons.js'
import $T from '../../../support/translations.js'
import locationServices from '../../../support/LocationServices.js'

class ShippingSummary extends Component {
	styles = Object.assign({}, this.styles, styles);

	isMapInited = false;

	constructor(props, context) {
		super(props, context);
	}

	initMap(element) {
		var options = {
			zoom: 16,
			disableDefaultUI: true
		};

		if (this.isMapInited === true) return;

		function retriveSuccess(latLng) {
			options.center = latLng;

			locationServices.initMap(element, [latLng], options);
			this.isMapInited = true
		};
		retriveSuccess = retriveSuccess.bind(this);

		locationServices.placeId2LatLng(this.props.placeId, retriveSuccess)
	}

	render() {
		return (
			<div className={ this.styles["main"] }>
				<div className={ this.styles["shipped-by"] }>
					<div className={ this.styles["title"] }>
						{ $T(97) /* Shipped By: */ }
					</div>
					<div className={ styles["shipping-details"] }>
						<div className={ styles["shipping-provider"] }>
							{ this.props.shippingCaptions.provider }
						</div>
						<div className={ styles["shipping-eta"] }>
							{ this.props.shippingCaptions.term }
						</div>
					</div>
				</div>
				<div className={ this.styles["map-container"] }>
					<div ref={ this.initMap.bind(this)} className={ this.styles["map"] }>
									
					</div>
				</div>
			</div>
		)
	}
}

export default ShippingSummary
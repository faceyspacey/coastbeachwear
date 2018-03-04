import React, { Component } from 'react';
import styles from './CompleteSummary.css';
import beachHut from '../../main/BeachHut.js';
import settings from '../../settings/settings.json'
import locale from '../../support/locale.js';
import Icons from '../../support/Icons.js';
import locationServices from '../../support/LocationServices.js';
import $T from '../../support/translations.js';

import AddressDisplay from './AddressDisplay/AddressDisplay.js';
import TotalDetails from '../TotalDetails/TotalDetails.js';
import PurchaseSummary from '../PurchaseSummary/PurchaseSummary.js';
import ShippingSummary from './ShippingSummary/ShippingSummary.js';

class CompleteSummary extends Component {
	isSame = true;

	constructor(props, context) {
		super(props, context);

		// this.isSame = props.order.isSameAddress();

		this.state = {
			shippingAddrObj: props.order.getShippingAddr(),
			billingAddrObj: props.order.getBillingAddr()
		};

		gtag('config', settings.gaid, {'page_path': '/ordercompletedisplay'});
	}

	generateShippingCaptions() {
		return {
			term: this.props.order.fulfilment.generateTermCaption(),
			provider: this.props.order.fulfilment.generateProviderCaption()
		};
	}

	render() {
		return (
			<div className={ styles["main"] }>
				<div className={ styles["header"] } >
					<h1 className={ styles["header-title"] }>{ $T(50) /* Coast Beachwear */ }</h1>
					<h2 className={ styles["header-sub-title"] }>{ $T(56) /* Coastal Lifestyle Inspired Apparel */ }</h2>
				</div>
				<div className={ styles["content"] }>
					<div className={ styles["inner-content"] }>
						<div className={ styles["title"] }>
							{ $T(98) /* Thank You! */}
						</div>
						<div className={ styles["widgets-container"] }>
							<div className={ styles["colomn"] }>
								<div className={ styles["colomn-table"] }>
									<div className={ styles["widget-conatiner "] }>
										<AddressDisplay
											title={ $T(95) /* Ship To: */}
											addrObj={ this.state.billingAddrObj }
										/>
									</div>
									<div className={ styles["receipt"] }>
										<div className={ styles["purchases"] }>
										{
											this.props.order.purchases.map(function(purchase) {
												return <PurchaseSummary 
													purchase={ purchase } 
													key={ purchase.variant.id } 
													readOnly={ true }
												/>
											})
										}
										</div>
										<TotalDetails
											addition={ this.props.order.compileAddition() }
											isShippedInterational={ this.props.order.isShippedInterational() }
										/>
									</div>
								</div>
							</div>
							<div className={ styles["colomn"] }>
								<div className={ styles["colomn-table"] }>
									<div className={ styles["widget-conatiner "] }>
										<AddressDisplay
											title={ $T(96) /* Bill To: */}
											addrObj={ this.state.shippingAddrObj }
											shippingCaptions={ this.generateShippingCaptions() }
										/>
									</div>
									<div className={ styles["widget-conatiner"] }>
										<ShippingSummary
											title={ $T(96) /* Bill To: */}
											placeId={ this.state.shippingAddrObj.placeId }
											shippingCaptions={ this.generateShippingCaptions() }
										/>
									</div>
								</div>
							</div>
						</div>
						<div className={ styles["new-button-section"] }>
							<div className={ styles["new-button"] } onClick={ beachHut.resetOrder.bind(beachHut) }>
								<div className={ styles["new-button-caption"] }> 
									{ $T(99) /* New Order */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CompleteSummary
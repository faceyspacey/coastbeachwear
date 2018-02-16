import React, { Component } from 'react';
import formStyles from '../CheckoutForm/CheckoutForm.css';
import styles from './ShippingAddrForm.css';
import InputUnderline from '../Inputs/InputUnderline/InputUnderline.js';
import InputTypeAhead from '../Inputs/InputTypeAhead/InputTypeAhead.js';
import $T from '../../support/translations.js';
import FormNavigation from '../FormNavigation/FormNavigation.js';
import BillingAddrForm from '../BillingAddrForm/BillingAddrForm.js';
import FulfilmentForm from '../FulfilmentForm/FulfilmentForm.js';
import Checkbox from '../Checkbox/Checkbox.js';
import { ui } from '../../main/BeachHut.js';

class ShippingAddrForm extends Component {
	constructor(props, context) {
		super(props, context)
		
		this.state = props.order.getShippingAddr();
		this.state.sameAsBilling = !this.props.order.isShippingAddrEmpty() && this.props.order.isSameAddress();
		this.state.isProcessing = false;
		this.autoCompleteService = new google.maps.places.AutocompleteService();
		this.geoCodeService = new google.maps.Geocoder();
	}

	static getTitle() {
		return $T(10) // Shipping Details
	}

	navigateForward() {
		var nextForm;

		if (!this.props.order.countUnits()) {
			ui.displayMessage(
				$T(78), /* Order Empty */
				$T(77) /* Add item to order to proceed. */
			);
			return;
		}

		function createShipmentSuccess() {
			if (this.state.sameAsBilling) {
				nextForm = FulfilmentForm;
				this.props.order.setBillingAddr(this.props.order.shippingAddr);
			} else {
				nextForm = BillingAddrForm;
			}

			this.props.setCurrentForm(nextForm);
		};
		createShipmentSuccess = createShipmentSuccess.bind(this);

		function createShipmentFail() {
			this.setState({ isProcessing: false });
		};
		createShipmentFail = createShipmentFail.bind(this);

		this.setState({ isProcessing: true });

		this.props.order.setShippingAddr(this.state);
		this.props.order.fulfilment.createShipment(createShipmentSuccess, createShipmentFail);
	}

	onaddresschange(obj) {
		this.setState(obj);
	}

	geoCodePostalCode(postalCode) {
		function geoCodeSuccess(results, status) {
			if (!results || status !== "OK") return;
			
			this.postalCodeLocation = results[0].geometry.location;
		};
		geoCodeSuccess = geoCodeSuccess.bind(this);

		this.geoCodeService.geocode({ 'address': postalCode}, geoCodeSuccess.bind(this));
	}

	refreshAddrPredictions(search, success) {
		var request = {
    		input: search || "",
    		location: undefined,
    		radius: undefined
    	};

    	if (this.postalCodeLocation) {
    		request.location = this.postalCodeLocation;
    		request.radius = 10000;
    	}

    	function predictionGetSuccess(predictions, status) {
    		var items = [];

    		predictions = predictions || [];

    		items = predictions.map(function(prediction) {
    			return {
    				id: prediction.place_id,
    				caption: prediction.description
    			}
    		});

    		success(items || []);
    	}

		this.autoCompleteService.getPlacePredictions(request, predictionGetSuccess);
	}

	onchange(obj) {
		if (obj.postal_code && obj.postal_code.length > 3) {
			this.postalCodeLocation = undefined;
			
			clearTimeout(this.geoCodeRequest);
			
			this.geoCodeRequest = setTimeout((function() {
				this.geoCodePostalCode(obj.postal_code);
			}).bind(this), 700);
		}

		this.setState(obj);
	}

	setSameAsBilling () {
		this.setState({
			sameAsBilling: !this.state.sameAsBilling
		})
	}

	render() {	
		return (
			<div className={styles["main"]}>
				<div className={formStyles["header"]}>{ $T(10) /* Shipping Address*/ }</div>
				<InputUnderline 
					dataKey={"first_name"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="260px" 
					placeholder={$T("1") /* First Name */ } 
				/> 
				<InputUnderline 
					dataKey={"last_name"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="340px"
					placeholder={$T("2") /* Last Name */}
				/>
				<InputUnderline 
					dataKey={"email"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="610px"
					placeholder={$T(18) /* Email */} 
				/>
				<InputUnderline 
					dataKey={"phone"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="380px"
					placeholder={$T(17) /* Phone (optional) */} 
				/>
				<InputUnderline 
					dataKey={"postal_code"} 
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="220px"
					placeholder={$T("8") /* Postal Code */} 
				/>
				<InputTypeAhead 
					dataKey={"address"}
					data={ this.state }
					onchange={ this.onaddresschange.bind(this) }
					refreshItems={ this.refreshAddrPredictions.bind(this) }
					inputWidth="610px"
					placeholder={ $T("4") /* Address */ } 
					notice={ $T("86") /* Enter postal/zip code to narrow results. */ }
					emptyMessage={ $T("88") }
				/>
				<InputUnderline
					dataKey={"apt"} 
					data={ this.state } 
					onchange={ this.onchange.bind(this) }
					inputWidth="150px"
					placeholder={$T("5") /* Apt, Suite (opt) */} 
				/>
				<InputUnderline
					dataKey={"company"}
					data={ this.state }
					onchange={ this.onchange.bind(this) }
					inputWidth="450px"
					placeholder={$T("9") /* Company */} 
				/> 
				<Checkbox 
					caption={ $T(37) /* Billing address same as shipping address? */ }
					checked={ this.state.sameAsBilling }
					onclick = { this.setSameAsBilling.bind(this) }
				/>
				<FormNavigation 
					navigateForward={ this.navigateForward.bind(this) }
					isProcessing={ this.state.isProcessing }
				/>
			</div>
		)
	}
}

export default ShippingAddrForm
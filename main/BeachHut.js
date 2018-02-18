import React from 'react'
import { render } from 'react-dom'
import locale from '../support/locale.js'
import UI from '../components/UI/UI.js'
import Order from '../models/Order.js'
import Product from '../models/Product.js'
import 'normalize.css';

class Beachhut {
	products = [];
	order = new Order;
	ui = {};

	constructor() {
		locale.init();

		function externalAPIsLoaded() {
			this.loadProducts();
			this.loadUI();
		};
		externalAPIsLoaded = externalAPIsLoaded.bind(this);

		this.loadExternalAPIs(externalAPIsLoaded, externalAPIsLoaded);
	}

	loadProducts() {
		this.products = initialData.products.map(function(data) {
			return new Product(data);
		})
	}

	loadUI() {
		this.ui = render(		
			<UI 
				locale={ this.locale }
				order={ this.order }
				products={ this.products }
			/>,
			document.getElementById('beachhut')
		)
	}

	loadExternalAPIs(success, fail) {
		this.loadGoogleAPI(success, fail);
	}

	loadScript(url, id, success, fail) {
		var tag,
			wasTag,

		success = success || function() {};
		fail = fail || function() {};

		wasTag = document.getElementById(id);

		/* Removes old URL */
		if (wasTag) wasTag.parentElement.removeChild(wasTag);

		tag = document.createElement('script');
		tag.onload = success;
		tag.onerror = fail;

		tag.setAttribute("type", "text/javascript");
		tag.setAttribute("id", id);
		tag.setAttribute("src", url);

		document.getElementsByTagName("head")[0].appendChild(tag);
	}

	loadGoogleAPI(success, fail) {
		var language = locale.language.toLowerCase();
		var url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB7CvnyMLujWk65zH5ya3PNLFznqrA-xIU&libraries=places&language=${language}`;

		this.loadScript(url, "googleMapsAPI", success, fail);
	}
}

window.Require = __webpack_require__;

var beachHut = new Beachhut;

export default beachHut
import React from 'react'
import { render } from 'react-dom'
import locale from '../support/locale.js'
import UI from '../components/UI/UI.js'
import Order from '../models/Order.js'
import Product from '../models/Product.js'
import 'normalize.css';

locale.init();

var products = initialData.products.map(function(data) {
	return new Product(data);
})

window.Require = __webpack_require__;

function detectLanguage() {
	if (localStorage.getItem("language") !== null)
		return localStorage.getItem("language");
	else if(navigator.language && navigator.language.replace(/\s+/g, "") != "")
		return navigator.language.replace(/-.*/g, "");
	else if(navigator.languages && navigator.languages instanceof Array && navigator.languages.length != 0 && navigator.languages[0].replace(/\s+/g, "") != "")
		return navigator.languages[0].replace(/-.*/g, "");
	else
		return "en";
}

let order = new Order;

let ui = render(
	<UI order={ order } products={ products }/>,
	document.getElementById('beachhut')
)



export { ui, order };
import React from 'react'
import { render } from 'react-dom'
import UI from '../components/UI/UI.js'
import Order from '../models/Order.js'
import Product from '../models/Product.js'
import 'normalize.css';

var products = initialData.products.map(function(data) {
	return new Product(data);
})

window.Require = __webpack_require__;

let order = new Order;

let ui = render(
	<UI order={ order } products={ products }/>,
	document.getElementById('beachhut')
)
export { ui, order };
import React from 'react'
import { render } from 'react-dom'
import App from '../components/App/App.js'
import Order from '../models/Order.js'

window.Require = __webpack_require__;

let order = new Order;

let ui = render(
	<App order={ order }/>,
	document.getElementById('beachhut')
)
export { ui, order };
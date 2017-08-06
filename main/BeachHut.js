import React from 'react'
import { render } from 'react-dom'
import App from '../components/App/App.js'
import Customer from '../models/Customer.js'

window.Require = __webpack_require__;

let customer = new Customer;

let ui = render(
	<App customer={ customer }/>,
	document.getElementById('beachhut')
)
export { ui, customer };
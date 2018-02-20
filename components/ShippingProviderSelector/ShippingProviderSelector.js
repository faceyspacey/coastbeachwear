import React, { Component } from 'react'
import styles from './ShippingProviderSelector.css'
import Icons from '../../support/Icons.js'
import { $T, $TInject } from '../../support/translations.js'

import ShippingProviderSelection from './ShippingProviderSelection/ShippingProviderSelection.js'

class ShippingProviderSelector extends Component {
	constructor(props, context) {
		super();
	}

	renderFastestSelection() {
		if (!this.props.fulfilment.rates.fastest) return "";

		return (
			<ShippingProviderSelection
				caption={$T(60) /* Fastest */}
				dataKey={"fastest"}
				selectedKey={ this.props.selectedKey }
				price={ $TInject(27, [this.props.fulfilment.rates.fastest.amount])}
				term={ this.props.fulfilment.generateTermCaption(this.props.fulfilment.rates.fastest) }
				provider={ this.props.fulfilment.generateProviderCaption(this.props.fulfilment.rates.fastest) }
				onselect= { this.props.onselect }
			/>
		)
	}

	renderLeastCostlySelection() {
		if (!this.props.fulfilment.rates.leastCostly) return "";

		return (
			<ShippingProviderSelection
				caption={$T(61) /* Least Costly */}
				dataKey={"leastCostly"}
				selectedKey={ this.props.selectedKey }
				price={ $TInject(27, [this.props.fulfilment.rates.leastCostly.amount])}
				term={ this.props.fulfilment.generateTermCaption(this.props.fulfilment.rates.leastCostly) }
				provider={ this.props.fulfilment.generateProviderCaption(this.props.fulfilment.rates.leastCostly) }
				onselect= { this.props.onselect }
			/>
		)
	}

	renderBestValueSelection() {
		if (!this.props.fulfilment.rates.bestValue) return "";

		return (
			<ShippingProviderSelection
				caption={$T(59) /* Best Value */}
				dataKey={"bestValue"}
				selectedKey={ this.props.selectedKey }
				price={ $TInject(27, [this.props.fulfilment.rates.bestValue.amount])}
				term={ this.props.fulfilment.generateTermCaption(this.props.fulfilment.rates.bestValue) }
				provider={ this.props.fulfilment.generateProviderCaption(this.props.fulfilment.rates.bestValue) }
				onselect= { this.props.onselect }
			/>
		)
	}

	render() {
		return (
			<div className={styles["main"]}>
				{ this.renderFastestSelection() }
				{ this.renderLeastCostlySelection() }
				{ this.renderBestValueSelection() }
			</div>
		)
	}
}

export default ShippingProviderSelector
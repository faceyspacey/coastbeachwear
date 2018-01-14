import React, { Component } from 'react'
import styles from './ShippingProviderSelector.css'
import Icons from '../../support/Icons.js'
import { $T, $TInject } from '../../support/translations.js'
import ShippingProviderSelection from './ShippingProviderSelection/ShippingProviderSelection.js'

class ShippingProviderSelector extends Component {
	constructor(props, context) {
		super();
	}

	generateTerm(rate) {
		if (!rate.estimated_days) return $T(65);
		if (rate.estimated_days > 1) return $TInject(63, [rate.estimated_days.toString()]);
		
		return $TInject(64, [rate.estimated_days.toString()]);
	}

	generateProviderCaption(rate) {
		var providerCaption = rate.provider;

		if (rate.servicelevel && rate.servicelevel.name) providerCaption += ` ${rate.servicelevel.name}`;

		return providerCaption;
	}

	renderFastestSelection() {
		if (!this.props.rates.fastest) return "";

		return (
			<ShippingProviderSelection
				caption={$T(60) /* Fastest */}
				dataKey={"fastest"}
				selectedKey={ this.props.selectedKey }
				price={ $TInject(27, [this.props.rates.fastest.amount])}
				term={ this.generateTerm(this.props.rates.fastest) }
				provider={ this.generateProviderCaption(this.props.rates.fastest) }
				onselect= { this.props.onselect }
			/>
		)
	}

	renderLeastCostlySelection() {
		if (!this.props.rates.leastCostly) return "";

		return (
			<ShippingProviderSelection
				caption={$T(61) /* Least Costly */}
				dataKey={"leastCostly"}
				selectedKey={ this.props.selectedKey }
				price={ $TInject(27, [this.props.rates.leastCostly.amount])}
				term={ this.generateTerm(this.props.rates.leastCostly) }
				provider={ this.generateProviderCaption(this.props.rates.leastCostly) }
				onselect= { this.props.onselect }
			/>
		)
	}

	renderBestValueSelection() {
		if (!this.props.rates.bestValue) return "";

		return (
			<ShippingProviderSelection
				caption={$T(59) /* Best Value */}
				dataKey={"bestValue"}
				selectedKey={ this.props.selectedKey }
				price={ $TInject(27, [this.props.rates.bestValue.amount])}
				term={ this.generateTerm(this.props.rates.bestValue) }
				provider={ this.generateProviderCaption(this.props.rates.bestValue) }
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
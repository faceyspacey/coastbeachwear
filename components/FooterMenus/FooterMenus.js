import React, { Component } from 'react'
import styles from './FooterMenus.css'
import locale from '../../support/locale.js'
import FooterMenu from '../FooterMenu/FooterMenu.js'

class FooterMenus extends Component {

	constructor(props, context) {
		super(props, context)
		
		this.state = {
			openMenu: ""
		}
	}

	setOpenMenu(menu) {
		this.setState({
			openMenu: menu
		})
	}

	onoverlayclick() {
		this.setOpenMenu(undefined)
	}
	
	render() {
		return (
			<div className={ styles['main'] }>
				{
					this.state.openMenu && <div 
						className={ styles['overlay'] }
						onClick={ this.onoverlayclick.bind(this) }
					>
					</div>
				}
				<div className={ styles['menu-container'] }>
					<FooterMenu
						dataKey={"language"}
						caption={ locale.language.toUpperCase() }
						options={ locale.availableLanguages }
						selected={ locale.language }
						onselect={ locale.setLanguage }
						isOpen={ this.state.openMenu == "language" }
						open={ this.setOpenMenu.bind(this) }
					/>
				</div>
				<div className={ styles['menu-container'] }>
					<FooterMenu
						dataKey={"currency"}
						caption={ locale.currency.toUpperCase() }
						options={ locale.availableCurrencies }
						selected={ locale.currency }
						onselect={ locale.setCurrency }
						isOpen={ this.state.openMenu == "currency" }
						open={ this.setOpenMenu.bind(this) }
					/>
				</div>
			</div>
		)
	}
}

export default FooterMenus
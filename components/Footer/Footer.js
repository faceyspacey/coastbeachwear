import React, { Component } from 'react'
import styles from './Footer.css'
import Icons from '../../support/Icons.js'
import { ui } from '../../main/BeachHut.js'
import $T from '../../support/translations.js'
import FooterMenus from '../FooterMenus/FooterMenus.js'

class Footer extends Component {
	aboutClick() {
		ui.displayAboutOverlay();
	}

	policyClick() {
		ui.displayPolicyOverlay();
	}

	render() {
		return (
			<div className={ styles['footer-main'] }>
				<div className={ styles['logo'] }>
					{ Icons.insert('logo') }
				</div>
				<div className={ styles['menus'] }>
					<FooterMenus />
					<div className={ styles['menu-button'] }>
						<div className={ styles['menu-button-caption'] } onClick={ this.aboutClick.bind(this) }>
							{ $T(39) /* About */ }
						</div>
					</div>
					<div className={ styles['menu-button'] }>
						<div className={ styles['menu-button-caption'] } onClick={ this.policyClick.bind(this) }>
							{ $T(47) /* Policies */ }
						</div>
					</div>
					
				</div>
				<div className={ styles['social-hub'] }>
					<a className={ styles['social-link'] } href="https://www.facebook.com/coastbeachwear/" target="_blank">{ Icons.insert('facebook', styles['social-icon']) }</a>
					<a className={ styles['social-link'] } href="https://twitter.com/coastbeachwear" target="_blank">{ Icons.insert('twitter', styles['social-icon']) }</a>
					<a className={ styles['social-link'] } href="https://www.instagram.com/coastbeachwear" target="_blank">{ Icons.insert('instagram', styles['social-icon']) }</a>
				</div>
			</div>
		)
	}
}

export default Footer
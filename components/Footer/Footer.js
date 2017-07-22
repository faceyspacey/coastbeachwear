import React, { Component } from 'react'
import styles from './Footer.css'
import Icons from '../../support/Icons.js'

class Footer extends Component {
	render() {
		return (
			<div className={styles['footer-main']}>
				<div className={styles['social-hub']}>
					<a className={styles['social-link']}>{ Icons.insert('facebook', styles['social-icon']) }</a>
					<a className={styles['social-link']}>{ Icons.insert('twitter', styles['social-icon']) }</a>
					<a className={styles['social-link']}>{ Icons.insert('instagram', styles['social-icon']) }</a>
				</div>
			</div>
		)
	}
}

export default Footer
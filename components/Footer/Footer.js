import React, { Component } from 'react'
import styles from './Footer.css'
import Icons from '../../support/Icons.js'

class Footer extends Component {
	render() {
		return (
			<div className={styles['footer-main']}>
				<div className={styles['social-hub']}>
					<a className={styles['social-link']} href="https://www.facebook.com/coastbeachwear/" target="_blank">{ Icons.insert('facebook', styles['social-icon']) }</a>
					<a className={styles['social-link']} href="https://twitter.com/coastbeachwear" target="_blank">{ Icons.insert('twitter', styles['social-icon']) }</a>
					<a className={styles['social-link']} href="https://www.instagram.com/coastbeachwear" target="_blank">{ Icons.insert('instagram', styles['social-icon']) }</a>
				</div>
			</div>
		)
	}
}

export default Footer
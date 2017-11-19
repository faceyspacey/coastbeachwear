import React from 'react'
import styles from './OverlayAbout.css'
import Icons from '../../support/Icons.js'
import { supportEmail } from '../../support/settings.js'
import { $T, $TInject } from '../../support/translations.js'
import Overlay from '../Overlay/Overlay.js'

class OverlayAbout extends Overlay {
	constructor(props, context) {
		super(props, context);

		gtag('config', ENV.gaid, {'page_path': '/about'});
	}

	content() {
		return (
			<div className={ styles["content"] }>
				<div className={ styles["logo"] }>
					{ Icons.insert('logo') }
				</div>
				<div className={ styles["inner-content"] }>
					<h1 className={ styles["title"] }>
						{ $T(40) /* About Us */}
					</h1>
					<div className={ styles["description"] }>
						{ $T(41) }
					</div>
					<div className={ styles["contact"] }>
						<div className={ styles["support-email"] }>{ supportEmail } </div>
						<div>{ $T(46) }</div>
						<div>{ $T(42) }</div>
						<div>{ $T(43) }</div>
						<div>{ $T(44) }</div>
						<div>{ $T(45) }</div>
					</div>
				</div>
			</div>
		) 
	}
}

export default OverlayAbout
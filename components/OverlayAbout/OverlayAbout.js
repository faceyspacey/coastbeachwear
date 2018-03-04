import React from 'react';
import styles from './OverlayAbout.css';
import settings from '../../settings/settings.json';
import Icons from '../../support/Icons.js';
import { $T, $TInject } from '../../support/translations.js';
import Overlay from '../Overlay/Overlay.js';

class OverlayAbout extends Overlay {
	constructor(props, context) {
		super(props, context);

		gtag('config', settings.gaid, {'page_path': '/about'});
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
				</div>
				<div className={ styles["contact"] }>
					<div className={ styles["support-email"] }>{ $T(100) /* help@coastbeachwear.com */ } </div>
					<div>{ $T(46) }</div>
					<div>{ $T(42) }</div>
					<div>{ $T(43) }</div>
					<div>{ $T(44) }</div>
					<div>{ $T(45) }</div>
				</div>
			</div>
		) 
	}
}

export default OverlayAbout
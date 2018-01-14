import React from 'react'
import styles from './OverlayHelp.css'
import Icons from '../../support/Icons.js'
import { $T, $TInject } from '../../support/translations.js'
import Overlay from '../Overlay/Overlay.js'
import { supportEmail } from '../../support/settings.js'
import Input from '../Inputs/Input.js'
import TextArea from '../Inputs/TextArea/TextArea.js'
import MockInput from '../MockInput/MockInput.js'

class OverlayHelp extends Overlay {
	
	static backgroundColor = "primary";

	constructor(props, context) {
		super(props, context);

		this.state = {
			email: ""
		}

		gtag('config', ENV.gaid, {'page_path': '/help'});
	}

	titleBarContent() {
		return (
			<div className={ styles["title"]}>{ $T(54) /* How Can We Help? */ }
			</div>
		);
	}

	content() {
		return (
			<div className={ styles["content"] }>
				<div className={ styles["fields"] }>
					<MockInput
						inputWidth="440px"
						placeholder={ $T("52") /* To: */ } 
						value={ supportEmail }
					/>
					<Input 
						dataKey={"email"}
						data={ this.state }
						onchange={ this.setState.bind(this) }
						inputWidth="440px"
						placeholder={$T("51") /* Your Email */} 
					/>
					<TextArea
						dataKey={"message"}
						data={ this.state }
						onchange={ this.setState.bind(this) }
						inputWidth="440px"
						placeholder={$T("53") /* Message */}
						inputHeight="300"
					/>
				</div>
				<div className={ styles["button-area"] }>
					<div className={ styles["send-button"] }>
						{$T("55") /* send */} 
					</div>
				</div>
			</div>
		) 
	}
}

export default OverlayHelp
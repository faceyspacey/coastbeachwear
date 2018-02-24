import React from 'react'
import styles from './OverlayHelp.css'
import locale from '../../support/locale.js'
import Icons from '../../support/Icons.js'
import { $T, $TInject } from '../../support/translations.js'
import Overlay from '../Overlay/Overlay.js'
import beachHut from '../../main/BeachHut.js'
import Input from '../Inputs/Input.js'
import TextArea from '../Inputs/TextArea/TextArea.js'
import MockInput from '../MockInput/MockInput.js'

class OverlayHelp extends Overlay {
	
	static backgroundColor = "primary";

	language2Template = {
		en: "help_request",
		fr: "demande_aide"
	}

	constructor(props, context) {
		super(props, context);

		this.state = {
			email: "",
			message: "",
			isSending: false
		}

		gtag('config', ENV.gaid, {'page_path': '/help'});
	}

	sendMessage() {
		var template =  this.language2Template[locale.language];
		var emailParams = {
			reply_to: this.state.email,
			message: this.state.message
		}

		if (this.state.isSending === true ) return;

		this.setState({ isSending: true });

		emailjs.init("user_USAtZzUGAE7R9LfQjWO6w");
		emailjs.send("default_service", template, emailParams).then((function() {
			beachHut.ui.displayMessage($T(85), $T(83));
			this.props.closeOverlay();
		}).bind(this)).catch((function(error) {
			this.setState({ isSending: false });
			beachHut.ui.displayMessage($T(84), $TInject(82, [error.text]), 12000);
		}).bind(this));
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
						value={ $T(100) /* help@coastbeachwear.com */ }
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
					<div 
						className={ styles[this.state.isSending? "send-button-sending": "send-button"] }
						onClick={ this.sendMessage.bind(this) }
					>
						{ $T("55") /* send */ } 
					</div>
				</div>
			</div>
		) 
	}
}

export default OverlayHelp
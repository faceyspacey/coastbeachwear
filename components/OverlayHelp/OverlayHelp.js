import React from 'react'
import styles from './OverlayHelp.css'
import beachHut from '../../main/BeachHut.js'
import locale from '../../support/locale.js'
import Icons from '../../support/Icons.js'
import { $T, $TInject } from '../../support/translations.js'
import Overlay from '../Overlay/Overlay.js'

import HelpRequest from '../../models/HelpRequest.js'

import Input from '../Inputs/Input.js'
import TextArea from '../Inputs/TextArea/TextArea.js'
import MockInput from '../MockInput/MockInput.js'

class OverlayHelp extends Overlay {
	
	static backgroundColor = "primary";

	constructor(props, context) {
		super(props, context);

		beachHut.helpRequest = beachHut.helpRequest || new HelpRequest;

		this.state = {
			reply_to: beachHut.helpRequest.reply_to || "",
			message: beachHut.helpRequest.message || "",
			isSending: false
		}

		gtag('config', ENV.gaid, {'page_path': '/help'});
	}

	onchange(obj) {
		this.setState(obj);
		beachHut.helpRequest.setData(obj);
	}

	sendMessage() {
		if (this.state.isSending === true ) return;

		this.setState({ isSending: true });

		function sendSuccess() {
			beachHut.ui.displayMessage($T(85), $T(83));
			this.props.closeOverlay();
		};
		sendSuccess = sendSuccess.bind(this);

		function sendFail(error) {
			this.setState({ isSending: false });
			beachHut.ui.displayMessage($T(84), $TInject(82, [error.text]), 12000);
		};
		sendFail = sendFail.bind(this);

		beachHut.helpRequest.send(sendSuccess, sendFail);
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
						dataKey={"reply_to"}
						data={ this.state }
						onchange={ this.onchange.bind(this) }
						inputWidth="440px"
						placeholder={$T("51") /* Your Email */} 
					/>
					<TextArea
						dataKey={"message"}
						data={ this.state }
						onchange={ this.onchange.bind(this) }
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
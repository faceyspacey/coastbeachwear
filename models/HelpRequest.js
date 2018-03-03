import Model from './Model.js';
import locale from '../support/locale.js';
import beachHut from '../main/BeachHut.js';

class HelpRequest extends Model {

	static attributes = ["id", "reply_to", "message"]

	constructor(data) {
		super();
		this.setData(data);
	}

	language2Template() {
		return {
			en: "help_request",
			fr: "demande_aide"
		}[locale.language]
	}

	send(success, fail) {
		var template = this.language2Template();
		var emailParams = {
			reply_to: this.reply_to,
			message: this.message
		}

		success = success || function() {};
		fail = fail || function() {};

		function sendSuccess() {
			beachHut.helpRequest = undefined;
			success();
		};
		sendSuccess = sendSuccess.bind(this);

		emailjs.send("default_service", template, emailParams).then(sendSuccess).catch(fail);


	}

}

export default HelpRequest
import beachHut from '../main/BeachHut.js';
import TRANSLATIONTABEL from '../settings/translation_table.json';

let locale = {};

locale.init = function() {
	this.availableLanguages = Object.keys(TRANSLATIONTABEL);
	this.availableCurrencies = ['cad'];
	this.language = this.detectLanguage() || this.availableLanguages.first();
	this.currency = this.detectCurrency() || this.availableCurrencies.first();
};
locale.init = locale.init.bind(locale);

locale.setCurrency = function(currency) {
	localStorage.setItem("currency", currency);

	this.currency = currency;

	ui.setState({local: this});
};
locale.setCurrency = locale.setCurrency.bind(locale);

locale.setLanguage = function(language) {
	localStorage.setItem("language", language);

	this.language = language;

	function APILoadSuccess() {
		beachHut.ui.setState({local: this});
	}
	APILoadSuccess = APILoadSuccess.bind(this);

	beachHut.loadGoogleAPI(APILoadSuccess, APILoadSuccess);
};
locale.setLanguage = locale.setLanguage.bind(locale);

locale.detectCurrency = function() {
	return localStorage.getItem("currency");
};

locale.detectLanguage = function() {
	var storedLanguage = localStorage.getItem("language");
	var browserLanguages = navigator.languages || [navigator.language];

	// Remove country code from language.
	browserLanguages = browserLanguages.map(function(lang) {
		return lang.replace(/-.*/g, "");
	})

	// Filter out unavailable languages.
	browserLanguages = browserLanguages.filter((function(lang) {
		 return this.availableLanguages.includes(lang);
	}).bind(this));

	if (this.availableLanguages.includes(storedLanguage))
		return storedLanguage
	else if(navigator.languages && navigator.languages instanceof Array && navigator.languages.length != 0 && navigator.languages[0].replace(/\s+/g, "") != "")
		return browserLanguages[0];
};
locale.detectLanguage = locale.detectLanguage.bind(locale);

export default locale
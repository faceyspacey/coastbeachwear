import TRANSLATIONTABEL from '../support/translation_table.js'

let locale = {}

locale.init = function() {
	this.language = this.detectLanguage() || "en";
}

locale.setLanguage = function(language) {
	localStorage.setItem("language", language);

	this.language = language;
}

locale.detectLanguage = function() {
	var availableLanguages = Object.keys(TRANSLATIONTABEL);
	var storedLanguage = localStorage.getItem("language");
	var browserLanguages = navigator.languages

	// Remove country code from language.
	browserLanguages = browserLanguages.map(function(lang) {
		return lang.replace(/-.*/g, "");
	})

	// Filter out unavailable languages.
	browserLanguages = browserLanguages.filter(function(lang) {
		 return availableLanguages.includes(lang);
	});

	if (availableLanguages.includes(storedLanguage))
		return storedLanguage
	else if(navigator.languages && navigator.languages instanceof Array && navigator.languages.length != 0 && navigator.languages[0].replace(/\s+/g, "") != "")
		return browserLanguages[0];
}

export default locale
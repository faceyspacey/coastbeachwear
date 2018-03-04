import TRANSLATIONTABEL from '../settings/translation_table.json'
import locale from './locale.js'


function $T(id) {
	return TRANSLATIONTABEL[locale.language][id]
}

function $TInject(id, injections) {
	var text = TRANSLATIONTABEL[locale.language][id];

	injections.forEach(function(injection, index) {
		var replace = "\\$" + index;
		var regexObj = new RegExp(replace, "g");
		
		text = text.replace(regexObj, injection);
	})

	return text;
}

export {$T, $TInject}
export default $T

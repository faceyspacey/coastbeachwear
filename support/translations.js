const TRANSLATIONTABEL = {
	en: {
		1: "First Name",
		2: "Last Name",
		3: "Company (optional)",
		4: "Address",
		5: "Apt, Suite (opt)",
		6: "Country",
		7: "Provice",
		8: "Postal Code",

	},
	fr: {
		1: "Prenom",
	}
}

function $T(id) {
	return TRANSLATIONTABEL["en"][id]
}

export default $T

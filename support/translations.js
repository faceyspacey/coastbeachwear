const TRANSLATIONTABEL = {
	en: {
		1: "First Name",
		2: "Last Name",
		3: "Company (optional)",
		4: "Address",
		5: "Apt, Suite (opt)",
		6: "Country",
		7: "Province",
		8: "Postal Code",
		9: "Company",
		10: "Shipping Details",
		11: "continue",
		12: "Payment Details"
	},
	fr: {
		1: "Prenom",
	}
}

function $T(id) {
	return TRANSLATIONTABEL["en"][id]
}

export default $T

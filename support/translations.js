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
		11: "Continue",
		12: "Payment Details",
		13: "Preview",
		14: "Add",
		15: "Billing Details",
		16: "Order Summary",
		17: "Phone (optional)",
		18: "Email",
		19: "Version: ",
		20: "Color: ",
		21: "Size: ",
		22: "Description: ",
		23: "Order is Empty",
		24: "Add to Order",
		25: "Quantity: ",
		Small: "Small",
		Medium: "Medium",
		Large: "Large",
		26: "Qty: ",
		27: "$$0",
		28: "Subtotal: ",
		29: "v$0",
		6005: "Blue(6005)",
		9240: "Black(9240)",
		xs: "XS",
		s: "S",
		m: "M",
		l: "L",
		xl: "XL",
		xs_full: "Extra Small",
		s_full: "Small",
		m_full: "Medium",
		l_full: "Large",
		xl_full: "Extra Large",
		30: "Update Order"

	},
	fr: {
		1: "Prenom",
	}
}

function $T(id) {
	return TRANSLATIONTABEL["en"][id]
}

function $TInject(id, injections) {
	var text = TRANSLATIONTABEL["en"][id];

	injections.forEach(function(injection, index) {
		var replace = "\\$" + index;
		var regexObj = new RegExp(replace, "g");
		
		text = text.replace(regexObj, injection);
	})

	return text;
}

export {$T, $TInject}
export default $T

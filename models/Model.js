class Model {
	static attributes = [];
	
	setData(data) {
		var attributes = this.constructor.attributes;

		for (var key in data) {
			if (attributes.includes(key)) this[key] = data[key];
		}
	}	
}

export default Model

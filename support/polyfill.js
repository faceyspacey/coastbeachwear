if (!Array.prototype.remove) {
	Array.prototype.remove = function (item) {
    	var index = this.indexOf(item);

    	return this.splice(index, 1);
  	};
}
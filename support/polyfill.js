// Array
if (!Array.prototype.first){
    Array.prototype.first = function(){
        return this[0];
    };
};

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

if (!Array.prototype.max) {
    Array.prototype.max = function (item) {
        return Math.max.apply(Math, this);
    };
}

if (!Array.prototype.min) {
    Array.prototype.min = function (item) {
        return Math.min.apply(Math, this);
    };
}

if (!Array.prototype.remove) {
    Array.prototype.remove = function (item) {
        var index = this.indexOf(item);

        return this.splice(index, 1);
    };
}


// String

if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}
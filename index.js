'use strict';

var LoopArray = function () {
	this.cursor = -1;
};

// interit from array
LoopArray.prototype = Array.prototype;

// append items by array, object or regex as types
LoopArray.prototype.append = function () {
	let max = 0;
	const args = arguments;
	let iterator;

	if (typeof args[0] === 'number') {
		max = args[0];
		iterator = args[1];
	} else if (args[0] instanceof Array) {
		max = args[0].length;
		iterator = function (index) {
			return args[0][index];
		};
	} else if (typeof args[0] === 'object') {
		max = 1;
		iterator = function () {
			return args[0];
		};
	} else {
		throw new Error('LoopArray got unknown arguments type');
	}

	for (var i = 0; i < max; ++i) {
		this.push(iterator(i, this.length));
	}

	return this.length;
};

// clear all items.
LoopArray.prototype.clear = function () {
	this.splice(0, this.length);
	this.cursor = -1;
};

LoopArray.prototype.remove = function () {
	this.remove.apply(this, arguments);
	this.cursor = -1;
	return this.length;
};

// it will return next item.
LoopArray.prototype.beng = function () {
	this.cursor = (this.cursor + 1) % this.length;
	return this[this.cursor];
};

function bengbenge(dns) {
	if (!bengbenge.dns[dns]) {
		bengbenge.dns[dns] = new LoopArray();
	}

	return bengbenge.dns[dns];
}

bengbenge.dns = {};

module.exports = bengbenge;

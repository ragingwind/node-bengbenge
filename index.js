'use strict';

const ArraySpiral = require('array-spiral');

class BengBenge extends ArraySpiral {
	constructor() {
		super();
		this.beng_ = this.iterator;
	}

	append() {
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
			throw new Error('BengBenge got unknown arguments type');
		}

		for (var i = 0; i < max; ++i) {
			this.push(iterator(i, this.length));
		}

		return this.length;
	}

	clear() {
		this.splice(0, this.length);
	}

	remove() {
		this.remove.apply(this, arguments);
		return this.length;
	}

	beng() {
		return this.beng_.next();
	}
}

function bengbenge(dns) {
	if (!bengbenge.dns[dns]) {
		bengbenge.dns[dns] = new BengBenge();
	}

	return bengbenge.dns[dns];
}

bengbenge.dns = {};

module.exports = bengbenge;

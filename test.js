'use strict';

import test from 'ava';
import bengbenge from './';

test(t => {
	const dns = 'newapp.herokuapp.com';
	const genURL = function (length, dns) {
		return 'site' + length + '.' + dns;
	};

	const beng = bengbenge(dns);
	const items = [
		{name: 'site1', url: genURL(1, dns)},
		{name: 'site2', url: genURL(2, dns)},
		{name: 'site3', url: genURL(3, dns)},
		{name: 'site4', url: genURL(4, dns)},
		{name: 'site5', url: genURL(5, dns)},
		{name: 'site6', url: genURL(6, dns)}
	];

	// append by single object.
	t.is(beng.append(items[0]), 1);
	t.is(beng[0].name, items[0].name);
	t.is(beng[0].url, items[0].url);

	// append by object array.
	t.is(beng.append(items.slice(1, items.length)), 6);

	// append by time count and generate function
	t.is(beng.append(5, function (index, length) {
		length++;
		return {
			name: 'site' + length,
			url: genURL(length, dns)
		};
	}), 11);

	// test length.
	t.is(beng.length, 11);

	for (let i = 0, max = beng.length; i < max; ++i) {
		const index = i + 1;
		const item = beng.beng();
		t.is(item.name, 'site' + index);
		t.is(item.url, genURL(index, dns));
	}

	// clear
	beng.clear();
	t.is(beng.length, 0);
});

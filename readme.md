# bengbenge (뺑뺑이 in Korean) [![Build Status](https://travis-ci.org/ragingwind/bengbenge.svg?branch=master)](https://travis-ci.org/ragingwind/bengbenge)

> Simple loop array for round-robin dns, beng, beng. for funny.

## Install

```
$ npm install --save bengbenge
```

## Usage

```js
var bengbenge = require('bengbenge');
var dns = bengbenge('newapp.herokuapp.com');

dns.append(5, function (index, length) {
	length++;
	return {
		name: 'site' + length,
		url: length + '.newapp.herokuapp.com'
	};
});

redirect(dns.beng().url);
```

For more information, Please refer to test/bengbenge_test.js

## API

### bengbenge(dns)

Pass base name of DNS will be route. It will return instance of loop array

### LoopArray

Supports all of api of Array and append, clear, remove and beng

#### beng()

It will return next item in Array.

#### append([count], [array/object])

It supports a variety types of arguments.

## License

MIT © [Jimmy Moon](http://ragingwind.me)

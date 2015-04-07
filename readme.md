# bengbenge (뺑뺑이 in korean)

Simple loop array for round-robin dns, beng, beng. for funny.

## Getting Started

Install the module with: `npm install bengbenge`

## Examples

    var bengbenge = require('bengbenge');
    var dns = bengbenge('newapp.herokuapp.com');
    dns.append( 5, function(index, length) {
      length++;
      return {
        name: 'site' + length,
        url: length + '.newapp.herokuapp.com'
      };
    });
    redirect(dns.beng().url);

For more information, Please refer to test/bengbenge_test.js

## TEST

    grunt

## License
Copyright (c) 2013 @ragingwind
Licensed under the MIT license.

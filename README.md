# bengbenge
infinite loop array for round-robin dns, beng, beng. for funny.

## Getting Started
Install the module with: `npm install bengbenge`

## Examples

var
bengbenge.append( 5, function(index, length) {
      length++;
      return {
        name: 'site' + length,
        url: 'http://site' + length + '.herokuapp.com'
      };
    }), 11);

More information Please refer to test/bengbenge_test.js

## License
Copyright (c) 2013 MOONANDYOU
Licensed under the MIT license.

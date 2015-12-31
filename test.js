
"use strict";

var bengbenge = require('./');
var assert = require('assert');
var dns = 'newapp.herokuapp.com';
var genURL = function(length, dns) {
  'site' + length + '.' + dns;
};

describe('Chromeapp generator', function () {
  it('beng beng well', function () {
    var beng = bengbenge(dns);
    var items = [
      { name: 'site1', url: genURL(1, dns) },
      { name: 'site2', url: genURL(2, dns) },
      { name: 'site3', url: genURL(3, dns) },
      { name: 'site4', url: genURL(4, dns) },
      { name: 'site5', url: genURL(5, dns) },
      { name: 'site6', url: genURL(6, dns) }
    ];

    // append by single object.
    assert.equal(beng.append(items[0]), 1);
    assert.equal(beng[0].name, items[0].name);
    assert.equal(beng[0].url, items[0].url);

    // append by object array.
    assert.equal(beng.append(items.slice(1, items.length)), 6);

    // append by time count and generate function
    assert.equal(beng.append( 5, function(index, length) {
      length++;
      return {
        name: 'site' + length,
        url: genURL(length, dns)
      };
    }), 11);

    // test length.
    assert.equal(beng.length, 11);

    var item;
    for (var i = 0, max =beng.length; i < max; ++i ) {
      var index = i + 1;
      item = beng.beng();
      assert.equal( item.name, 'site' + index );
      assert.equal( item.url, genURL(index, dns) );
    }

    // clear
    beng.clear();
    assert.equal(beng.length, 0 );
  });
});

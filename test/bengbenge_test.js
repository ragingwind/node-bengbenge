
"use strict";

var bengbenge = require('../lib/bengbenge.js');
var dns = 'newapp.herokuapp.com';
var genURL = function(length, dns) {
  'site' + length + '.' + dns;
};

exports['bengbenge'] = {
  setUp: function(done) {
    this.bengbenge = bengbenge(dns);
    this.bengbenge.clear();
    done();
  },

  'all': function(test) {
    var items = [
      { name: 'site1', url: genURL(1, dns) },
      { name: 'site2', url: genURL(2, dns) },
      { name: 'site3', url: genURL(3, dns) },
      { name: 'site4', url: genURL(4, dns) },
      { name: 'site5', url: genURL(5, dns) },
      { name: 'site6', url: genURL(6, dns) }
    ];

    // append by single object.
    test.equal( this.bengbenge.append( items[0] ), 1);
    test.equal( this.bengbenge[0].name, items[0].name );
    test.equal( this.bengbenge[0].url, items[0].url );

    // append by object array.
    test.equal( this.bengbenge.append( items.slice(1, items.length) ), 6 );

    // append by time count and generate function
    test.equal( this.bengbenge.append( 5, function(index, length) {
      length++;
      return {
        name: 'site' + length,
        url: genURL(length, dns)
      };
    }), 11);

    // test length.
    test.equal( this.bengbenge.length, 11);

    // test beng
    var item;
    for ( var i = 0, max = this.bengbenge.length; i < max; ++i ) {
      var index = i + 1;
      item = this.bengbenge.beng();
      test.equal( item.name, 'site' + index );
      test.equal( item.url, genURL(index, dns) );
    }

    // clear
    this.bengbenge.clear();
    test.equal( this.bengbenge.length, 0 );

    test.done();

  }
};

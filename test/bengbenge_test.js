
"use strict";

var BengBenge = require('../lib/bengbenge.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['bengbenge'] = {
  setUp: function(done) {
    this.bengbenge = new BengBenge();
    done();
  },

  'appe': function(test) {
    var items = [
      { name: 'site1', url: 'http://site1.herokuapp.com' },
      { name: 'site2', url: 'http://site2.herokuapp.com' },
      { name: 'site3', url: 'http://site3.herokuapp.com' },
      { name: 'site4', url: 'http://site4.herokuapp.com' },
      { name: 'site5', url: 'http://site5.herokuapp.com' },
      { name: 'site6', url: 'http://site6.herokuapp.com' }
    ];

    // append by single object.
    test.equal( this.bengbenge.append( items[0] ), 1 );
    test.equal( this.bengbenge[0].name, items[0].name );
    test.equal( this.bengbenge[0].url, items[0].url );

    // append by object array.
    test.equal( this.bengbenge.append( items.slice(1, items.length) ), 6 );

    // append by time count and generate function
    test.equal( this.bengbenge.append( 5, function(index, length) {
      length++;
      return {
        name: 'site' + length,
        url: 'http://site' + length + '.herokuapp.com'
      };
    }), 11);

    // test length.
    test.equal( this.bengbenge.length, 11);
    test.done();
  },

  'clear': function(test) {
    this.bengbenge.clear();
    test.equal( this.bengbenge.length, 0 );

    test.done();
  },

  'beng': function(test) {
    var item;
    for ( var i = 0, max = this.bengbenge.length; i < max; ++i ) {
      var index = i + 1;
      item = this.bengbenge.beng();
      test.equal( item.name, 'site' + index );
      test.equal( item.url, 'http://site' + index + '.herokuapp.com' );
    }

    test.done();
  }
};

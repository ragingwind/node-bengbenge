/*
* bengbenge
* https://github.com/ragingwind/bengbenge
*
* Copyright (c) 2013 ragingwind
* Licensed under the MIT license.
*/

var BengBenge = function() {
  this.cursor = -1;
};

// interit from array
BengBenge.prototype = Array.prototype;

// append items by array, object or regex as types
BengBenge.prototype.append = function() {
  var max = 0, args = arguments, iterator;
  if ( typeof args[0] === 'number' ) {
    max = args[0];
    iterator = args[1];
  } else if ( args[0] instanceof Array ) {
    max = args[0].length;
    iterator = function(index) { return args[0][index]; };
  } else if ( typeof args[0] === 'object') {
    max = 1;
    iterator = function() { return args[0]; };
  } else {
    throw 'BengBenge got unknown arguments type.';
  }

  for ( var i = 0; i < max; ++i ) {
    this.push( iterator(i, this.length) );
  }

  return this.length;
};

// clear all items.
BengBenge.prototype.clear = function() {
  this.splice(0, this.length);
  this.cursor = -1;
};

// it will return next item.
BengBenge.prototype.beng = function() {
  this.cursor = ( this.cursor + 1 ) % this.length;
  return this[this.cursor];
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = BengBenge;
}
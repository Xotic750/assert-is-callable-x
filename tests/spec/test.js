'use strict';

var hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolSupportIt = hasSymbolSupport ? it : xit;
var assertIsCallable;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  assertIsCallable = require('../../index.js');
} else {
  assertIsCallable = returnExports;
}

describe('assertIsCallable', function () {
  it('primitives should throw a TypeError', function () {
    var block = function (value) {
      try {
        assertIsCallable(value);
        return false;
      } catch (e) {
        expect(e).toEqual(jasmine.any(TypeError));
        expect(e.message).toBe(String(value) + ' is not callable');
      }
      return true;
    };
    var values = [
      undefined,
      null,
      1,
      true,
      ''
    ];
    var expected = values.map(function () {
      return true;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });

  it('objects should throw a TypeError', function () {
    var block = function (value) {
      try {
        assertIsCallable(value);
        return false;
      } catch (e) {
        expect(e).toEqual(jasmine.any(TypeError));
        expect(e.message).toBe('#<Object> is not callable');
      }
      return true;
    };
    var values = [
      [],
      {},
      /r/,
      new Date()
    ];
    var expected = values.map(function () {
      return true;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });

  ifSymbolSupportIt('Symbol literals should throw a TypeError', function () {
    var block = function (value) {
      try {
        assertIsCallable(value);
        return false;
      } catch (e) {
        expect(e).toEqual(jasmine.any(TypeError));
        expect(e.message).toBe('Symbol(mySymbol) is not callable');
      }
      return true;
    };
    var values = [Symbol('mySymbol')];
    var expected = values.map(function () {
      return true;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });

  ifSymbolSupportIt('Symbol objects should throw a TypeError', function () {
    var block = function (value) {
      try {
        assertIsCallable(value);
        return false;
      } catch (e) {
        expect(e).toEqual(jasmine.any(TypeError));
        expect(e.message).toBe('#<Object> is not callable');
      }
      return true;
    };
    var values = [Object(Symbol('mySymbol'))];
    var expected = values.map(function () {
      return true;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });

  it('should return the function', function () {
    var block = function (value) {
      try {
        return assertIsCallable(value);
      } catch (ignore) {}
      return false;
    };
    var values = [
      function () {},
      Array,
      block,
      assertIsCallable
    ];
    var expected = values.map(function (x) {
      return x;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });
});

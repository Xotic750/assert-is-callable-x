/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:true, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
   maxstatements:11, maxcomplexity:3 */

/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1 */

/* global JSON:true, expect, module, jasmine, require, describe, xit, it,
returnExports */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
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
      var values = [undefined, null, 1, true, ''];
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
      var values = [[], {}, /r/, new Date()];
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
      var values = [function () {}, Array, block, assertIsCallable];
      var expected = values.map(function (x) {
        return x;
      });
      var actual = values.map(block);
      expect(actual).toEqual(expected);
    });
  });
}());

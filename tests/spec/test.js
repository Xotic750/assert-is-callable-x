/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:3, maxdepth:1,
  maxstatements:11, maxcomplexity:3 */

/*global expect, module, jasmine, require, describe, xit, it, returnExports */

(function () {
  'use strict';

  var hasSymbolSupport = typeof Symbol === 'function' &&
      typeof Symbol() === 'symbol',
    ifSymbolSupportIt = hasSymbolSupport ? it : xit,
    assertIsCallable;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    assertIsCallable = require('../../index.js');
  } else {
    assertIsCallable = returnExports;
  }

  describe('assertIsCallable', function () {
    it('primitives should throw a TypeError', function () {
      function block(value) {
        try {
          assertIsCallable(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe(String(value) + ' is not a function');
        }
        return true;
      }
      var values = [undefined, null, 1, true, ''],
        expected = values.map(function () {
          return true;
        }),
               actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    it('objects should throw a TypeError', function () {
      function block(value) {
        try {
          assertIsCallable(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe('#<Object> is not a function');
        }
        return true;
      }
      var values = [[], {}, /r/, new Date()],
        expected = values.map(function () {
          return true;
        }),
        actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    ifSymbolSupportIt('Symbol literals should throw a TypeError', function () {
      function block(value) {
        try {
          assertIsCallable(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe('Symbol(mySymbol) is not a function');
        }
        return true;
      }
      var values = [Symbol('mySymbol')],
        expected = values.map(function () {
          return true;
        }),
        actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    ifSymbolSupportIt('Symbol objects should throw a TypeError', function () {
      function block(value) {
        try {
          assertIsCallable(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe('#<Object> is not a function');
        }
        return true;
      }
      var values = [Object(Symbol('mySymbol'))],
        expected = values.map(function () {
          return true;
        }),
        actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    it('should return the function', function () {
      function block(value) {
        try {
          return assertIsCallable(value);
        } catch (ignore) {}
        return false;
      }
      var values = [function () {}, Array, block, assertIsCallable],
        expected = values.map(function (x) {
          return x;
        }),
               actual = values.map(block);
      expect(actual).toEqual(expected);
    });
  });
}());

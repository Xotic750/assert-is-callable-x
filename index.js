/**
* @file If IsCallable(callbackfn) is false, throw a TypeError exception.
* @version 2.0.1
* @author Xotic750 <Xotic750@gmail.com>
* @copyright  Xotic750
* @license {@link <https://opensource.org/licenses/MIT> MIT}
* @module assert-is-callable-x
*/

'use strict';

var isCallable = require('is-callable');
var safeToString = require('safe-to-string-x');
var isPrimitive = require('is-primitive');

/**
 * Tests `callback` to see if it is callable, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} value - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a callable.
 * @returns {*} Returns `callback` if it is callable.
 * @example
 * var assertIsCallable = require('assert-is-callable-x');
 * var primitive = true;
 * var mySymbol = Symbol('mySymbol');
 * var symObj = Object(mySymbol);
 * var object = {};
 * function fn () {}
 *
 * assertIsCallable(primitive);
 *    // TypeError 'true is not callable'.
 * assertIsCallable(object);
 *    // TypeError '#<Object> is not callable'.
 * assertIsCallable(mySymbol);
 *    // TypeError 'Symbol(mySymbol) is not callable'.
 * assertIsCallable(symObj);
 *    // TypeError '#<Object> is not callable'.
 * assertIsCallable(fn);
 *    // Returns fn.
 */
module.exports = function assertIsCallable(value) {
  if (isCallable(value) === false) {
    var msg = isPrimitive(value) ? safeToString(value) : '#<Object>';
    throw new TypeError(msg + ' is not callable');
  }

  return value;
};

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.returnExports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
* @file If IsCallable(callbackfn) is false, throw a TypeError exception.
* @version 2.1.0
* @author Xotic750 <Xotic750@gmail.com>
* @copyright  Xotic750
* @license {@link <https://opensource.org/licenses/MIT> MIT}
* @module assert-is-callable-x
*/

'use strict';

var isCallable = _dereq_('is-callable');
var safeToString = _dereq_('to-string-symbols-supported-x');
var isPrimitive = _dereq_('is-primitive');

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

},{"is-callable":4,"is-primitive":5,"to-string-symbols-supported-x":7}],2:[function(_dereq_,module,exports){
/**
 * @file Constructors cached from literals.
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module cached-constructors-x
 */

'use strict';

/**
 * Constructors cached from literals.
 *
 * @type Object
 * @example
 * var constructors = require('cached-constructors-x');
 */
module.exports = {
  Array: [].constructor,
  Boolean: true.constructor,
  Number: (0).constructor,
  Object: {}.constructor,
  RegExp: (/(?:)/).constructor,
  String: ''.constructor
};

},{}],3:[function(_dereq_,module,exports){
/**
 * @file Tests if ES6 Symbol is supported.
 * @version 1.4.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-symbol-support-x
 */

'use strict';

/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

},{}],4:[function(_dereq_,module,exports){
'use strict';

var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};

},{}],5:[function(_dereq_,module,exports){
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

// see http://jsperf.com/testing-value-is-primitive/7
module.exports = function isPrimitive(value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}],6:[function(_dereq_,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') { return false; }
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') { return true; }
		if (toStr.call(value) !== '[object Symbol]') { return false; }
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}

},{}],7:[function(_dereq_,module,exports){
/**
 * @file ES6 abstract ToString with Symbol conversion support.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tostring|7.1.12 ToString ( argument )}
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-symbols-supported-x
 */

'use strict';

var castString = _dereq_('cached-constructors-x').String;
var pToString = _dereq_('has-symbol-support-x') && Symbol.prototype.toString;
var isSymbol = typeof pToString === 'function' && _dereq_('is-symbol');

/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} value - The value to convert to a string.
 * @returns {string} The converted value.
 * @example
 * var toStringSymbolsSupported = require('to-string-symbols-supported-x');
 *
 * toStringSymbolsSupported(); // 'undefined'
 * toStringSymbolsSupported(null); // 'null'
 * toStringSymbolsSupported('abc'); // 'abc'
 * toStringSymbolsSupported(true); // 'true'
 * toStringSymbolsSupported(Symbol('foo')); // 'Symbol('foo')'
 * toStringSymbolsSupported(Object(Symbol('foo'))); // 'Symbol('foo')'
 * toStringSymbolsSupported(Object.create(null)); // TypeError
 */
module.exports = function toStringSymbolsSupported(value) {
  return isSymbol && isSymbol(value) ? pToString.call(value) : castString(value);
};

},{"cached-constructors-x":2,"has-symbol-support-x":3,"is-symbol":6}]},{},[1])(1)
});
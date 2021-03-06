import isCallable from 'is-callable';
import safeToString from 'to-string-symbols-supported-x';
import isPrimitive from 'is-primitive-x';
/**
 * Tests `callback` to see if it is callable, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} value - The argument to be tested.
 * @param {string} [message] - An alternative user message.
 * @throws {TypeError} Throws if `callback` is not a callable.
 * @returns {*} Returns `callback` if it is callable.
 */

var assertIsCallable = function assertIsCallable(value, message) {
  if (isCallable(value) === false) {
    var msg = arguments.length > 1 ? safeToString(message) : "".concat(isPrimitive(value) ? safeToString(value) : '#<Object>', " is not callable");
    throw new TypeError(msg);
  }

  return value;
};

export default assertIsCallable;

//# sourceMappingURL=assert-is-callable-x.esm.js.map
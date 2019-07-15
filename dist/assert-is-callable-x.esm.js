import isCallable from 'is-callable';
import safeToString from 'to-string-symbols-supported-x';
import isPrimitive from 'is-primitive';
/**
 * Tests `callback` to see if it is callable, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} value - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a callable.
 * @returns {*} Returns `callback` if it is callable.
 */

export default function assertIsCallable(value) {
  if (isCallable(value) === false) {
    var msg = isPrimitive(value) ? safeToString(value) : '#<Object>';
    throw new TypeError("".concat(msg, " is not callable"));
  }

  return value;
}

//# sourceMappingURL=assert-is-callable-x.esm.js.map
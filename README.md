<a
  href="https://travis-ci.org/Xotic750/assert-is-callable-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/assert-is-callable-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/assert-is-callable-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/assert-is-callable-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/assert-is-callable-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/assert-is-callable-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/assert-is-callable-x"
  title="npm version">
<img src="https://badge.fury.io/js/assert-is-callable-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/assert-is-callable-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/assert-is-callable-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/assert-is-callable-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/assert-is-callable-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/assert-is-callable-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/assert-is-callable-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_assert-is-callable-x"></a>

## assert-is-callable-x

If IsCallable(callbackfn) is false, throw a TypeError exception.

<a name="exp_module_assert-is-callable-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>\*</code> ⏏

Tests `callback` to see if it is callable, throws a `TypeError` if it is
not. Otherwise returns the `callback`.

**Kind**: Exported function  
**Returns**: <code>\*</code> - Returns `callback` if it is callable.  
**Throws**:

- <code>TypeError</code> Throws if `callback` is not a callable.

| Param     | Type                | Description                   |
| --------- | ------------------- | ----------------------------- |
| value     | <code>\*</code>     | The argument to be tested.    |
| [message] | <code>string</code> | Optional alternative message. |

**Example**

```js
import assertIsCallable from 'assert-is-callable-x';

const primitive = true;
const mySymbol = Symbol('mySymbol');
const symObj = Object(mySymbol);
const object = {};
const fn = function fn() {};

assertIsCallable(primitive); // TypeError 'true is not callable'.
assertIsCallable(object); // TypeError '#<Object> is not callable'.
assertIsCallable(mySymbol); // TypeError 'Symbol(mySymbol) is not callable'.
assertIsCallable(symObj); // TypeError '#<Object> is not callable'.
console.log(assertIsCallable(fn)); // Returns fn.
```

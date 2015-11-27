<a name="module_assert-is-callable-x"></a>
## assert-is-callable-x
<a href="https://travis-ci.org/Xotic750/assert-is-callable-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/assert-is-callable-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/assert-is-callable-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/assert-is-callable-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/assert-is-callable-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/assert-is-callable-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/assert-is-callable-x" title="npm version">
<img src="https://badge.fury.io/js/assert-is-callable-x.svg"
alt="npm version" height="18">
</a>

If IsCallable(callbackfn) is false, throw a TypeError exception.

**Version**: 1.0.1  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_assert-is-callable-x--module.exports"></a>
### `module.exports(callback)` ⇒ <code>\*</code> ⏏
Tests `callback` to see if it is callable, throws a `TypeError` if it is
not. Otherwise returns the `callback`.

**Kind**: Exported function  
**Returns**: <code>\*</code> - Returns `callback` if it is callable.  
**Throws**:

- <code>TypeError</code> Throws if `callback` is not a callable.


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>\*</code> | The argument to be tested. |

**Example**  
```js
var assertIsCallable = require('assert-is-callable-x');
var primitive = true;
var object = {};
function fn () {}

assertIsCallable(primitive); // TypeError 'true is not a function'.
assertIsCallable(object); // TypeError '#<Object> is not a function'.
assertIsCallable(fn); // Returns fn.
```

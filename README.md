<a href="https://travis-ci.org/Xotic750/assert-is-callable-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/assert-is-callable-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/assert-is-callable-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/assert-is-callable-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/assert-is-callable-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/assert-is-callable-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/assert-is-callable-x" title="npm version">
<img src="https://badge.fury.io/js/assert-is-callable-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_assert-is-callable-x"></a>

## assert-is-callable-x
If IsCallable(callbackfn) is false, throw a TypeError exception.

**Version**: 1.3.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_assert-is-callable-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>\*</code> ⏏
Tests `callback` to see if it is callable, throws a `TypeError` if it is
not. Otherwise returns the `callback`.

**Kind**: Exported function  
**Returns**: <code>\*</code> - Returns `callback` if it is callable.  
**Throws**:

- <code>TypeError</code> Throws if `callback` is not a callable.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The argument to be tested. |

**Example**  
```js
var assertIsCallable = require('assert-is-callable-x');
var primitive = true;
var mySymbol = Symbol('mySymbol');
var symObj = Object(mySymbol);
var object = {};
function fn () {}

assertIsCallable(primitive);
   // TypeError 'true is not callable'.
assertIsCallable(object);
   // TypeError '#<Object> is not callable'.
assertIsCallable(mySymbol);
   // TypeError 'Symbol(mySymbol) is not callable'.
assertIsCallable(symObj);
   // TypeError '#<Object> is not callable'.
assertIsCallable(fn);
   // Returns fn.
```

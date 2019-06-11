# utils

### Table of Contents

* * [Parameters](utils.md#parameters)
* [gdToWei](utils.md#gdtowei)
  * [Parameters](utils.md#parameters-1)

convert wei to gooddollars \(2 decimals\) use toFixed to overcome javascript precision issues ie 8.95\*100=894.9999...

### Parameters

* `wei` [**number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) 

Returns [**number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

## gdToWei

convert gooddollars to wei \(0 decimals\) use toFixed to overcome javascript precision issues ie 8.95\*Math.pow\(0.1,2\)=8.9500000001

### Parameters

* `gd` [**number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) 

Returns [**number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Source

[https://github.com/GoodDollar/GoodDAPP/src/lib/wallet/utils.js](https://github.com/GoodDollar/GoodDAPP/src/lib/wallet/utils.js)


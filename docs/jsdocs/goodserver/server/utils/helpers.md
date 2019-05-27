# helpers

### Table of Contents

* [wrapAsync](helpers.md#wrapasync)
  * [Parameters](helpers.md#parameters)
* [lightLogs](helpers.md#lightlogs)
  * [Parameters](helpers.md#parameters-1)
* [onlyInEnv](helpers.md#onlyinenv)
  * [Parameters](helpers.md#parameters-2)

## wrapAsync

Make sure to `.catch()` any errors and pass them along to the `next()` middleware in the chain, in this case the error handler.

### Parameters

* `fn` [**Function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) 

Returns [**Function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

## lightLogs

Prevents logging header information when logging

### Parameters

* `fn` [**Function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) 

Returns [**Function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

## onlyInEnv

If in production execute the following middleware

### Parameters

* `environments` **...**[**Array**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)**&lt;**[**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**&gt;** 
* `req`  
* `res`  
* `next`  

## Source

[https://github.com/GoodDollar/GoodServer/src/server/utils/helpers.js](https://github.com/GoodDollar/GoodServer/src/server/utils/helpers.js)


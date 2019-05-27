# gun-middleware

### Table of Contents

* [init](gun-middleware.md#init)
  * [Parameters](gun-middleware.md#parameters)
* [recordSanitize](gun-middleware.md#recordsanitize)
  * [Parameters](gun-middleware.md#parameters-1)

## init

### Parameters

* `server` **\(any \| null\)** 
* `password` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) SEA password for GoodDollar user
* `name` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) folder to store gundb
* `s3` **\[S3Conf\]** optional S3 settings instead of local file storage

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;**[**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**&gt;**

## recordSanitize

remove the soul field\(\_\) from gun records

### Parameters

* `obj` **any**  \(optional, default `{}`\)
* `gun` **any** record

## Source

[https://github.com/GoodDollar/GoodServer/src/server/gun/gun-middleware.js](https://github.com/GoodDollar/GoodServer/src/server/gun/gun-middleware.js)


# gun-middleware

### Table of Contents

* [ACK](gun-middleware.md#ack)
  * [Properties](gun-middleware.md#properties)
* [Entity](gun-middleware.md#entity)
  * [Properties](gun-middleware.md#properties-1)
* [Claim](gun-middleware.md#claim)
  * [Properties](gun-middleware.md#properties-2)
* [S3Conf](gun-middleware.md#s3conf)
  * [Properties](gun-middleware.md#properties-3)
* [setup](gun-middleware.md#setup)
  * [Parameters](gun-middleware.md#parameters)
* [GunDB](gun-middleware.md#gundb)
  * [init](gun-middleware.md#init)
    * [Parameters](gun-middleware.md#parameters-1)
  * [recordSanitize](gun-middleware.md#recordsanitize)
    * [Parameters](gun-middleware.md#parameters-2)

## ACK

Type: {ok: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), err: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}

### Properties

* `ok` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `err` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 

## Entity

Type: {@did: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), publicKey: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}

### Properties

* `@did` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `publicKey` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 

## Claim

Type: {issuer: [Entity](gun-middleware.md#entity), subject: [Entity](gun-middleware.md#entity), sig: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?, claim: any, issuedAt: [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date), expiresAt: [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)?}

### Properties

* `issuer` [**Entity**](gun-middleware.md#entity) 
* `subject` [**Entity**](gun-middleware.md#entity) 
* `sig` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**?** 
* `claim` **any** 
* `issuedAt` [**Date**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) 
* `expiresAt` [**Date**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)**?** 

## S3Conf

Type: {key: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), secret: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), bucket: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)}

### Properties

* `key` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `secret` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `bucket` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 

## setup

Make app use Gun.serve and put Gun as global so we can do `node --inspect` - debug only

### Parameters

* `app` **Router** 

## GunDB

Gun wrapper that implements `StorageAPI` Can be instantiated with a private or a public gundb and should be used to access gun accross the API server

### init

#### Parameters

* `server` **\(any \| null\)** 
* `password` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) SEA password for GoodDollar user
* `name` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) folder to store gundb
* `s3` [**S3Conf**](gun-middleware.md#s3conf)**?** optional S3 settings instead of local file storage

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;**[**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**&gt;**

### recordSanitize

remove the soul field\(\_\) from gun records

#### Parameters

* `obj` **any**  \(optional, default `{}`\)
* `gun` **any** record

## Source

[https://github.com/GoodDollar/GoodServer/src/server/gun/gun-middleware.js](https://github.com/GoodDollar/GoodServer/src/server/gun/gun-middleware.js)


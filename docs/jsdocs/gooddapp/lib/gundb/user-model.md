# user-model

### Table of Contents

* [getEmailErrorMessage](user-model.md#getemailerrormessage)
  * [Parameters](user-model.md#parameters)
* [getMobileErrorMessage](user-model.md#getmobileerrormessage)
  * [Parameters](user-model.md#parameters-1)
  * [Parameters](user-model.md#parameters-2)

## getEmailErrorMessage

Returns email error message after running some validations

### Parameters

* `email` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) email value

Returns [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Email error message if invalid, or empty string

## getMobileErrorMessage

Returns mobile error message after running some validations

### Parameters

* `mobile` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) mobile value

Returns [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Mobile error message if invalid, or empty string

Returns an object with record attributes plus some methods to validate, getErrors and check if it is valid

### Parameters

* `record` **UserRecord** User record

Returns **UserModel** User model with some available methods

## Source

[https://github.com/GoodDollar/GoodDAPP/src/lib/gundb/UserModel.js](https://github.com/GoodDollar/GoodDAPP/src/lib/gundb/UserModel.js)


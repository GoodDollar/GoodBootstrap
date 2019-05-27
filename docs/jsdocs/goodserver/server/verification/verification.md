# verification

### Table of Contents

* [verifyEmail](verification.md#verifyemail)
  * [Parameters](verification.md#parameters)

## verifyEmail

Verifies a user's email using its profile and the verification code

### Parameters

* `user` **UserRecord** User profile
* `verificationData` [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) object sent by the client with required verification data
  * `verificationData.code` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) code used to verify that the email is valid

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(**[**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) **\|** [**Error**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)**\)&gt;**

## Source

[https://github.com/GoodDollar/GoodServer/src/server/verification/verification.js](https://github.com/GoodDollar/GoodServer/src/server/verification/verification.js)


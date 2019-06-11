# verification

### Table of Contents

* [Verifications](verification.md#verifications)
  * [verifyUser](verification.md#verifyuser)
    * [Parameters](verification.md#parameters)
  * [verifyMobile](verification.md#verifymobile)
    * [Parameters](verification.md#parameters-1)
  * [verifyEmail](verification.md#verifyemail)
    * [Parameters](verification.md#parameters-2)

## Verifications

Verifications class implements `VerificationAPI` Used to verify user, email and mobile phone

### verifyUser

Verifies user

#### Parameters

* `user` **UserRecord** to verify
* `verificationData` **any** 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(any \|** [**Error**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)**\)&gt;**

### verifyMobile

Verifies mobile phone

#### Parameters

* `user` **UserRecord** to verify
* `verificationData` [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) 
  * `verificationData.otp` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(**[**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) **\|** [**Error**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)**\)&gt;**

### verifyEmail

Verifies a user's email using its profile and the verification code

#### Parameters

* `user` **UserRecord** User profile
* `verificationData` [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) object sent by the client with required verification data
  * `verificationData.code` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) code used to verify that the email is valid

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(**[**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) **\|** [**Error**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)**\)&gt;**

## Source

[https://github.com/GoodDollar/GoodServer/src/server/verification/verification.js](https://github.com/GoodDollar/GoodServer/src/server/verification/verification.js)


# send.sendgrid

### Table of Contents

* [sendRecoveryInstructionsByEmail](send.sendgrid.md#sendrecoveryinstructionsbyemail)
  * [Parameters](send.sendgrid.md#parameters)
* [sendEmailConfirmationLink](send.sendgrid.md#sendemailconfirmationlink)
  * [Parameters](send.sendgrid.md#parameters-1)

## sendRecoveryInstructionsByEmail

Sends an email with recovery instructions to the user's registered email through SendGrid. Send it by an API using a Transactional Template

### Parameters

* `to` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) User email
* `name` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) User name
* `key` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Mnemonic key

Returns **\(**[**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;R&gt; \|** [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(R \| any\)&gt;\)**

## sendEmailConfirmationLink

Sends an email to the user's registered email through SendGrid.send API using a Transactional Template

### Parameters

* `user` **UserRecord** User profile

Returns **\(**[**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;R&gt; \|** [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(R \| any\)&gt;\)**

## Source

[https://github.com/GoodDollar/GoodServer/src/server/send/send.sendgrid.js](https://github.com/GoodDollar/GoodServer/src/server/send/send.sendgrid.js)


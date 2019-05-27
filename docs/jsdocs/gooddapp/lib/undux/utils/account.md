# account

### Table of Contents

* [updateBalance](account.md#updatebalance)
  * [Parameters](account.md#parameters)
* [updateEntitlement](account.md#updateentitlement)
  * [Parameters](account.md#parameters-1)
* [onBalanceChange](account.md#onbalancechange)
  * [Parameters](account.md#parameters-2)

## updateBalance

Retrieves account's balance and sets its value to the state

### Parameters

* `store` **Store** 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;void&gt;**

## updateEntitlement

Retrieves account's entitlement and sets its value to the state

### Parameters

* `store` **Store** 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;void&gt;**

## onBalanceChange

Callback to handle events emmited

### Parameters

* `error` **{}** 
* `event` **\[any\]** 
* `store` **Store** 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;void&gt;**

Starts listening to Transfer events to \(and from\) the current account

## Source

[https://github.com/GoodDollar/GoodDAPP/src/lib/undux/utils/account.js](https://github.com/GoodDollar/GoodDAPP/src/lib/undux/utils/account.js)


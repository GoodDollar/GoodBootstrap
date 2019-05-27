# g-d-store

### Table of Contents

* [State](g-d-store.md#state)
  * [Properties](g-d-store.md#properties)
* [initialState](g-d-store.md#initialstate)
* [GDStore](g-d-store.md#gdstore)

## State

Type definition for the global store

Type: {balanceUpdate: BalanceUpdate, name: [Name](https://developer.mozilla.org/), account: Account, currentScreen: CurrentScreen, destinationPath: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), feeds: [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;StandardFeed&gt;, feedLoading: [Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean), loadingIndicator: LoadingIndicator}

### Properties

* `balanceUpdate` **BalanceUpdate** 
* `name` [**Name**](https://developer.mozilla.org/) 
* `account` **Account** 
* `currentScreen` **CurrentScreen** 
* `destinationPath` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `feeds` [**Array**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)**&lt;StandardFeed&gt;** 
* `feedLoading` [**Boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 
* `loadingIndicator` **LoadingIndicator** 

## initialState

Initial store state

Type: [State](g-d-store.md#state)

## GDStore

default exported instance of our global Undux Store

## Source

[https://github.com/GoodDollar/GoodDAPP/src/lib/undux/GDStore.js](https://github.com/GoodDollar/GoodDAPP/src/lib/undux/GDStore.js)


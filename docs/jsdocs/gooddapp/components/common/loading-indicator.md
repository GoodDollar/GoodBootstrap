# loading-indicator

### Table of Contents

* [setLoadingWithStore](loading-indicator.md#setloadingwithstore)
  * [Parameters](loading-indicator.md#parameters)
* [LoadingIndicator](loading-indicator.md#loadingindicator)
  * [Parameters](loading-indicator.md#parameters-1)

## setLoadingWithStore

Curried function wich requires an undux Store and then sets the flag to show/hide the LoadingIndicator component

### Parameters

* `store` **Store** undux store

Returns **function \(to:** [**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**\): void** Sets `loading` to what `to` states. It requires `loadingIndicator` to be set in the Store's state

## LoadingIndicator

Provides a `LoadingIndicator` component which renders an ActivityIndicator over a semi-transparent background.

### Parameters

* `props` [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) an object with props
  * `props.force` [**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) to force rendering

Returns **React.Node**

## Source

[https://github.com/GoodDollar/GoodDAPP/src/components/common/LoadingIndicator.js](https://github.com/GoodDollar/GoodDAPP/src/components/common/LoadingIndicator.js)


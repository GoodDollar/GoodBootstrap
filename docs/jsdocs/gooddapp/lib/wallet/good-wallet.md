# good-wallet

### Table of Contents

* [QueryEvent](good-wallet.md#queryevent)
  * [Properties](good-wallet.md#properties)
* [listenTxUpdates](good-wallet.md#listentxupdates)
  * [Parameters](good-wallet.md#parameters)
* [subscribeToEvent](good-wallet.md#subscribetoevent)
  * [Parameters](good-wallet.md#parameters-1)
* [unsubscribeFromEvent](good-wallet.md#unsubscribefromevent)
  * [Parameters](good-wallet.md#parameters-2)
* [getSubscribers](good-wallet.md#getsubscribers)
  * [Parameters](good-wallet.md#parameters-3)
* [balanceChanged](good-wallet.md#balancechanged)
  * [Parameters](good-wallet.md#parameters-4)
* [getBlockNumber](good-wallet.md#getblocknumber)
* [getEvents](good-wallet.md#getevents)
  * [Parameters](good-wallet.md#parameters-5)
* [oneTimeEvents](good-wallet.md#onetimeevents)
  * [Parameters](good-wallet.md#parameters-6)
* [pollForEvents](good-wallet.md#pollforevents)
  * [Parameters](good-wallet.md#parameters-7)
* [sendTransaction](good-wallet.md#sendtransaction)
  * [Parameters](good-wallet.md#parameters-8)

## QueryEvent

the HDWallet account to use. we use different accounts for different actions in order to preserve privacy and simplify things for user in background

Type: {event: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), contract: Web3.eth.Contract, filterPred: {}, fromBlock: any, toBlock: \(any \| `"latest"`\)?}

### Properties

* `event` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `contract` **Web3.eth.Contract** 
* `filterPred` **{}** 
* `fromBlock` **any** 
* `toBlock` **\(any \| `"latest"`\)?** 

## listenTxUpdates

Subscribes to Transfer events \(from and to\) the current account This is used to verify account balance changes

### Parameters

* `fromBlock` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) defaultValue: '0'

Returns **\(**[**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;R&gt; \|** [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(R \| any\)&gt; \|** [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;any&gt;\)**

## subscribeToEvent

Sets an id and place a callback function for this id, for the sent event

### Parameters

* `eventName` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `cb` [**Function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) 

Returns [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) subscriber id and eventName

## unsubscribeFromEvent

removes subscriber from subscriber list with the specified id and event name

### Parameters

* `event` [**event**](https://developer.mozilla.org/docs/Web/API/Event) 
  * `event.eventName`  
  * `event.id`  

## getSubscribers

Gets all subscribers as array for given eventName

### Parameters

* `eventName` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 

Returns [**Function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) a json object containing all subscribers for the specified event name

## balanceChanged

Listen to balance changes for the current account

### Parameters

* `cb` [**Function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;void&gt;**

## getBlockNumber

Retrieves current Block Number and returns it as converted to a BN instance

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;BN&gt;** Current block number in BN instance

## getEvents

Client side event filter. Requests all events for a particular contract, then filters them and returns the event Object

### Parameters

* `$0` **any** 
  * `$0.event`  
  * `$0.contract`  
  * `$0.filterPred`  
  * `$0.fromBlock`   \(optional, default `ZERO`\)
  * `$0.toBlock`  
* `event` [**String**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Event to subscribe to
* `contract` [**Object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) Contract from which event will be queried
* `filterPred` [**Object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) Event's filter. Does not required to be indexed as it's filtered locally
* `fromBlock` **BN** Lower blocks range value
* `toBlock` **BN** Higher blocks range value

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;any&gt;**

## oneTimeEvents

Subscribes to a particular event and returns the result based on options specified

### Parameters

* `$0` **any** 
  * `$0.event`  
  * `$0.contract`  
  * `$0.filterPred`  
  * `$0.fromBlock`  
  * `$0.toBlock`  
* `callback` [**Function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) Function to be called once an event is received
* `event` [**String**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Event to subscribe to
* `contract` [**Object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) Contract from which event will be queried
* `filterPred` [**Object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) Event's filter. Does not required to be indexed as it's filtered locally
* `fromBlock` **BN** Lower blocks range value
* `toBlock` **BN** Higher blocks range value

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;void&gt;**

## pollForEvents

Polls for events every INTERVAL defined by BLOCK\_TIME and BLOCK\_COUNT, the result is based on specified options It queries the range 'fromBlock'-'toBlock' and then continues querying the blockchain for most recent events, from the 'lastProcessedBlock' to the 'latest' every INTERVAL

### Parameters

* `$0` **any** 
  * `$0.event`  
  * `$0.contract`  
  * `$0.filterPred`  
  * `$0.fromBlock`  
  * `$0.toBlock`  
* `callback` [**Function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) Function to be called once an event is received
* `event` [**String**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Event to subscribe to
* `contract` [**Object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) Contract from which event will be queried
* `filterPred` [**Object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) Event's filter. Does not required to be indexed as it's filtered locally
* `fromBlock` **BN** Lower blocks range value
* `toBlock` **BN** Higher blocks range value
* `lastProcessedBlock` **BN** Used for recursion. It's not required to be set by the user. Initial value: ZERO

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;void&gt;**

## sendTransaction

Helper function to handle a tx Send call

### Parameters

* `tx` **any** 
* `txCallbacks` **PromiEvents**  \(optional, default `defaultPromiEvents`\)
* `gasValues` [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)  \(optional, default `{gas:undefined,gasPrice:undefined}`\)
  * `gasValues.gas` [**number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) 
  * `gasValues.gasPrice` [**number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) 
* `promiEvents` [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) 
  * `promiEvents.onTransactionHash` [**function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) 
  * `promiEvents.onReceipt` [**function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) 
  * `promiEvents.onConfirmation` [**function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) 
  * `promiEvents.onError` [**function**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(**[**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) **\| Q.Promise&lt;any&gt; \|** [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;any&gt; \|** [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;any&gt; \|** [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;any&gt; \| any\)&gt;**

receipt handling happens already in polling events

## Source

[https://github.com/GoodDollar/GoodDAPP/src/lib/wallet/GoodWallet.js](https://github.com/GoodDollar/GoodDAPP/src/lib/wallet/GoodWallet.js)


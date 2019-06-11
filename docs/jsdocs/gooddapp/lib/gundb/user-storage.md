# user-storage

### Table of Contents

* [GunDBUser](user-storage.md#gundbuser)
  * [Properties](user-storage.md#properties)
* [FieldPrivacy](user-storage.md#fieldprivacy)
* [ProfileField](user-storage.md#profilefield)
  * [Properties](user-storage.md#properties-1)
* [FeedEvent](user-storage.md#feedevent)
  * [Properties](user-storage.md#properties-2)
* [TransactionEvent](user-storage.md#transactionevent)
* [getReceiveDataFromReceipt](user-storage.md#getreceivedatafromreceipt)
  * [Parameters](user-storage.md#parameters)
* [UserStorage](user-storage.md#userstorage)
  * [Parameters](user-storage.md#parameters-1)
  * [wallet](user-storage.md#wallet)
  * [gunuser](user-storage.md#gunuser)
  * [profile](user-storage.md#profile)
  * [feed](user-storage.md#feed)
  * [feedIndex](user-storage.md#feedindex)
  * [user](user-storage.md#user)
  * [ready](user-storage.md#ready)
  * [init](user-storage.md#init)
  * [getFeedItemByTransactionHash](user-storage.md#getfeeditembytransactionhash)
    * [Parameters](user-storage.md#parameters-2)
  * [getAllFeed](user-storage.md#getallfeed)
  * [getProfileFieldValue](user-storage.md#getprofilefieldvalue)
    * [Parameters](user-storage.md#parameters-3)
  * [getProfileField](user-storage.md#getprofilefield)
    * [Parameters](user-storage.md#parameters-4)
  * [getDisplayProfile](user-storage.md#getdisplayprofile)
    * [Parameters](user-storage.md#parameters-5)
  * [getPrivateProfile](user-storage.md#getprivateprofile)
    * [Parameters](user-storage.md#parameters-6)
  * [setProfile](user-storage.md#setprofile)
    * [Parameters](user-storage.md#parameters-7)
  * [setProfileField](user-storage.md#setprofilefield)
    * [Parameters](user-storage.md#parameters-8)
  * [indexProfileField](user-storage.md#indexprofilefield)
    * [Parameters](user-storage.md#parameters-9)
  * [setProfileFieldPrivacy](user-storage.md#setprofilefieldprivacy)
    * [Parameters](user-storage.md#parameters-10)
  * [getFeedPage](user-storage.md#getfeedpage)
    * [Parameters](user-storage.md#parameters-11)
  * [getFormattedEvents](user-storage.md#getformattedevents)
    * [Parameters](user-storage.md#parameters-12)
  * [getUserAddress](user-storage.md#getuseraddress)
    * [Parameters](user-storage.md#parameters-13)
  * [getUserProfile](user-storage.md#getuserprofile)
    * [Parameters](user-storage.md#parameters-14)
  * [formatEvent](user-storage.md#formatevent)
    * [Parameters](user-storage.md#parameters-15)
  * [enqueueTX](user-storage.md#enqueuetx)
    * [Parameters](user-storage.md#parameters-16)
  * [dequeueTX](user-storage.md#dequeuetx)
    * [Parameters](user-storage.md#parameters-17)
  * [peekTX](user-storage.md#peektx)
    * [Parameters](user-storage.md#parameters-18)
  * [updateFeedEvent](user-storage.md#updatefeedevent)
    * [Parameters](user-storage.md#parameters-19)
  * [getLastBlockNode](user-storage.md#getlastblocknode)
  * [saveLastBlockNumber](user-storage.md#savelastblocknumber)
    * [Parameters](user-storage.md#parameters-20)
  * [deleteAccount](user-storage.md#deleteaccount)
  * [maskField](user-storage.md#maskfield)
    * [Parameters](user-storage.md#parameters-21)
  * [Parameters](user-storage.md#parameters-22)

## GunDBUser

User details returned from Gun SEA

Type: {alias: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), epub: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), pub: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), sea: any}

### Properties

* `alias` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `epub` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `pub` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `sea` **any** 

## FieldPrivacy

possible privacy level for profile fields

Type: \(`"private"` \| `"public"` \| `"masked"`\)

## ProfileField

User's profile field data

Type: {value: EncryptedField, display: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), privacy: [FieldPrivacy](user-storage.md#fieldprivacy)}

### Properties

* `value` **EncryptedField** 
* `display` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `privacy` [**FieldPrivacy**](user-storage.md#fieldprivacy) 

## FeedEvent

User's feed event data

Type: {id: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), type: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), date: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), data: any}

### Properties

* `id` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `type` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `date` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `data` **any** 

## TransactionEvent

Blockchain transaction event data

Type: any

## getReceiveDataFromReceipt

Extracts transfer events sent to the current account

### Parameters

* `receipt` [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) Receipt event

Returns [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) {transferLog: event: \[{evtName: evtValue}\]}

## UserStorage

Users gundb to handle user storage. User storage is used to keep the user Self Soverign Profile and his blockchain transcation history

### Parameters

* `wallet` **GoodWallet** 

### wallet

wallet an instance of GoodWallet

Type: GoodWallet

### gunuser

a gun node refering to gun.user\(\)

Type: Gun

### profile

a gun node refering to gun.user\(\).get\('profile'\)

Type: Gun

### feed

a gun node refering to gun.user\(\).get\('feed'\)

Type: Gun

### feedIndex

In memory array. keep number of events per day

Type: [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;\[[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)\]&gt;

### user

object with Gun SEA user details

Type: [GunDBUser](user-storage.md#gundbuser)

### ready

A promise which is resolved once init\(\) is done

Type: [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)&gt;

### init

Initialize wallet, gundb user, feed and subscribe to events

### getFeedItemByTransactionHash

Find feed by transaction hash in array, and returns feed object

#### Parameters

* `transactionHash` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) transaction identifier

Returns [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) feed item or null if it doesn't exist

### getAllFeed

Returns a Promise that, when resolved, will have all the feeds available for the current user

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;**[**Array**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)**&lt;**[**FeedEvent**](user-storage.md#feedevent)**&gt;&gt;**

### getProfileFieldValue

Returns profile attribute

#### Parameters

* `field` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Profile attribute

Returns [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Decrypted profile value

### getProfileField

Returns progfile attribute value

#### Parameters

* `field` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Profile attribute

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) Gun profile attribute object

### getDisplayProfile

Return display attribute of each profile property

#### Parameters

* `profile` [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) User profile

Returns [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) User model with display values

### getPrivateProfile

Returns user model with attribute values

#### Parameters

* `profile` [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) user profile

Returns [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) UserModel with some inherit functions

### setProfile

Save profile with all validations and indexes It saves only known profile fields

#### Parameters

* `profile` **UserModel** User profile
* Throws **any** Error if profile is invalid

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) Promise with profile settings updates and privacy validations

### setProfileField

Set profile field with privacy settings

#### Parameters

* `field` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Profile attribute
* `value` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Profile attribute value
* `privacy` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \(private \| public \| masked\) \(optional, default `'public'`\)

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) Promise with updated field value, secret, display and privacy.

### indexProfileField

Generates index by field if privacy is public, or empty index if it's not public

#### Parameters

* `field` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Profile attribute
* `value` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Profile attribute value
* `privacy` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \(private \| public \| masked\)

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;ACK&gt;** Gun result promise after index is generated

### setProfileFieldPrivacy

Set profile field privacy.

#### Parameters

* `field` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Profile attribute
* `privacy` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \(private \| public \| masked\)

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) Promise with updated field value, secret, display and privacy.

### getFeedPage

Returns the next page in feed. could contain more than numResults. each page will contain all of the transactions of the last day fetched even if &gt; numResults

#### Parameters

* `numResults` [**number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) return at least this number of results if available
* `reset` [**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) should restart cursor \(optional, default `false`\)

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) Promise with an array of feed events

### getFormattedEvents

Return all feed events

#### Parameters

* `numResults` [**number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) 
* `reset` [**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) Promise with array of standarised feed events

### getUserAddress

#### Parameters

* `field` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Profile field value \(email, mobile or wallet address value\)

Returns [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) address

### getUserProfile

Returns name and avatar from profile based filtered by received value

#### Parameters

* `field` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Profile field value \(email, mobile or wallet address value\)

Returns [**object**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) profile - { name, avatar }

### formatEvent

Returns the feed in a standard format to be loaded in feed list and modal

#### Parameters

* `param` [**FeedEvent**](user-storage.md#feedevent) Feed event with data, type, date and id props
  * `param.data`  
  * `param.type`  
  * `param.date`  
  * `param.id`  

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) Promise with StandardFeed object, with props { id, date, type, data: { amount, message, endpoint: { address, fullName, avatar, withdrawStatus }}}

### enqueueTX

enqueue a new pending TX done on DAPP, to be later merged with the blockchain tx the DAPP event can contain more details than the blockchain tx event

#### Parameters

* `event` [**FeedEvent**](user-storage.md#feedevent) 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;&gt;**

### dequeueTX

remove and return pending TX

#### Parameters

* `eventId` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 
* `event` **any** 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;**[**FeedEvent**](user-storage.md#feedevent)**&gt;**

### peekTX

lookup a pending tx

#### Parameters

* `eventId` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;**[**FeedEvent**](user-storage.md#feedevent)**&gt;**

### updateFeedEvent

Update feed event

#### Parameters

* `event` [**FeedEvent**](user-storage.md#feedevent) Event to be updated

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) Promise with updated feed

### getLastBlockNode

Returns the 'lastBlock' gun's node

Returns **any**

### saveLastBlockNumber

Saves block number in the 'lastBlock' node

#### Parameters

* `blockNumber` **\(**[**number**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) **\|** [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**\)** 

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(**[**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;any&gt; \|** [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;\(R \| any\)&gt;\)&gt;**

### deleteAccount

Delete the user account. Deleting gundb profile and clearing local storage Calling the server to delete their data

Returns [**Promise**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)**&lt;**[**boolean**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**&gt;**

### maskField

Returns phone with last 4 numbers, and before that \*\*\*, and hide email user characters leaving visible only first and last character

#### Parameters

* `fieldType` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) \(Email, mobile or phone\) Field name
* `value` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Field value

Returns [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Returns masked value with \*\*\* to hide characters

Clean string removing blank spaces and special characters, and converts to lower case

### Parameters

* `field` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Field name
* `value` [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Field value

Returns [**string**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) Value without '+' \(plus\), '-' \(minus\), '\_' \(underscore\), ' ' \(space\), in lower case

## Source

[https://github.com/GoodDollar/GoodDAPP/src/lib/gundb/UserStorage.js](https://github.com/GoodDollar/GoodDAPP/src/lib/gundb/UserStorage.js)


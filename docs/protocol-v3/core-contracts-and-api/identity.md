---
description: The Identity contract controls addresses that are whitelisted to "Claim" UBI.
---

# Identity

* **Face Verification** GoodDollar currently whitelists users based on a user proving "uniqueness" by signing up with a live and unique face. All image data and details are anonymized in order to allow the user to create a new account in case he is unable to recover his wallet. Facial details are deleted after `authenticationPeriod` and users are required to perform face verification again every `authenticationPeriod` days.
* **Social Profile** Each blockchain address is linked to the user's public profile as created in the wallet. The DID is the node id in the public p2p GunDB database. Mappings from wallet address to DID are held in `addrToDID`.

### Events

#### BlacklistAdded

Emitted when the address is added to blacklist.

| Parameter name | Annotation                         |
| -------------- | ---------------------------------- |
| account        | The address of the account to add. |

```
event BlacklistAdded(address indexed account);
```

#### BlacklistRemoved

Emitted when the address is removed from blacklist.

| Parameter name | Annotation                            |
| -------------- | ------------------------------------- |
| account        | The address of the account to remove. |

```
event BlacklistRemoved(address indexed account);
```

#### WhitelistedRemoved

Emitted when the address is removed from whitelist.

| Parameter name | Annotation                            |
| -------------- | ------------------------------------- |
| account        | The address of the account to remove. |

```
event WhitelistedRemoved(address indexed account);
```

#### WhitelistedAdded

Emitted when the address is added to whitelist.

| Parameter name | Annotation                         |
| -------------- | ---------------------------------- |
| account        | The address of the account to add. |

```
event WhitelistedAdded(address indexed account);
```

#### ContractAdded

Emitted when the contract address is added to whitelist.

| Parameter name | Annotation                          |
| -------------- | ----------------------------------- |
| account        | The address of the contract to add. |

```
event ContractAdded(address indexed account);
```

#### ContractRemoved

Emitted when the contract address is removed from whitelist.

| Parameter name | Annotation                          |
| -------------- | ----------------------------------- |
| account        | The address of the contract to add. |

```
event ContractRemoved(address indexed account);
```

### isWhitelisted

The function checks if given address has been added to whitelist.

| Parameter name | Annotation            |
| -------------- | --------------------- |
| account        | The address to check. |

Returns: a boolean indicating weather the address is present in whitelist.

```
function isWhitelisted(address account) public view returns (bool);
```

### lastAuthenticated

Function that gives the date the given user was added.

| Parameter name | Annotation            |
| -------------- | --------------------- |
| account        | The address to check. |

Returns: the date the address was added.

```
function lastAuthenticated(address account) public view returns (uint256);
```

### authenticationPeriod

Field that contains the number of days an authentication is valid for.

Returns: a time duration in days.

```
function authenticationPeriod() external view returns (uint256);
```

### addrToDID

Function that gives the DID representation for given address.

| Parameter name | Annotation            |
| -------------- | --------------------- |
| account        | The address to check. |

Returns: the string representation of DID

```
function addrToDID(address account) external view returns (string memory);
```


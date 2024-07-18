---
description: The Identity contract controls addresses that are whitelisted to "Claim" UBI.
---

# Identity

* **Face Verification** GoodDollar currently whitelists users based on a user proving "uniqueness" by signing up with a live and unique face. All image data and details are anonymized in order to allow the user to create a new account in case he is unable to recover his wallet. Facial details are deleted after `authenticationPeriod` and users are required to perform face verification again every `authenticationPeriod` days.
* **Social Profile** Each blockchain address is linked to the user's public profile as created in the wallet. The DID is the node id in the public p2p GunDB database. Mappings from wallet address to DID are held in `addrToDID`.

### Events

#### BlacklistAdded

Emitted when the address is added to blacklist.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The address of the account to add.</td></tr></tbody></table>

```
event BlacklistAdded(address indexed account);
```

#### BlacklistRemoved

Emitted when the address is removed from blacklist.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The address of the account to remove.</td></tr></tbody></table>

```
event BlacklistRemoved(address indexed account);
```

#### WhitelistedRemoved

Emitted when the address is removed from whitelist.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The address of the account to remove.</td></tr></tbody></table>

```
event WhitelistedRemoved(address indexed account);
```

#### WhitelistedAdded

Emitted when the address is added to whitelist.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The address of the account to add.</td></tr></tbody></table>

```
event WhitelistedAdded(address indexed account);
```

#### ContractAdded

Emitted when the contract address is added to whitelist.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The address of the contract to add.</td></tr></tbody></table>

```
event ContractAdded(address indexed account);
```

#### ContractRemoved

Emitted when the contract address is removed from whitelist.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The address of the contract to add.</td></tr></tbody></table>

```
event ContractRemoved(address indexed account);
```

### isWhitelisted

The function checks if given address has been added to whitelist.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The address to check.</td></tr></tbody></table>

Returns: a boolean indicating weather the address is present in whitelist.

```
function isWhitelisted(address account) public view returns (bool);
```

### lastAuthenticated

Function that gives the date the given user was added.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The address to check.</td></tr></tbody></table>

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

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The address to check.</td></tr></tbody></table>

Returns: the string representation of DID

```
function addrToDID(address account) external view returns (string memory);
```


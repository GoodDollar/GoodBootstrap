---
description: >-
  Helper contract for our backend servers to whitelist users and to fill their
  Fuse network gas.
---

# AdminWallet

### Events

#### AdminsAdded

Emitted when new admins were added.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>admins</td><td>The addresses of the admins that were added.</td></tr></tbody></table>

```
event AdminsAdded(address payable[] indexed admins);
```

#### AdminsRemoved

Emitted when old admins were removed.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>admins</td><td>The addresses of the admins that were removed.</td></tr></tbody></table>

```
event AdminsRemoved(address[] indexed admins);
```

#### WalletTopped

Emitted when the specific user address was topped.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>user</td><td>The users address that was topped.</td></tr><tr><td>amount</td><td>The amount that was sent.</td></tr></tbody></table>

```
event WalletTopped(address indexed user, uint256 amount);
```

#### GenericCall

Emitted when the wallet is performing some tx.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_contract</td><td>The contract that was called.</td></tr><tr><td>_data</td><td>The data of the tx.</td></tr><tr><td>_value</td><td>The amount of the native token that was sent.</td></tr><tr><td>_success</td><td>The status of the performed tx.</td></tr></tbody></table>

```
event GenericCall(
        address indexed _contract,
        bytes _data,
        uint256 _value,
        bool _success
);
```

### setBonusContract

Sets the SignUpBonus contract address.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_bonus</td><td>The new address of the SignUpBonus contract.</td></tr></tbody></table>

Can only be called by the admin.

```
function setBonusContract(address _bonus) public;
```

### addAdmins

Function to add list of addresses to admins list.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_admins</td><td>The list of addresses to add as admins list.</td></tr></tbody></table>

Can only be called by the admin.

```
function addAdmins(address payable[] memory _admins) public;
```

### removeAdmins

Function to remove list of addresses from admins list.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_admins</td><td>The list of addresses to remove from admins list.</td></tr></tbody></table>

Can only be called by the admin.

```
function removeAdmins(address[] memory _admins) public;
```

### topAdmins

Function to top group of admins by indicies with amount of G$ given in constructor. The amount of times per day specified in the constructor.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>startIndex</td><td>Starting index in the admins list.</td></tr><tr><td>endIndex</td><td>Ending index in the admins list.</td></tr></tbody></table>

```
function topAdmins(uint256 startIndex, uint256 endIndex) public;
```

Below there is the overriden variant which performs like the original except the `endIndex` is set to 50 by default.

```
function topAdmins(uint256 startIndex) public;
```

### isAdmin

Function to check if given account is the admin.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The account address to check.</td></tr></tbody></table>

Returns: `true` if `_user` is the admin, `false` elsewise.

```
function isAdmin(address _user) public view returns (bool)
```

### whitelist

Function to add given address to whitelist of identity contract.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The account address to be added to whitelist.</td></tr><tr><td>_did</td><td>The DID of the <code>_user</code>.</td></tr></tbody></table>

Can only be called by admins of wallet and if wallet is an IdentityAdmin.

```
function whitelist(address _user, string memory _did) public;
```

### removeWhitelist

Function to remove given address from whitelist of identity contract.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The account address to whitelist.</td></tr></tbody></table>

Can only be called by admins of wallet and if wallet is an IdentityAdmin.

```
function removeWhitelist(address _user) public;
```

### blacklist

Function to add given address to blacklist of identity contract.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The account address to be added to blacklist.</td></tr></tbody></table>

Can only be called by admins of wallet and if wallet is an IdentityAdmin.

```
function blacklist(address _user) public;
```

### removeBlacklist

Function to remove given address from blacklist of identity contract.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The account address to be removed from blacklist.</td></tr></tbody></table>

Can only be called by admins of wallet and if wallet is an IdentityAdmin.

```
function removeBlacklist(address _user) public;
```

### topWallet

Function to top given address with amount of G$ given in constructor.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The address to transfer to.</td></tr></tbody></table>

Can only be done by admin. The amount of times per day specified in constructor.

```
function topWallet(address payable _user) public;
```

### whitelistAndAwardUser

Function to whitelist user and also award him pending bonuses, it can be used also later when the user is already whitelisted to just award pending bonuses.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The address to transfer to and whitelist.</td></tr><tr><td>_amount</td><td>The bonus amount to give.</td></tr><tr><td>_did</td><td>Decentralized ID of user, pointer to some profile.</td></tr></tbody></table>

Can only be done by admin.

```
function whitelistAndAwardUser(
        address _user,
        uint256 _amount,
        string memory _did
) public;
```

### awardUser

Function to award user with pending bonuses, can only be done by admin.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The address to transfer to and whitelist.</td></tr><tr><td>_amount</td><td>The bonus amount to give.</td></tr></tbody></table>

```
function awardUser(address _user, uint256 _amount) public;
```

### genericCall

Perform a generic call to an arbitrary contract.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_contract</td><td>The contract's address to call.</td></tr><tr><td>_data</td><td>ABI-encoded contract call to call <code>_contract</code> address.</td></tr><tr><td>_value</td><td>Value (native token) to transfer with the transaction.</td></tr></tbody></table>

Returns: pair of bool and bytes - success or fail and bytes of the called contract's function.

```
function genericCall(
        address _contract,
        bytes memory _data,
        uint256 _value
 ) public returns (bool success, bytes memory returnValue)
```

### destroy

Destroy wallet and return funds to owner. Can only be executed by the admin.

```
function destroy() public;
```

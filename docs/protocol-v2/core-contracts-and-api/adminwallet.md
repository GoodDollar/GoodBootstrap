---
description: >-
  Helper contract for our backend servers to whitelist users and to fill their
  Fuse network gas.
---

# AdminWallet

### Events

#### AdminsAdded

Emitted when new admins were added.

| Parameter name | Annotation                                   |
| -------------- | -------------------------------------------- |
| admins         | The addresses of the admins that were added. |

```
event AdminsAdded(address payable[] indexed admins);
```

#### AdminsRemoved

Emitted when old admins were removed.

| Parameter name | Annotation                                     |
| -------------- | ---------------------------------------------- |
| admins         | The addresses of the admins that were removed. |

```
event AdminsRemoved(address[] indexed admins);
```

#### WalletTopped

Emitted when the specific user address was topped.

| Parameter name | Annotation                         |
| -------------- | ---------------------------------- |
| user           | The users address that was topped. |
| amount         | The amount that was sent.          |

```
event WalletTopped(address indexed user, uint256 amount);
```

#### GenericCall

Emitted when the wallet is performing some tx.

| Parameter name | Annotation                                    |
| -------------- | --------------------------------------------- |
| \_contract     | The contract that was called.                 |
| \_data         | The data of the tx.                           |
| \_value        | The amount of the native token that was sent. |
| \_success      | The status of the performed tx.               |

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

| Parameter name | Annotation                                   |
| -------------- | -------------------------------------------- |
| \_bonus        | The new address of the SignUpBonus contract. |

Can only be called by the admin.

```
function setBonusContract(address _bonus) public;
```

### addAdmins

Function to add list of addresses to admins list.

| Parameter name | Annotation                                   |
| -------------- | -------------------------------------------- |
| \_admins       | The list of addresses to add as admins list. |

Can only be called by the admin.

```
function addAdmins(address payable[] memory _admins) public;
```

### removeAdmins

Function to remove list of addresses from admins list.

| Parameter name | Annotation                                        |
| -------------- | ------------------------------------------------- |
| \_admins       | The list of addresses to remove from admins list. |

Can only be called by the admin.

```
function removeAdmins(address[] memory _admins) public;
```

### topAdmins

Function to top group of admins by indicies with amount of G$ given in constructor. The amount of times per day specified in the constructor.

| Parameter name | Annotation                         |
| -------------- | ---------------------------------- |
| startIndex     | Starting index in the admins list. |
| endIndex       | Ending index in the admins list.   |

```
function topAdmins(uint256 startIndex, uint256 endIndex) public;
```

Below there is the overriden variant which performs like the original except the `endIndex` is set to 50 by default.

```
function topAdmins(uint256 startIndex) public;
```

### isAdmin

Function to check if given account is the admin.

| Parameter name | Annotation                    |
| -------------- | ----------------------------- |
| \_user         | The account address to check. |

Returns: `true` if `_user` is the admin, `false` elsewise.

```
function isAdmin(address _user) public view returns (bool)
```

### whitelist

Function to add given address to whitelist of identity contract.

| Parameter name | Annotation                                    |
| -------------- | --------------------------------------------- |
| \_user         | The account address to be added to whitelist. |
| \_did          | The DID of the `_user`.                       |

Can only be called by admins of wallet and if wallet is an IdentityAdmin.

```
function whitelist(address _user, string memory _did) public;
```

### removeWhitelist

Function to remove given address from whitelist of identity contract.

| Parameter name | Annotation                        |
| -------------- | --------------------------------- |
| \_user         | The account address to whitelist. |

Can only be called by admins of wallet and if wallet is an IdentityAdmin.

```
function removeWhitelist(address _user) public;
```

### blacklist

Function to add given address to blacklist of identity contract.

| Parameter name | Annotation                                    |
| -------------- | --------------------------------------------- |
| \_user         | The account address to be added to blacklist. |

Can only be called by admins of wallet and if wallet is an IdentityAdmin.

```
function blacklist(address _user) public;
```

### removeBlacklist

Function to remove given address from blacklist of identity contract.

| Parameter name | Annotation                                        |
| -------------- | ------------------------------------------------- |
| \_user         | The account address to be removed from blacklist. |

Can only be called by admins of wallet and if wallet is an IdentityAdmin.

```
function removeBlacklist(address _user) public;
```

### topWallet

Function to top given address with amount of G$ given in constructor.

| Parameter name | Annotation                  |
| -------------- | --------------------------- |
| \_user         | The address to transfer to. |

Can only be done by admin. The amount of times per day specified in constructor.

```
function topWallet(address payable _user) public;
```

### whitelistAndAwardUser

Function to whitelist user and also award him pending bonuses, it can be used also later when the user is already whitelisted to just award pending bonuses.

| Parameter name | Annotation                                         |
| -------------- | -------------------------------------------------- |
| \_user         | The address to transfer to and whitelist.          |
| \_amount       | The bonus amount to give.                          |
| \_did          | Decentralized ID of user, pointer to some profile. |

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

| Parameter name | Annotation                                |
| -------------- | ----------------------------------------- |
| \_user         | The address to transfer to and whitelist. |
| \_amount       | The bonus amount to give.                 |

```
function awardUser(address _user, uint256 _amount) public;
```

### genericCall

Perform a generic call to an arbitrary contract.

| Parameter name | Annotation                                             |
| -------------- | ------------------------------------------------------ |
| \_contract     | The contract's address to call.                        |
| \_data         | ABI-encoded contract call to call `_contract` address. |
| \_value        | Value (native token) to transfer with the transaction. |

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

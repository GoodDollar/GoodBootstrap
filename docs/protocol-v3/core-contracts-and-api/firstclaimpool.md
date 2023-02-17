---
description: >-
  Helper contract for UBIScheme. Manually funded by the Foundation to give 1G$
  for "inactive" users when they claim.
---

# FirstClaimPool

Since a new user (inactive) becomes active and eligible to claim UBI only in the next UBI epoch. So new users will not go empty-handed on their first claim we give out a 1G$.

### start

Start function. Adds this contract to identity as a feeless scheme. Can only be called if scheme is registered.

```
function start() public;
```

### setUBIScheme

Sets the whitelisted ubi scheme.

| Parameter name | Annotation                            |
| -------------- | ------------------------------------- |
| \_ubi          | The new UBI scheme to be whitelisted. |

Can be executed only by the Avatar.

```
function setUBIScheme(address _ubi) public;
```

### setClaimAmount

Sets the claim amount.

| Parameter name | Annotation            |
| -------------- | --------------------- |
| \_claimAmount  | The new claim amount. |

Can be executed only by the Avatar.

```
function setClaimAmount(uint256 _claimAmount) public;
```

### awardUser

Transfers claim amount to the given account address. Only the whitelisted UBI scheme can call this method.

| Parameter name | Annotation                                   |
| -------------- | -------------------------------------------- |
| \_account      | The address which recieves the claim amount. |

Returns: the amount that was transferred to the given `_account`.

```
function awardUser(address _account) public returns (uint256);
```

### end

Making the contract inactive after it has transferred funds to `_avatar`. Only the Avatar can destroy the contract.

```
function end() public;
```

---
description: >-
  The contract is to provide functionality of topping the users with Fuse to pay
  transaction fees.
---

# FuseFaucet

### Events

#### WalletTopped

Emitted when user is topped by G$.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>user</td><td>The address of the <code>user</code> who is being top.</td></tr><tr><td>amount</td><td>The amount of Fuse sent to the <code>user</code>.</td></tr></tbody></table>

```
event WalletTopped(address indexed user, uint256 amount);
```

### canTop

The function allows to check if the user address can be topped with Fuse.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The user who is being checked if he could be topped.</td></tr></tbody></table>

Returns: `true` if user could be topped, `false` otherwise.

```
function canTop(address _user) public view returns (bool);
```

### topWallet

The function is utilized to top given address with amount of Fuse given in constructor. The amount of times specified in constructor per day.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The address to transfer to.</td></tr></tbody></table>

Can only be called by admin.

```
function canTop(address _user) public view returns (bool);
```

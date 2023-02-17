---
description: >-
  The contract is to provide functionality of topping the users with Fuse to pay
  transaction fees.
---

# FuseFaucet

### Events

#### WalletTopped

Emitted when user is topped by G$.

| Parameter name | Annotation                                  |
| -------------- | ------------------------------------------- |
| user           | The address of the `user` who is being top. |
| amount         | The amount of Fuse sent to the `user`.      |

```
event WalletTopped(address indexed user, uint256 amount);
```

### canTop

The function allows to check if the user address can be topped with Fuse.

| Parameter name | Annotation                                           |
| -------------- | ---------------------------------------------------- |
| \_user         | The user who is being checked if he could be topped. |

Returns: `true` if user could be topped, `false` otherwise.

```
function canTop(address _user) public view returns (bool);
```

### topWallet

The function is utilized to top given address with amount of Fuse given in constructor. The amount of times specified in constructor per day.

| Parameter name | Annotation                  |
| -------------- | --------------------------- |
| \_user         | The address to transfer to. |

Can only be called by admin.

```
function canTop(address _user) public view returns (bool);
```

---
description: >-
  The contract that handles invites with pre allocated bounty pool with invitee
  bonus.
---

# Invites

### Events

#### InviteeJoined

Emitted when user is joined.

| Parameter name | Annotation                                   |
| -------------- | -------------------------------------------- |
| inviter        | The address of the user who invited.         |
| invitee        | he address of the user who is being invited. |

```
event InviteeJoined(address indexed inviter, address indexed invitee);
```

#### InviterBounty

Emitted when inviter bounty is paid.

| Parameter name | Annotation                                    |
| -------------- | --------------------------------------------- |
| inviter        | The address of the user who invited.          |
| invitee        | The address of the user who is being invited. |
| bountyPaid     | The amount of bounty.                         |
| inviterLevel   | The inviter level.                            |
| earnedLevel    | The level which the inviter is earned.        |

```
event InviterBounty(
    address indexed inviter,
    address indexed invitee,
    uint256 bountyPaid,
    uint256 inviterLevel,
    bool earnedLevel
);
```

### join

The function is to be called by the user to join.

| Parameter name | Annotation                    |
| -------------- | ----------------------------- |
| \_myCode       | The users invitation code.    |
| \_inviterCode  | The inviters invitation code. |

```
function join(bytes32 _myCode, bytes32 _inviterCode) public;
```

### canCollectBountyFor

The function is to clarify for the user who invited someone if he can claim bounty for the user who was being invited.

| Parameter name | Annotation                      |
| -------------- | ------------------------------- |
| \_invitee      | The user who was being invited. |

```
function canCollectBountyFor(address _invitee) public view returns (bool);
```

### getInvitees

The function is to be called to get the list of the invitees of the `_inviter`.

| Parameter name | Annotation           |
| -------------- | -------------------- |
| \_inviter      | The inviter address. |

Returns: list of the invitees of the particular inviter.

```
function getInvitees(address _inviter) public view returns (address[] memory);
```

### getPendingInvitees

The function is to be called to get the list of the pending invitees of the `_inviter`.

| Parameter name | Annotation           |
| -------------- | -------------------- |
| \_inviter      | The inviter address. |

Returns: list of the pending invitees of the particular inviter.

```
function getPendingInvitees(address _inviter) public view returns (address[] memory);
```

### getPendingBounties

The function is to be called to get the list of the pending bounties of the `_inviter`.

| Parameter name | Annotation           |
| -------------- | -------------------- |
| \_inviter      | The inviter address. |

Returns: list of the pending bounties of the particular inviter.

```
function getPendingBounties(address _inviter) public view returns (uint256);
```

### bountyFor

The function is to be called to pay bounty for the inviter of `_invitee`.

| Parameter name | Annotation           |
| -------------- | -------------------- |
| \_invitee      | The invitee address. |

```
function bountyFor(address _invitee) public;
```

### collectBounties

The function collects bounties for invitees by `msg.sender` that are now whitelisted.

```
function collectBounties() public;
```

### bountyFor

The function is to be called to pay bounty for the inviter of `_invitee`.

| Parameter name | Annotation           |
| -------------- | -------------------- |
| \_invitee      | The invitee address. |

```
function bountyFor(address _invitee) public;
```

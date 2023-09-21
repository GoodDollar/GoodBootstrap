---
description: >-
  The contract that handles invites with pre allocated bounty pool with invitee
  bonus.
---

# Invites

### Events

#### InviteeJoined

Emitted when user is joined.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>inviter</td><td>The address of the user who invited.</td></tr><tr><td>invitee</td><td>he address of the user who is being invited.</td></tr></tbody></table>

```
event InviteeJoined(address indexed inviter, address indexed invitee);
```

#### InviterBounty

Emitted when inviter bounty is paid.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>inviter</td><td>The address of the user who invited.</td></tr><tr><td>invitee</td><td>The address of the user who is being invited.</td></tr><tr><td>bountyPaid</td><td>The amount of bounty.</td></tr><tr><td>inviterLevel</td><td>The inviter level.</td></tr><tr><td>earnedLevel</td><td>The level which the inviter is earned.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_myCode</td><td>The users invitation code.</td></tr><tr><td>_inviterCode</td><td>The inviters invitation code.</td></tr></tbody></table>

```
function join(bytes32 _myCode, bytes32 _inviterCode) public;
```

### canCollectBountyFor

The function is to clarify for the user who invited someone if he can claim bounty for the user who was being invited.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_invitee</td><td>The user who was being invited.</td></tr></tbody></table>

```
function canCollectBountyFor(address _invitee) public view returns (bool);
```

### getInvitees

The function is to be called to get the list of the invitees of the `_inviter`.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_inviter</td><td>The inviter address.</td></tr></tbody></table>

Returns: list of the invitees of the particular inviter.

```
function getInvitees(address _inviter) public view returns (address[] memory);
```

### getPendingInvitees

The function is to be called to get the list of the pending invitees of the `_inviter`.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_inviter</td><td>The inviter address.</td></tr></tbody></table>

Returns: list of the pending invitees of the particular inviter.

```
function getPendingInvitees(address _inviter) public view returns (address[] memory);
```

### getPendingBounties

The function is to be called to get the list of the pending bounties of the `_inviter`.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_inviter</td><td>The inviter address.</td></tr></tbody></table>

Returns: list of the pending bounties of the particular inviter.

```
function getPendingBounties(address _inviter) public view returns (uint256);
```

### bountyFor

The function is to be called to pay bounty for the inviter of `_invitee`.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_invitee</td><td>The invitee address.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_invitee</td><td>The invitee address.</td></tr></tbody></table>

```
function bountyFor(address _invitee) public;
```

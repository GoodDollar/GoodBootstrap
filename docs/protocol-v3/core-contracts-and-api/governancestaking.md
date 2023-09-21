---
description: >-
  This is the staking contract that allows citizens to stake G$ to get GOOD
  rewards.
---

# GovernanceStaking

### Events

#### ReputationEarned

Emitted when `staker` earns an `amount` of GOOD tokens.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>staker</td><td>The staker address who earned reputation.</td></tr><tr><td>amount</td><td>The amount of reputation.</td></tr></tbody></table>

```
event ReputationEarned(address indexed staker, uint256 amount);
```

#### Staked

Emitted when `staker` stakes an `amount` of GoodDollars.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>staker</td><td>The staker address who earned reputation.</td></tr><tr><td>amount</td><td>The amount of stake.</td></tr></tbody></table>

```
event Staked(address indexed staker, uint256 amount);
```

#### StakeWithdraw

Emitted when `staker` withdraws an `amount` of staked GoodDollars.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>staker</td><td>The staker address who earned reputation.</td></tr><tr><td>amount</td><td>The amount of stake.</td></tr></tbody></table>

```
event StakeWithdraw(address indexed staker, uint256 amount);
```

### stake

The function allows a staker to deposit Tokens. Notice that `approve` is needed to be executed before the execution of this method.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_amount</td><td>The amount of G$ to stake.</td></tr></tbody></table>

Can be executed only when the contract is not paused.

```
function stake(uint256 _amount) external;
```

### withdrawStake

The function withdraws the senders staked G$.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_amount</td><td>The amount of G$ to withdraw.</td></tr></tbody></table>

Can be executed only when the contract is not paused.

```
function withdrawStake(uint256 _amount) external;
```

### withdrawRewards

The function allows staker to withdraw their rewards without withdraw their stake.

Returns: amount of rewards that were sent to the `msg.sender`.

```
function withdrawRewards() public returns (uint256);
```

### getUserPendingReward

The function allows to acquire the number of G$ rewards for a specific `_user`.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>User to check the pending rewards.</td></tr></tbody></table>

Returns: an amount of G$ rewards for the user.

```
function getUserPendingReward(address _user) public view returns (uint256);
```

---
description: >-
  This is the staking contract that allows citizens to stake G$ to get GOOD
  rewards.
---

# GovernanceStaking

### Events

#### ReputationEarned

Emitted when `staker` earns an `amount` of GOOD tokens.

| Parameter name | Annotation                                |
| -------------- | ----------------------------------------- |
| staker         | The staker address who earned reputation. |
| amount         | The amount of reputation.                 |

```
event ReputationEarned(address indexed staker, uint256 amount);
```

#### Staked

Emitted when `staker` stakes an `amount` of GoodDollars.

| Parameter name | Annotation                                |
| -------------- | ----------------------------------------- |
| staker         | The staker address who earned reputation. |
| amount         | The amount of stake.                      |

```
event Staked(address indexed staker, uint256 amount);
```

#### StakeWithdraw

Emitted when `staker` withdraws an `amount` of staked GoodDollars.

| Parameter name | Annotation                                |
| -------------- | ----------------------------------------- |
| staker         | The staker address who earned reputation. |
| amount         | The amount of stake.                      |

```
event StakeWithdraw(address indexed staker, uint256 amount);
```

### stake

The function allows a staker to deposit Tokens. Notice that `approve` is needed to be executed before the execution of this method.

| Parameter name | Annotation                 |
| -------------- | -------------------------- |
| \_amount       | The amount of G$ to stake. |

Can be executed only when the contract is not paused.

```
function stake(uint256 _amount) external;
```

### withdrawStake

The function withdraws the senders staked G$.

| Parameter name | Annotation                    |
| -------------- | ----------------------------- |
| \_amount       | The amount of G$ to withdraw. |

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

| Parameter name | Annotation                         |
| -------------- | ---------------------------------- |
| \_user         | User to check the pending rewards. |

Returns: an amount of G$ rewards for the user.

```
function getUserPendingReward(address _user) public view returns (uint256);
```

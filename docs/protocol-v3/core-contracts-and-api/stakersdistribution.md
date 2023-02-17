---
description: Staking contracts will update this contract with staker token stake amount.
---

# StakersDistribution

This contract will be able to mint GDAO. 2M GDAO that will be allocated between staking contracts each month pro-rate based on $ value staked. Each staker will receive his share pro rata per staking contract he participates in.

### Events

#### ReputationEarned

Emitted when the staker claims the reputation.

| Parameter name   | Annotation                                              |
| ---------------- | ------------------------------------------------------- |
| staker           | The stakers address.                                    |
| stakingContracts | The contracts for which the `staker` claims reputation. |
| reputation       | Reputation token amount.                                |

```
event ReputationEarned(
    address staker,
    address[] stakingContracts,
    uint256 reputation
);
```

### getChainBlocksPerMonth

The function returns amount of blocks in month.

```
function getChainBlocksPerMonth() public pure override returns (uint256);
```

### setMonthlyReputationDistribution

The function updates the monthly reputation distribution.

| Parameter name                   | Annotation              |
| -------------------------------- | ----------------------- |
| newMonthlyReputationDistribution | The name of an address. |

Can only be called by the Avatar.

```
function setMonthlyReputationDistribution(uint256 newMonthlyReputationDistribution) external;
```

### userStaked

The staking contract can call this function to increase user current contribution.

| Parameter name | Annotation                  |
| -------------- | --------------------------- |
| \_staker       | The user address to update. |
| \_value        | The value to increase by.   |

```
function userStaked(address _staker, uint256 _value) external;
```

### userWithdraw

The staking contract can call this to decrease user current contribution.

| Parameter name | Annotation                  |
| -------------- | --------------------------- |
| \_staker       | The user address to update. |
| \_value        | The value to decrease by.   |

```
function userWithdraw(address _staker, uint256 _value) external;
```

### claimReputation

The function mints reputation to user according to his share in the different staking contracts.

| Parameter name     | Annotation                                     |
| ------------------ | ---------------------------------------------- |
| \_staker           | The user  address to distribute reputation to. |
| \_stakingContracts | The user to distribute reputation to.          |

```
function claimReputation(address _staker, address[] calldata _stakingContracts) external;
```

### getUserPendingRewards

The function gets user reputation rewards accrued in GoodStaking contracts.

| Parameter name | Annotation                                  |
| -------------- | ------------------------------------------- |
| \_contracts    | The list of contracts to check for rewards. |
| \_user         | The user to check rewards for.              |

Returns: reputation rewards pending amount for user.

```
function getUserPendingRewards(address[] memory _contracts, address _user) public view returns (uint256);
```

### getUserMintedAndPending

The staking contract can call this to decrease user current contribution.

| Parameter name | Annotation                                               |
| -------------- | -------------------------------------------------------- |
| \_contracts    | The staking contracts to sum `_user` minted and pending. |
| \_user         | The account to get rewards status for.                   |

Returns: a tuple of two items: (minted, pending) in GDAO tokens in wei.

```
function getUserMintedAndPending(address[] memory _contracts, address _user) public view returns (uint256, uint256);
```

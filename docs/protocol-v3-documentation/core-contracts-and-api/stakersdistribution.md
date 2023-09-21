---
description: Staking contracts will update this contract with staker token stake amount.
---

# StakersDistribution

This contract will be able to mint GDAO. 2M GDAO that will be allocated between staking contracts each month pro-rate based on $ value staked. Each staker will receive his share pro rata per staking contract he participates in.

### Events

#### ReputationEarned

Emitted when the staker claims the reputation.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>staker</td><td>The stakers address.</td></tr><tr><td>stakingContracts</td><td>The contracts for which the <code>staker</code> claims reputation.</td></tr><tr><td>reputation</td><td>Reputation token amount.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>newMonthlyReputationDistribution</td><td>The name of an address.</td></tr></tbody></table>

Can only be called by the Avatar.

```
function setMonthlyReputationDistribution(uint256 newMonthlyReputationDistribution) external;
```

### userStaked

The staking contract can call this function to increase user current contribution.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_staker</td><td>The user address to update.</td></tr><tr><td>_value</td><td>The value to increase by.</td></tr></tbody></table>

```
function userStaked(address _staker, uint256 _value) external;
```

### userWithdraw

The staking contract can call this to decrease user current contribution.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_staker</td><td>The user address to update.</td></tr><tr><td>_value</td><td>The value to decrease by.</td></tr></tbody></table>

```
function userWithdraw(address _staker, uint256 _value) external;
```

### claimReputation

The function mints reputation to user according to his share in the different staking contracts.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_staker</td><td>The user  address to distribute reputation to.</td></tr><tr><td>_stakingContracts</td><td>The user to distribute reputation to.</td></tr></tbody></table>

```
function claimReputation(address _staker, address[] calldata _stakingContracts) external;
```

### getUserPendingRewards

The function gets user reputation rewards accrued in GoodStaking contracts.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_contracts</td><td>The list of contracts to check for rewards.</td></tr><tr><td>_user</td><td>The user to check rewards for.</td></tr></tbody></table>

Returns: reputation rewards pending amount for user.

```
function getUserPendingRewards(address[] memory _contracts, address _user) public view returns (uint256);
```

### getUserMintedAndPending

The staking contract can call this to decrease user current contribution.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_contracts</td><td>The staking contracts to sum <code>_user</code> minted and pending.</td></tr><tr><td>_user</td><td>The account to get rewards status for.</td></tr></tbody></table>

Returns: a tuple of two items: (minted, pending) in GDAO tokens in wei.

```
function getUserMintedAndPending(address[] memory _contracts, address _user) public view returns (uint256, uint256);
```

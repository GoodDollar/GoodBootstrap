---
description: >-
  Has permissions to collect interest from the staking contracts and permissions
  to tell GoodMarketMaker to mint. Anyone can trigger the collection and minting
  process.
---

# GoodFundManager

### Events

#### StakingRewardSet

Emitted when admin sets the reward for particular staking contract.

<table><thead><tr><th width="281.57142857142856">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_rewardsPerBlock</td><td>The amount of rewards per block that should be distributed.</td></tr><tr><td>_stakingAddress</td><td>An address of the staking contract.</td></tr><tr><td>_blockStart</td><td>The number of block from which the distribution starts.</td></tr><tr><td>_blockEnd</td><td>The number of block from which the distribution ends.</td></tr><tr><td>_isBlackListed</td><td>Answers the question: is the staking contract allowed to mint the rewards.</td></tr></tbody></table>

```
event StakingRewardSet(
    uint32 _rewardsPerBlock,
    address _stakingAddress,
    uint32 _blockStart,
    uint32 _blockEnd,
    bool _isBlackListed
);
```

#### GasCostSet

Emitted when admin sets the gas cost for G$ minting.

<table><thead><tr><th width="281.57142857142856">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_newGasCost</td><td>The amount of gas it costs for minting G$ reward.</td></tr></tbody></table>

```
event GasCostSet(uint256 newGasCost);
```

#### CollectInterestTimeThresholdSet

Emitted when admin sets the number that is used in a calculation of time after `collectInterest` method call.

<table><thead><tr><th width="281.57142857142856">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>newCollectInterestTimeThreshold</td><td>This number is used in a calculation that should determine how much time should pass after <code>collectInterest</code> method called.</td></tr></tbody></table>

```
event CollectInterestTimeThresholdSet(uint256 newCollectInterestTimeThreshold);
```

#### InterestMultiplierSet

Emitted when admin sets the multiplier.

<table><thead><tr><th width="281.57142857142856">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>newInterestMultiplier</td><td>This amount is used in determination of how much times larger should be collected interest than spent gas when <code>collectInterestTimeThreshold</code> did not pass.</td></tr></tbody></table>

```
event InterestMultiplierSet(uint8 newInterestMultiplier);
```

#### GasCostSet

Emitted when admin sets the gas cost for G$ minting.

<table><thead><tr><th width="281.57142857142856">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>newGasCostExceptInterestCollect</td><td>The new gas cost for required transactions after collecting interest in <code>collectInterest</code> function. The aim of this is to know if caller has enough gas left to keep collecting interest.</td></tr></tbody></table>

```
event GasCostExceptInterestCollectSet(uint256 newGasCostExceptInterestCollect);
```

### buy

Converts cDai tokens to GD tokens and updates the bonding curve params. The `buy` occurs only if the G$ return is above the given minimum. It is possible to buy only with cDAI and when the contract is set to active. MUST call to cDAI `approve` prior this action to allow this contract to accomplish the conversion.

| Parameter name  | Annotation                                                       |
| --------------- | ---------------------------------------------------------------- |
| \_tokenAmount   | The amount of cDAI tokens that should be converted to G$ tokens. |
| \_minReturn     | The minimum allowed return in G$ tokens.                         |
| \_targetAddress | Address of G$ and GOOD recipient if different than `msg.sender`. |

Returns: How much G$ tokens were transferred.

```
function buy(
    uint256 _tokenAmount,
    uint256 _minReturn,
    address _targetAddress
) external returns (uint256);
```

### collectInterest

Collects UBI interest in iToken from a given staking contract and transfers that interest to the reserve contract. Then transfers the given G$ which received from the reserve contract back to the staking contract and to the bridge, which locks the funds and then the G$ tokens are been minted to the given address on the sidechain.

| Parameter name          | Annotation                                                                                                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_stakingContracts      | An array of staking contract addresses from which contracts to collect interest.                                                                                |
| \_forceAndWaiverRewards | The boolean flag, that if it is set to true, it'll collect interest even if threshold is not passed, but won't reward caller with gas refund and reward itself. |

```
function collectInterest(
	address[] calldata _stakingContracts,
	bool _forceAndWaiverRewards
) external;
```

### calcSortedContracts

The function gets interest informations of staking contracts in the sorted array. By highest interest to lowest interest amount.

Returns: An array of struct instances. The struct explained below.

| Field name                  | Annotation                                                                                  | Field type |
| --------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| contractAddress             | Staking contract address which interest will be collected.                                  | address    |
| interestBalance             | Interest amount that staking contract has.                                                  | uint256    |
| collectedInterestSoFar      | Collected interest amount so far including the contract to which the stuct instance belong. | uint256    |
| gasCostSoFar                | Spent gas amount so far including this contract.                                            | uin256     |
| maxGasAmountSoFar           | Max gas amount that can spend to collect this interest according to interest amount.        | uin256     |
| maxGasLargerOrEqualRequired | Bool that indicates if max gas amount larger or equal to actual gas needed.                 | bool       |

```
function calcSortedContracts() public view returns (InterestInfo[] memory);
```

### mintReward

This function mint to users reward tokens which they earned by staking contract.

| Parameter name | Annotation                                  |
| -------------- | ------------------------------------------- |
| \_token        | Reserve token (currently can be just cDAI). |
| \_user         | User to get rewards.                        |

```
function mintReward(address _token, address _user) public;
```

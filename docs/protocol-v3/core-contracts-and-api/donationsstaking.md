---
description: >-
  Any ETH/DAI sent to this contract address is donated to the GoodDollar DAO and
  will generate interest to fund UBI.
---

# DonationsStaking

The funds are periodically staked in the staking contract by calling the `stakeDonations`method.

### Events

#### DonationStaked

Emitted when donation is staked.

| Parameter name | Annotation                                          |
| -------------- | --------------------------------------------------- |
| caller         | The user who staked.                                |
| stakedDAI      | The balance of the contract in DAI that was staked. |
| ethDonated     | Amount of the donated native token.                 |
| daiDonated     | Amount of the donated DAI.                          |

```
event DonationStaked(
    address caller,
    uint256 stakedDAI,
    uint256 ethDonated,
    uint256 daiDonated
);
```

The funds are periodically staked in the GoodStaking contract by calling the `stakeDonations`method.

### stakeDonations

Stake all available funds on the contract. It take balance in native token and buy DAI from Uniswap then stake outstanding DAI balance.

| Parameter name | Annotation                                                                        |
| -------------- | --------------------------------------------------------------------------------- |
| \_minDAIAmount | Enforce expected return from Uniswap when converting native token balance to DAI. |

```
function stakeDonations(uint256 _minDAIAmount) public payable;
```

### totalStaked

Total DAI value staked. Returns: DAI value staked.

```
function totalStaked() public view returns (uint256);
```

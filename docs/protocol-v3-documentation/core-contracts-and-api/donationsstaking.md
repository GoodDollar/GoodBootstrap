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

<table><thead><tr><th width="271.38606540841545">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>caller</td><td>The user who staked.</td></tr><tr><td>stakedDAI</td><td>The balance of the contract in DAI that was staked.</td></tr><tr><td>ethDonated</td><td>Amount of the donated native token.</td></tr><tr><td>daiDonated</td><td>Amount of the donated DAI.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_minDAIAmount</td><td>Enforce expected return from Uniswap when converting native token balance to DAI.</td></tr></tbody></table>

```
function stakeDonations(uint256 _minDAIAmount) public payable;
```

### totalStaked

Total DAI value staked. Returns: DAI value staked.

```
function totalStaked() public view returns (uint256);
```

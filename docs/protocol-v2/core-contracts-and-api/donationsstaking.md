---
description: >-
  Any ETH/DAI sent to this contract address is donated to the GoodDollar DAO and
  will generate interest to fund UBI.
---

# DonationsStaking

The funds are periodically staked in the GoodStaking contract by calling the `stakeDonations`method.

```
/**
 * @dev stake available funds. It
 * takes balance in native token of the blockchain and buy stakingToken from uniswap then stake outstanding StakingToken balance.
 * anyone can call this.
 */
function stakeDonations() public payable isActive;

/**
 * @dev total Staking Token value staked
 * @return Staking Token value staked
 */
function totalStaked() public view returns (uint256);
```

---
description: >-
  Has permissions to collect interest from the staking contracts and permissions
  to tell GoodMarketMaker to mint. Anyone can trigger the collection and minting
  process.
---

# GoodFundManager



```
/**
 * @dev Collects UBI interest in iToken from a given staking contract and transfers
 * that interest to the reserve contract. Then transfers the given gd which
 * received from the reserve contract back to the staking contract and to the
 * bridge, which locks the funds and then the GD tokens are been minted to the
 * given address on the sidechain
 * @param _stakingContracts from which contracts to collect interest
 * @param _forceAndWaiverRewards if set to true, it will collect interest even if not passed thershold, but will not reward caller with gas refund + reward
 */
function collectInterest(
	address[] calldata _stakingContracts,
	bool _forceAndWaiverRewards
) external;
```

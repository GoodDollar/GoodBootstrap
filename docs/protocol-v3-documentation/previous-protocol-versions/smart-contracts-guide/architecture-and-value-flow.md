---
description: >-
  This page provides an overview of the GoodDollar smart contracts architecture
  and value flow within the system.
---

# Architecture & Value Flow

## Smart Contract Architecture Diagram

![](<../../../.gitbook/assets/GD\_v1\_arch (1).jpg>)

## Money Flow in the GoodDollar Ecosystem

1. Supporter “stakes” crypto-asset to GoodStaking contract
   * Currently only accepting stakes in DAI
2. GoodStaking deposits crypto-asset to permissionless protocol
   * Currently integrated only with Compound
3. Permissionless protocol issues a “staking token”, cDAI
4. GoodStaking issues a non-transferable record to the Supporter’s wallet
   * Supporter can withdraw “stake” at any time
5. GoodStaking issues a non-transferable record to the Supporter’s wallet
   * Supporter can withdraw “stake” at any time
6. GoodDAO contract sends a daily request to GoodStaking to collect earned interest
7. GoodStaking sends interest to GoodReserve
8. GoodDAO triggers the GoodReserve to mint G$ and send newly minted G$ to the GoodDAO. G$ minted are used for interest yield-payouts (currently inactive) and pool of daily basic income
   * Interest pay-outs are sent back to GoodStaking (**currently INACTIVE**)
9. GoodDAO sends G$ for pool of daily basic income to the UBI Scheme Smart Contract, via the Fuse bridge
10. G$ in the UBI Scheme Smart Contract is divided between all “active” users/Claimers
11. Each Claimer has a 24-hour window to log-in and claim their share of the daily basic income pool

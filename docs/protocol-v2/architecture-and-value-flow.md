---
description: >-
  This page provides an overview of the GoodDollar V2 smart contracts
  architecture and value flow within the system.
---

# Architecture & Value Flow



## Smart Contract Architecture Diagram

![V2 Smart Contract Architecture](../.gitbook/assets/spaces\_-LfsEjhezedCgGFXCkms\_uploads\_n5FWfRBC6IBX8Ui2nM2p\_0.png)



* Supporter “stakes” crypto-asset to GoodStaking contract&#x20;
  * Currently only accepting stakes in DAI and USDC.
* GoodStaking deposits crypto-asset to permissionless protocol
  * Currently integrated only with Compound and Aave
* Permissionless protocol issues a “staking token”, cDAI, aUSDC&#x20;
* GoodStaking issues a non-transferable GOOD (governance) to the Supporter’s wallet
  * Supporter can withdraw “stake” at any time
* GoodStaking allows supporter to claim Rewards in G$ to the Supporter’s wallet
  * Supporter can withdraw “stake” at any time
* GoodDAO contract sends a daily request to GoodStaking to collect earned interest
* GoodStaking sends interest to GoodReserve
* GoodDAO triggers the GoodReserve to mint G$ and send newly minted G$ to the GoodDAO. G$ minted are used for interest yield-payouts (currently inactive) and pool of daily basic income&#x20;
  * Interest pay-outs are sent back to GoodStaking (**currently INACTIVE**)
* GoodDAO sends G$ for pool of daily basic income to the UBI Scheme Smart Contract, via the Fuse bridge
* G$ in the UBI Scheme Smart Contract is divided between all “active” users/Claimers
* Each Claimer has a 24-hour window to log-in and claim their share of the daily basic income pool

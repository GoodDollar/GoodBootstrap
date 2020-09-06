---
description: An introduction to the key components and users in the GoodDollar protocol.
---

# Smart Contracts

## Key Components

### Supporters

Users who are "supporters" of the GoodDollar system and "stake" their crypto to GoodDollar. Supporters stake their crypto holdings to the GoodStaking contract, and accept interest payouts in G$ instead of the crypto-asset used for staking.

### Claimers

Users of the GoodDollar wallet who receive daily basic income in GoodDollar coins \(G$\) via "claiming" G$ daily in the GoodDollar wallet.

### GoodDollar Token  \(G$\)

A digital currency that complies with the ERC-20 standard and initially built on the Ethereum public blockchain. G$ is a reserve-based token - cDAI is the first reserve currency.  

### Permissionless Third Party Protocol

An existing algorithmic autonomous interest-bearing protocol developed by third parties where Stakers can deposit cryptocurrencies and earn interest.

### GoodDollar Reserve \(GoodReserve\)

A smart contract that is the monetary reserve of G$; that holds other crypto-assets \(not G$\) in it.  Users of GoodDollar can buy or sell GoodDollar by depositing or withdrawing supported crypto-assets \(initially cDAI\) directly to or from the reserve \(based on Bancor Formula, see above\).

### GoodStaking Smart Contract

A smart contract that:

* \(a\) receives cryptocurrencies from the Supporters / Stakers and sends it to the permissionless third-party protocol
* \(b\) issues the GoodStaking record to the Stakers and accepts the transactions from the stakers and sends the protocol the the principle deposited; 
* \(c\) receives the interest in-return directly from the permissionless third-party protocols and automatically transfer it to the GoodDollar GoodReserve contract

**For now - the interest can only be donated to the GoodReserve; supporters are not able to receive interest payouts in G$ at this point in time \(coming soon!\)** 

### UBI Scheme

A smart contract that collects the total minted GoodDollars that are set aside for distribution as basic income on a given day, and distributes G$ equally amongst all claimers.

### Bancor™ Formula

An automatic pricing formula which balances supply and demand for the Smart Token while holding a constant ratio between a Smart Token’s total value \(market cap\) and its connector token balances \(see more [here](https://support.bancor.network/hc/en-us/articles/360000503372-How-does-automatic-pricing-and-market-making-work-)\).

### GoodDAO

Decentralized and autonomous entity, a smart contract that will eventually be 100% owned  by the community of GoodDollar users.

* Controls the GoodReserve Smart Contract


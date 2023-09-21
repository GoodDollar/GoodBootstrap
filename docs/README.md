---
description: >-
  Here you will find all the documentation for the GoodDollar protocol Smart
  Contracts and Dapp interfaces.
---

# Welcome to GoodDocs!

Welcome! [GoodDollar](https://gooddollar.org/) is a decentralized universal basic income initiative. Here you can find all the open-source documentation for the smart contracts and interfaces!

{% hint style="info" %}
Read project's [whitepaper](http://whitepaper.gooddollar.org) for deep dive into the philosophy and decision's rationals
{% endhint %}

Let's get started:

## What is Gooddollar?

[GoodDollar](http://www.gooddollar.org/) is a people-powered framework to generate, finance, and distribute global basic income via the GoodDollar token (“G$ coin”). Its goal is to provide a baseline standard of living and reduce wealth inequality through the creation of a universal basic income (UBI).&#x20;

GoodDollar leverages new protocols and smart contracts to deliver a “trickle-up” value structure, which places money in the hands of those who need it most. This is the reverse of the conventional trickle-down approach to capital, credit, and interest-bearing money.

A digital asset that operates within the emerging ecosystem of decentralized and open finance, G$ coin is backed by a monetary reserve of cryptocurrencies and thus has tangible value. G$ coins are liquid and convertible to other cryptocurrencies, and will be available to buy and sell directly via the GoodDollar GoodReserve smart contract.

The value in the GoodDollar reserve comes from the interest that is generated from Supporters who stake cryptocurrencies in decentralized third-party protocols. Through the amassed reserve interest, G$ coins are minted. They are used to pay Supporters market-rate interest payments, while a daily amount of G$ coins is set aside to be distributed as basic income.

## Four main components to the Gooddollar project:

1. [Protocol](./#gooddollar-protocol)
2. [Protocol's Dapp](./#gooddollar-dapp-v2-not-yet-deployed)
3. Easy to use [Wallet](./#gooddollar-wallet) with built-in community features
4. Eco-system [Dashboard](http://dashboard.gooddollar.org)

### GoodDollar Protocol

GoodDollar operates on [Ethereum](https://ethereum.org/en/) using smart contracts that are written in [Solidity](https://solidity.readthedocs.io/en/v0.7.0/) with G$ designated as an ERC20 token.  As a means to an end, transactions using G$ are run on an Ethereum sidechain, [Fuse](https://fuse.io/), which enables low-cost, high-volume transactions. As we anticipate that the scalability and efficiency of blockchain infrastructure will continuously improve.

* GoodDollar offers a new standard for creating and distributing basic income via G$ token.
* [GoodDollar V3](protocol-v3/) is a smart contract upgrade that enables core functions for the GoodDollar protocol to scale.
* [GoodDollar V2](protocol-v2/) is a smart contract upgrade to expand functionality and open-source launch of a [protocol user interface](gooddapp-developer-guides/deploy-your-own-gooddapp-ui.md), deployed by community members.
* [GoodDollar V1](smart-contracts-guide/) was initially deployed in August 2020.&#x20;
* Some Guides have been documented by the community. Feel free to contribute.
* Everything is open-sourced and free to use on [Github](https://github.com/GoodDollar/GoodProtocol).
* [V2 Staking Good Rewards Scheme](protocol-v2/systems-elements/#4.-staking-rewards-annual-percentage-returns)

### GoodDollar Dapp

Accessibility and ease of use are critical to market adoption. By widely distributing G$ through an accessible process and interface, we increase the odds that the basic income economy is widely adopted and strengthen the case for G$ to become a preferred complementary currency among holders.

* Serves as a visual interface to the protocol core smart contracts on Ethereum mainnet.
* The Dapp enables to stake, buy/sell G$ directly to reserve, and governance functionality.
* The Dapp is 100% open-source, deployed and managed by community stakeholders. You can even deploy your own UI. Here's the [repo](https://github.com/GoodDollar/GoodProtocolUI)
* Below are community deployed UI, use at your own risk!
  * [goodswap.xyz](http://goodswap.xyz)

### GoodDollar Wallet

To increase adoption and trust in the system, a simple digital wallet that can be accessed anywhere in the world with an internet connection has been built. The user experience focuses on the key action of “_claiming_” G$ coins as basic income and conducting peer-to-peer transactions.&#x20;

The wallet is a mobile-friendly web application built on React with [React Native](https://reactnative.dev/) and is open-source, as is all GoodDollar code. The wallet interacts with three main components: The GoodDollar Protocol, Identity solutions for verifying unique identity, Distributed login solutions (initially through the [Tor.us](https://tor.us/) platform).

Resources:

1. Frontend Wallet [repo](https://github.com/GoodDollar/GoodDAPP)
2. Backend Wallet [repo](https://github.com/GoodDollar/GoodServer)
3. [Wallet Development Guides](developer-guides/)

{% hint style="info" %}
If you wish to contribute please read [this](contributing.md).
{% endhint %}

Thanks for your interest!

**The GoodDollar Team <3**

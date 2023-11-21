---
description: How can you become a GoodDollar liquidity provider?
---

# Liquidity

Providing liquidity to the GoodDollar ecosystem and participating as a G$ liquidity provider is a great way to support the [GoodDollar ecosystem and the mission to let money flow to where it is needed most](https://whitepaper.gooddollar.org). [G$ token](https://docs.gooddollar.org/tokenomics) is a reserve-backed ERC20 token deployed on three different networks: Ethereum, Celo and Fuse. It is designed to maintain a level of [price](https://dashboard.gooddollar.org/) stability that is "stable enough” to encourage circulation and usage of G$ tokens for payments. It is fully liquid, providing seamless exchangeability through the GoodDollar Reserve, which effectively serves as the primary market maker on the Ethereum Network. Most importantly, new G$ are only issued as new funds are added to the GoodDollar Reserve according to a price curve modified by the Bancor formula, ensuring a transparent and predictable view into the protocol’s token supply. \
\
GoodDollar liquidity on side-chains ([Celo](liquidity.md#provide-liquidity-on-celo) and [Fuse](liquidity.md#provide-liquidity-on-fuse)) is facilitated through decentralized exchanges (DEXes), which also facilitate G$ liquidity to other tokens. This enables users to cash out into various forms, including other currencies, fiat, mobile money, or airtime as needed. Liquidity providers play a critical role in the GoodDollar ecosystem through supporting G$ liquidity on side-chains, which is where the members seek to cash-in, cash-out, or conduct all other “real money” functions.\
\
Contributing to G$ liquidity not only results in earning fees for each pool trade but also plays a vital role in fortifying the GoodDollar economy and network for hundreds of thousands of individuals worldwide. This support reaches UBI claimers, community members, and ambassadors who utilize their G$ to convert into various crypto assets and currencies, promoting the development of a more robust ecosystem.

### Liquidity on Ethereum

{% hint style="info" %}
G$ Token address on Ethereum: [0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B](https://etherscan.io/address/0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B)
{% endhint %}

The [GoodDollar Reserve](https://docs.gooddollar.org/protocol-v3-documentation/core-contracts-and-api/goodreservecdai) serves as both the liquidity pool and Automatic Market Maker (AMM) for G$, facilitating buying and selling. The GoodDollar Reserve is a smart contract overlaid on the Ethereum network that is governed by a modified version of the Bancor Formula. The formula stipulates that the price of the G$ token moves in proportion to the aggregated value in the reserve (i.e. the pool of liquidity that supports G$) and in inverse proportion to the circulating total supply. Its rate of leverage is managed according to the reserve ratio, the current Reserve Ratio is 55.39% and declining 15% per year. \
\
The GoodDollar Reserve functions as the principal market maker. For tracking the G$ price from the GoodDollar Reserve, navigate to the GoodDollar [Dashboard](https://dashboard.gooddollar.org/).

{% hint style="info" %}
**Contracts:**

[**GoodDollarReserveCDAI**](https://docs.gooddollar.org/protocol-v3-documentation/previous-protocol-versions/protocol-v2/core-contracts-and-api/goodreservecdai) The contracts acts as the GoodDollar liquidity pool and AMM (Automatic Market Maker) and enables methods to buy and sell G$s. It aslo mints G$. \
[**0xa150a825d425B36329D8294eeF8bD0fE68f8F6E0**](https://etherscan.io/address/0xa150a825d425B36329D8294eeF8bD0fE68f8F6E0)

[**GoodMarketMaker**](https://docs.gooddollar.org/protocol-v3-documentation/previous-protocol-versions/protocol-v2/core-contracts-and-api/goodmarketmaker) Helper contract for the GoodReserveCDai. It serves ad a dynamic reserve ratio market maker. [**0xDAC6A0c973Ba7cF3526dE456aFfA43AB421f659F**](https://etherscan.io/address/0xDAC6A0c973Ba7cF3526dE456aFfA43AB421f659F)
{% endhint %}

To interact with the GoodDollar Reserve contracts for buying and selling G$, check out this [guide](https://docs.gooddollar.org/user-guides/buy-and-sell-gusd).

To interact with the GoodDollar Reserve UI, visit [https://gooddapp.org/#/swap](https://gooddapp.org/#/swap) (ensure you are on the Ethereum network). When using GoodDapp on the Ethereum blockchain, you are interfacing with the core protocol contracts and accessing the primary G$ market.

<figure><img src=".gitbook/assets/Captura de Pantalla 2023-11-15 a las 18.45.15.png" alt=""><figcaption><p><a href="https://gooddapp.org/#/swap">https://gooddapp.org/#/swap </a></p></figcaption></figure>

**Note:** New liquidity pools on DExes on Ethereum can be opened permissionlessly!

### Provide liquidity on Celo

{% hint style="info" %}
G$ Token Address on Celo: [0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A](https://explorer.celo.org/mainnet/address/0x62B8B11039FcfE5aB0C56E502b1C372A3d2a9c7A)
{% endhint %}

#### DEXes and Pools

| DEX     | Pool Pair                                                                                     | Contract                                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Uniswap | [G$/cUSD](https://info.uniswap.org/#/celo/pools/0x9491d57c5687ab75726423b55ac2d87d1cda2c3f)   | [0x9491d57c5687AB75726423B55AC2d87D1cDa2c3F](https://celoscan.io/address/0x9491d57c5687ab75726423b55ac2d87d1cda2c3f)               |
| Uniswap | [USDGLO/G$](https://info.uniswap.org/#/celo/pools/0x0dbb0769b00d01d241ba4f7b2891fb5c2a975d51) | [0x0DBb0769B00d01d241BA4F7B2891fB5C2A975D51](https://celoscan.io/address/0x0dbb0769b00d01d241ba4f7b2891fb5c2a975d51)               |
| Uniswap | [Celo/G$](https://info.uniswap.org/#/celo/pools/0xcb037f27eb3952222810966e28e0ceb650c65cd9)   | [0xCB037f27eB3952222810966e28E0cEB650c65CD9](https://celoscan.io/address/0xcb037f27eb3952222810966e28e0ceb650c65cd9)               |
| Uniswap | [PACT/G$](https://info.uniswap.org/#/celo/pools/0xf6ba006abf768ab2d1b5bba2d22d9f13eb1269d4)   | [0xF6Ba006aBf768AB2d1B5bbA2D22d9F13EB1269d4](https://celoscan.io/address/0xf6ba006abf768ab2d1b5bba2d22d9f13eb1269d4)               |
| Ubeswap | [Celo/G$](https://info.ubeswap.org/pair/0x25878951ae130014e827e6f54fd3b4cca057a7e8)           | [0x25878951ae130014e827e6f54fd3b4cca057a7e8](https://explorer.celo.org/mainnet/address/0x25878951ae130014E827e6f54fd3B4CCa057a7e8) |

**Note:** New liquidity pools on DExes on Celo can be opened permissionlessly!

#### Other ways to get G$ on Celo

* Purchase G$ from the GoodDollar Reserve on Ethereum and bridge to Celo via smart contracts. Check the information and guides [here](https://docs.gooddollar.org/user-guides/bridge-gooddollars).
* Purchase G$ on Celo from any chain and supported token via [Squid](https://app.squidrouter.com/).
* Purchase G$ on Celo with your credit card (coming soon!).

### Provide Liquidity on Fuse

{% hint style="info" %}
G$ Token address on Fuse: [0x495d133B938596C9984d462F007B676bDc57eCEC](https://explorer.fuse.io/address/0x495d133B938596C9984d462F007B676bDc57eCEC/transactions)
{% endhint %}

| DEX              | Pool Pair                                                                                                                                     | Contract                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Voltatge.finance | [G$/WFuse](https://app.voltage.finance/index.html#/add/0x0be9e53fd7edac9f859882afdda116645287c629/0x495d133b938596c9984d462f007b676bdc57ecec) | [0xa02ed9fe9e3351fe2cd1f588b23973c1542dcbc](https://explorer.fuse.io/address/0xa02ed9fe9e3351fe2cd1f588b23973c1542dcbcc) |

Note: New liquidity pools on DExes on Fuse can be opened permissionlessly!

#### Other ways to get G$ on Fuse

* Purchase G$ from the GoodDollar Reserve on Ethereum and bridge via smart contracts. Check the information and guides [here](https://docs.gooddollar.org/user-guides/bridge-gooddollars).
* Purchase G$ from the GoodDollar Reserve on Ethereum and bridge via [Fuse Bridge](https://app.voltage.finance/index.html#/bridge).

{% hint style="danger" %}
**Disclaimer:** This is not financial advice. Please Do Your Own Research (DYOR) before making a decision.
{% endhint %}

---
description: >-
  How does the GoodDollar protocol and G$ tokenomics work? Learn how we utilize
  DeFi to fund wealth creation for all.
---

# Tokenomics

{% hint style="warning" %}
**Notice of Potential Information Variability**

As of December 21, 2023, the information in GoodDocs may not reflect the most current updates. The team is diligently working to review and revise the documentation to ensure accuracy. Please check back at a later date for the most up-to-date information.
{% endhint %}



The GoodDollar protocol presents a sustainable and scalable framework for the distribution of Universal Basic Income (UBI), as a means to improve financial access and empowerment. Built on blockchain technology, GoodDollar leverages the power of decentralized finance (DeFI) and token engineering to sustainably mint and distribute basic income tokens (G$) to a worldwide community of users. GoodDollar stands out as a unique project with a mission that goes beyond financial gains. Rooted in a commitment to financial inclusion and wealth redistribution, the GoodDollar token (G$) is underpinned by a set of core design principles that make it both sustainable and a practical approach to delivering a useful universal basic income.

**Sustainability: A Natural Equilibrium 🌳**

GoodDollar's foundational principle is sustainability, based on G$ as a reserve-backed token. Notably, there was no pre-mint or Token Generation Event (TGE) for GoodDollar (or allocation to founders, sponsors). Instead, new cDAI deposits into the Reserve trigger the minting of G$, which are distributed as UBI and to support the larger GoodDollar ecosystem growth. The generation of G$ is intricately tied to the flow of new deposits into the GoodReserve of the protocol. This means that as new deposits enter the ecosystem, G$ UBI is generated, maintaining a harmonious equilibrium between the supply and demand of GoodDollars.

**Stability: Striking the Right Balance 🎠**

G$ is designed to maintain a level of price stability that is "stable enough” to encourage circulation and usage of G$ tokens for payment (in contrast to pure speculation). To achieve this, it is collateralized by other currencies within the reserve, specifically cDAI. This collateralization acts as a stabilizing force, mitigating extreme price volatility, and making G$ a predictable and reliable digital asset that is appropriate for payments.

**Liquidity: Trust and Incentives ♻️**

Ensuring token liquidity is crucial for any cryptocurrency's success. GoodDollar accomplishes this by relying on the primary market of the GoodReserve. This approach instills trust in users and creates incentives for liquidity providers and market makers to facilitate secondary markets, thereby enhancing the overall liquidity of G$.

[All documentation](https://docs.gooddollar.org/) and [core protocol architecture](https://docs.gooddollar.org/protocol-v3-documentation/architecture-and-value-flow).

_**The Basics of GoodDollar Tokenomics**_

Now, let's delve into the core mechanics of GoodDollar's tokenomics:

**Augmented Bonding Curve: The Heart of G$ 💙**

The G$ token operates on an Augmented Bonding Curve, which is backed by a monetary reserve. The token's price is automatically calculated using a modified version of the BancorV1 formula. This innovative approach to token economics ensures a dynamic pricing mechanism. The formula has the properties of raising the G$ price when G$ is bought from the Reserve, and lowering it when G$ is being sold back to the reserve. Its rate of leverage is managed according to the reserve ratio, the current Reserve Ratio is 55.39%. All information regarding the token settings can be found on the dashboard ([https://dashboard.gooddollar.org](https://dashboard.gooddollar.org), token tab).

**On-Demand Issuance: Balancing Supply and Demand ⚖️**

G$ issuance is not arbitrary but rather responds to demand. New G$ are minted as new cDAI deposits flow into the GoodDollar Reserve, and they are burned when they are returned, meticulously maintaining equilibrium between the token's supply and demand dynamics.

Where do the funds that are added to the GoodDollar Reserve come from?

* The flexibility of GoodDollar extends to how it utilizes earnings and fees. Any protocol or fee generated within the ecosystem can be directed towards the GoodReserve, effectively fueling G$ issuance, including UBI.
* Corporate Social Responsibility - Yield Farming. GoodDollar encourages corporate partners to commit their crypto treasuries to fund UBI for all, through donating earned interest rather than donating principle capital outright (traditional donation-based model). To this end, GoodDollar is integrated with 3rd party protocols Compound and Aave. Supporters are able to stake and donate earned yield and interest to the protocol, permissionlessly. Currently Aave and Compound are integrated. As of September 2023, a total of $1,023,044.15 USD has been staked within the protocol. All yield generated is sourced to the Reserve to fund daily G$ minting.

Beyond G$ distributed as UBI, [GoodDollar V3 upgrade](https://docs.gooddollar.org/protocol-v3-documentation) allocated 20% of the daily G$ minted to support ecosystem growth, community initiatives, and rewards users who actively contribute to the protocol, consisting of a grants treasury to be managed by the GoodDAO.

**Liquidity at the Core ♻️**

G$ is fully liquid, offering seamless exchangeability through the GoodDollar Reserve, which effectively functions as a primary market maker. This liquidity ensures that users can effortlessly trade G$ as needed, and there is always a market maker of last resort.

GoodDollar liquidity on side-chains is supported through DEXes, which support G$ liquidity to other popular currencies, and enable users to cash-out into other currencies, fiat, mobile money or airtime as needed. Token liquidity is guaranteed through the primary market of the GoodReserve, fostering trust and incentivizing liquidity providers and market makers to actively engage in secondary markets.

**G$ UBI Distribution 🔷**

The GoodDollar protocol is multi-chain by nature: all core protocol contracts related to the creation of G$ token occur on Ethereum mainnet, and all distribution of G$ tokens as UBI to end-users happens on L2s or side-chains, which make it practical and accessible for lower-income users. Currently, G$ is distributed as UBI on two side-chains, Celo and Fuse.

GoodDollar’s UBI distribution mechanism is based upon a daily distribution of G$ tokens to all verified members. The pool of G$ universal income is divided equally among all users who log in within a 24-hour period to make a claim. This mechanism encourages the flow of G$ to those who exhibit the greatest appetite for it. The enforced 24-hour gap between claims and the periodic requirement to re-validate identity creates a natural filtering method, referred to as “Proof of Need”. This creates a natural “UBI Equilibrium”, where on a global scale, those with greater amounts of wealth are less likely to exert the time and effort required for regular G$ claims. The GoodDollar protocol also subsidizes gas costs for claiming of G$, as per the mission.

GoodWallet, a simple dapp that enables members to verify themselves, claim, send/receive, access GoodDollar offers, was developed by Good Labs to support the early adoption of GoodDollar protocol. GoodWallet is one of the top 10 most used dapps in the world, according to [DappRadar](https://dappradar.com/rankings).

Core GoodDollar features are supported through any Web3 wallet on [GoodDapp.org](https://gooddapp.org/). Web3 wallets such as Valora and others are currently working to integrate G$ features such as sign-up and claim capabilities.



<figure><img src=".gitbook/assets/spaces_-LfsEjhezedCgGFXCkms_uploads_jwBrQfJgvFtl70WHEfLd_Smart contract Architecture V3 18_01_23 (1).webp" alt=""><figcaption></figcaption></figure>

**Multi-Asset Reserve: Expanding Horizons 🎨**

The vision for the GoodDollar's reserve isn't static. It will evolve over time to include various assets, such as other stable coins, natural-resource based assets, and blue-chip cryptocurrencies, thereby diversifying the underlying assets supporting G$.

**GoodDAO & Community Governance 💪**

The GoodDollar protocol is governed by the GoodDAO, its governance protocol. Membership in the GoodDAO is determined by the possession of non-transferrable GOOD governance tokens, which allow members of the GoodDAO to suggest, debate, vote on and implement changes independently. GOOD is a non-transferable token and therefore has no market value. The aim here is to safeguard against the wealthiest in the community capturing the lion’s share of power. GOOD is distributed to all G$ token holders, and agents who support the protocol.

**GoodDollar V3 - Current Distribution**

Here is the current distribution of G$ minted for [GoodDollar V3](https://snapshot.org/#/thegooddao.eth/proposal/0xee841a6b8e8d1d6a2ec49408b2d60a1019a72c3b56a16f5bb84c1181af46f315):

* 80% of all G$ are distributed as UBI. This is currently divided between the Celo & Fuse blockchains.
* 10% Community Fund. A community treasury fund to build the resources of the GoodDAO.
* 10% G$ Savings. A yield source that can be deployed to offer G$ token holders an ability to lock and earn in G$ tokens.

This approach nurtures a robust ecosystem in line with the overarching mission of the GoodDollar protocol: to make Universal Basic Income accessible and sustainable for all. By ensuring that its tokenomics align with its mission to foster financial inclusion and wealth redistribution, GoodDollar is not just another cryptocurrency; it's a force for good in the world of decentralized finance.

More info: [https://docs.gooddollar.org/protocol-v3](https://docs.gooddollar.org/protocol-v3) [https://www.gooddollar.org/blog-posts/gooddollarv3-is-coming](https://www.gooddollar.org/blog-posts/gooddollarv3-is-coming)

[https://whitepaper.gooddollar.org](https://whitepaper.gooddollar.org)


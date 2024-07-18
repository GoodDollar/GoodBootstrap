---
description: How does the protocol works?
---

# Architecture & Value Flow

{% hint style="warning" %}
**Notice of Potential Information Variability**

As of December 21, 2023, the information in GoodDocs may not reflect the most current updates. The team is diligently working to review and revise the documentation to ensure accuracy. Please check back at a later date for the most up-to-date information.
{% endhint %}

Summary: A digital asset that operates within the emerging ecosystem of decentralized and open finance, G$ is backed by a monetary reserve of cryptocurrencies and thus has tangible value. G$ tokens are liquid and convertible to other cryptocurrencies, and are available to buy and sell directly via the GoodDollar GoodReserve smart contract.

The value in the GoodDollar reserve comes from the interest that is generated from Supporters who stake cryptocurrencies in decentralized third-party protocols. Through the amassed reserve interest, G$ tokens are minted. They are used to pay Supporters market-rate interest payments, while a daily amount of G$ tokens is set aside to be distributed as basic income.

### **GoodDollar Money Flow, in detail** <a href="#d7389pq6vqpd" id="d7389pq6vqpd"></a>

GoodDollar is a new kind of digital economy with a UBI distribution model. The protocol is able to sustainably generate a crypto token (G$) for onward distribution in two ways:

1. Through the addition of funds to the GoodDollar Reserve via interest earned on capital staked with third-party protocols, or the purchase of G$ from the GoodDollar Reserve.
2. Through reductions in the reserve ratio.

### **How the GoodDollar system works** <a href="#cbghnzkzyo0f" id="cbghnzkzyo0f"></a>

This is the money flow that underpins the generation of GoodDollar crypto UBI.

<figure><img src="../../.gitbook/assets/Smart contract Architecture V3 18_01_23 (1).png" alt=""><figcaption></figcaption></figure>

1. Supporter stakes crypto to the GoodDollar Trust.
2. The GoodDollar Trust stakes that money to a third-party DeFi protocol.
3. The third-party DeFi protocol issues a staking token (e.g. CDAI) to the GoodDollar Trust.
4. In return for staking, the supporter is entitled to be rewarded with a sum of GOOD (governance tokens). The staker can then either withdraw these rewards.
   1. The staker can withdraw his stake at any time.
5. Keeper (any player in the ecosystem who wants to do this work) activates the Fund Manager, to funnel interest back to the GoodDollar Trust:
   1. The keeper is also rewarded with G$.
6. Fund Manager:
   1. Collects interest from the different GoodStaking contracts and sends this to the GoodDollar Reserve.
   2. Converts any extra tokens generated through staking to CDAI.
   3. Swaps the interest payments into G$.
   4. Sends the G$ over the Bridge to all distribution contracts.
7. The DisCo then divides the G$ among all whitelisted wallets that have clicked “claim” on the app within the preceding 24 hours.



**Notes:**

In V3, the reserve allows for setting multiple recipients for the minted UBI.

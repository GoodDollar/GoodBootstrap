---
description: >-
  This page provides an overview of the GoodDollar V2 smart contracts
  architecture and value flow within the system.
---

# Architecture & Value Flow

### **GoodDollar Money Flow** <a href="#_d7389pq6vqpd" id="_d7389pq6vqpd"></a>

GoodDollar is a new kind of digital economy with a UBI distribution model. The protocol is able to sustainably generate a crypto token (G$) for onward distribution in two ways:

1. Through the addition of funds to the GoodDollar Reserve via interest earned on capital staked with third-party protocols, or the purchase of G$ from the GoodDollar Reserve.
2. Through reductions in the reserve ratio.

### **How the GoodDollar system works** <a href="#_cbghnzkzyo0f" id="_cbghnzkzyo0f"></a>

This is the money flow that underpins the generation of GoodDollar crypto UBI.

![](../.gitbook/assets/GD\_v2\_arch.jpg)

1. Supporter stakes crypto to the GoodDollar Trust.
2. The GoodDollar Trust stakes that money to a third-party DeFi protocol.
3. The third-party DeFi protocol issues a staking token (e.g. CDAI) to the GoodDollar Trust.
4. In return for staking, the supporter is entitled to be rewarded with a sum of G$. The staker can then either withdraw these rewards, or waive this entitlement.
   1. The staker can withdraw his stake at any time.
5. Keeper (any player in the ecosystem who wants to do this work) activates the Fund Manager, to funnel interest back to the GoodDollar Trust:
   1. The keeper is also rewarded with G$.
6. Fund Manager:
   1. Collects interest from the different GoodStaking contracts and sends this to the GoodDollar Reserve.
   2. Converts any extra tokens generated through staking to CDAI.
   3. Swaps the interest payments into G$.
   4. Sends the G$ over the Bridge to the Disco.
7. The DisCo then divides the G$ among all whitelisted wallets that have clicked “claim” on the app within the preceding 24 hours.

****

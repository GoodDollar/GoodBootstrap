---
description: An introduction to the key components and users in the GoodDollar protocol.
---

# Protocol V2

## Key Components

### **GoodDollar Token (G$)**&#x20;

An ERC-20 token native to Ethereum, with circulating supply regulated by the reserve contract (and max supply of 2.2 trillion G$), Also operates on Fuse. ****&#x20;

### **The GoodDollar Reserve**&#x20;

A pool of tokens that backs the minting of G$. Users can always convert to and from the currencies in reserve. Currently in cDAI.

### **Reserve Ratio**

The ratio between the total value of the GoodDollar Reserve and the total market capitalization of G$.

### **Expansion Rate**

The annual rate by which the reserve ratio declines, thereby increasing the G$ token supply.

### **Exit Contribution**&#x20;

The required contribution to the GoodDollar Reserve after a user sells G$ in exchange for other currencies via the reserve.

### **G$X**

An ERC-20 token given as a reward to users who buy G$ from the GoodDollar Reserve. G$X can be used to reduce a user’s exit contribution when selling G$ to the GoodDollar Reserve.

### **The GoodDollar Trust**

An immutable smart contract that wraps other DeFi contracts. This property allows GoodDollar supporters to stake capital, the interest on which is transferred to the GoodDollar Reserve to fuel UBI creation. Stakers are entitled to rewards in G$.

### **Fund Manager**

A smart contract that calculates the collection of interest from third-party protocols along with the subsequent transfer of that interest to the GoodDollar Reserve. Can be activated by a Keeper (see below) or any other user.

### **Identity Contract**

A smart contract on Fuse that holds a list of all members of the GoodDollar ecosystem who are verified as real and unique.

### **DisCo (Distribution Contract)**

A smart contract on Fuse that handles the distribution of G$ as UBI. It contains the logic of the distribution model and consults the Identity contract.

### **The Bridge**

A set of smart contracts that allows a user to transfer tokens between Etheruem to Fuse and vice versa.

### **The GoodDAO**

A set of smart contracts controlling the governance structure of the GoodDollar protocol. The community-run decentralized autonomous organization responsible for GoodDollar’s oversight.

### **GOOD token**

A non-transferable token used for voting on GoodDAO proposals.

### **Supporters**

Users who stake or lock capital to interest-bearing protocols via the GoodDollar Trust. Interest generated from these stakes is donated to the GoodDollar Reserve to fuel ongoing creation of digital UBI. Stakers are entitled to G$ rewards in return for their commitment, but they can choose to waive this entitlement and assist in the generation of G$.

### **Donors**

Stakers who donate their stakes and the interest generated via the DonationsStaking contract to support the generation of a perpetual digital income for GoodDollar members across the globe.

### **Claimers**

Verified unique individuals who have downloaded the GoodDollar Wallet app in order to claim a daily allocation of G$.

### **Active Users**

Users who have claimed once in the past 14 days.

### **Keepers**

Users who earn rewards by manually instructing smart contracts to execute tasks (e.g. instructing the Fund Manager to move interest from the GoodDollar Trust to the GoodDollar Reserve).

# V2 GoodDollar Protocol Documentation

## **The GoodDollar Ecosystem (in brief)** <a href="#_ncog31wxguh1" id="_ncog31wxguh1"></a>

* **GoodDollar Token (G$)**: An ERC-20 token native to Ethereum. Also operates on Fuse.
* **The GoodDollar Reserve**: A pool of tokens that backs the minting of G$. Users can always convert to and from the currencies in reserve. Currently in CDAI.
* **Reserve Ratio:** The ratio between the total value of the GoodDollar Reserve and the total market capitalization of G$.
* **Expansion Rate:** The annual rate by which the reserve ratio declines, thereby increasing the G$ token supply.
* **Exit Contribution:** The required contribution to the GoodDollar Reserve after a user sells G$ in exchange for other currencies via the reserve.
* **G$X:** An ERC-20 token given as a reward to users who buy G$ from the GoodDollar Reserve. G$X can be used to reduce a user’s exit contribution when selling G$ to the GoodDollar Reserve.
* **The GoodDollar Trust:** An immutable smart contract that wraps other DeFi contracts. This property allows GoodDollar supporters to stake capital, the interest on which is transferred to the GoodDollar Reserve to fuel UBI creation. Stakers are entitled to rewards in G$.
* **Fund Manager:** A smart contract that calculates the collection of interest from third-party protocols along with the subsequent transfer of that interest to the GoodDollar Reserve. Can be activated by a Keeper (see below) or any other user.
* **Identity Contract:** A smart contract on Fuse that holds a list of all members of the GoodDollar ecosystem who are verified as real and unique.
* **DisCo (Distribution Contract):** A smart contract on Fuse that handles the distribution of G$ as UBI. It contains the logic of the distribution model and consults the Identity contract.
* **The Bridge:** A set of smart contracts that allows a user to transfer tokens between Etheruem to Fuse and vice versa.
* **The GoodDAO:** A set of smart contracts controlling the governance structure of the GoodDollar protocol. The community-run decentralized autonomous organization responsible for GoodDollar’s oversight.
* **GOOD token:** A non-transferable token used for voting on GoodDAO proposals.
* **Supporters:** Users who stake or lock capital to interest-bearing protocols via the GoodDollar Trust. Interest generated from these stakes is donated to the GoodDollar Reserve to fuel ongoing creation of digital UBI. Stakers are entitled to G$ rewards in return for their commitment, but they can choose to waive this entitlement and assist in the generation of G$.
* **Donors:** Stakers who donate their stakes and the interest generated via the DonationsStaking contract to support the generation of a perpetual digital income for GoodDollar members across the globe.
* **Claimers:** Verified unique individuals who have downloaded the GoodDollar Wallet app in order to claim a daily allocation of G$.
* **Active Users:** Users who have claimed once in the past 14 days.
* **Keepers:** Users who earn rewards by manually instructing smart contracts to execute tasks (e.g. instructing the Fund Manager to move interest from the GoodDollar Trust to the GoodDollar Reserve).

## **The GoodDollar Ecosystem (in Detail)** <a href="#_ap6zeuixqr24" id="_ap6zeuixqr24"></a>

### **GoodDollar Money Flow** <a href="#_d7389pq6vqpd" id="_d7389pq6vqpd"></a>

GoodDollar is a new kind of digital economy with a UBI distribution model. The protocol is able to sustainably generate a crypto token (G$) for onward distribution in two ways:

1. Through the addition of funds to the GoodDollar Reserve via interest earned on capital staked with third-party protocols, or the purchase of G$ from the GoodDollar Reserve.
2. Through reductions in the reserve ratio.

### **How the GoodDollar system works** <a href="#_cbghnzkzyo0f" id="_cbghnzkzyo0f"></a>

This is the money flow that underpins the generation of GoodDollar crypto UBI.

![](<.gitbook/assets/0 (5)>)

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

## **Elements of the GoodDollar Ecosystem**

### **1. The GoodDollar token (G$)** <a href="#_coklhq47qt9q" id="_coklhq47qt9q"></a>

The _**GoodDollar token (G$)**_ is an ERC 20 crypto token with a max supply of 2.2 trillion. It is native to Ethereum and also operates on Fuse.

### **2. The GoodDollar Reserve** <a href="#_fatx9b4n7fez" id="_fatx9b4n7fez"></a>

The _**GoodDollar Reserve**_ is the smart contract that governs the vault holding the assets that back G$ tokens. The algorithm that guides the reserve is based on the Bancor formula, which has been altered to fit GoodDollar’s needs. There are two important characteristics unique to the GoodDollar Reserve:

1. The reserve supports the generation of G$. Users can always convert to and from G$ via the reserve.
2. The unique math of the GoodDollar Reserve lends G$ exceptional stability.

#### **Key Terms:**

**Reserve:** The pool of tokens backing G$ generation.

**Reserve Ratio (Rr):** The ratio between the total G$ market cap and the value of the reserve.

**Supply (S):** The current circulating supply of G$.

**Price (P):** The price of G$ relative to the tokens in reserve.

**Exit Contribution:** A contribution paid when selling G$ into the reserve in exchange for another currency.

**G$X:** A token earned as a reward for buying G$ from the reserve that can be used to reduce a user’s exit contribution in a subsequent sale of G$.

#### **The Reserve Ratio (Rr)**

The ratio between the value of the reserve and the market capitalization of G$. The lower the ratio, the more G$ the protocol can generate.

#### **GoodDollar Reserve Functions:** <a href="#_ifxdlmghjtme" id="_ifxdlmghjtme"></a>

The GoodDollar Reserve performs three different functions important to the GoodDollar Economy: _**Expansion**_; _**Conversion**_; _**Interest Deposits**_. These are outlined below (for more on the underlying math, please see the [appendix ](https://whitepaper.gooddollar.org/appendix)of the GoodDollar white paper).

* _**Expansion**_ is the pre-set annual rate by which the token supply increases, thereby reducing the reserve ratio. For instance, if the expansion rate is set to 10% annually and the year begins with a reserve ratio of 1, then by the end of the first year the reserve ratio would be 0.9, by the end of year two, 0.81, and so on ([Equation 3](https://whitepaper.gooddollar.org/appendix#equation-3-expansion-rate-formula)).
* _**Conversion**_ is the process that enables users to exchange G$ for CDAI and vice versa. Since the GoodDollar Reserve is essentially an automated market maker (AMM) that works on a bonding curve, the amount of G$ minted or burned depends upon how much collateral is added or removed from the reserve. Users who buy G$ receive a matching number of G$X tokens as a reward for their purchases, which can be used to reduce their exit contributions when they choose to sell G$ (see below).
* _**Interest deposits**_ into the GoodDollar Reserve from a third-party protocol are converted to G$ in a different way than during the crypto exchange process outlined above. When a user buys G$ from the GoodDollar Reserve in exchange for a supported currency, new tokens are minted and the price of G$ rises. In contrast, when a user deposits interest, there are more tokens minted, but the price of G$ doesn’t change.

#### **Exit Contributions** <a href="#_mebn0hpwchkh" id="_mebn0hpwchkh"></a>

#### **G$X Tokens** <a href="#_511bw6p5w9as" id="_511bw6p5w9as"></a>

In addition to the G$ coin and the GOOD governance token, the GoodDollar ecosystem includes a third type of crypto token: _**G$X**_. Members who hold G$X tokens can use these to reduce their exit contributions when selling G$ to the reserve by an amount set by the DAO. Users acquire G$X tokens as a reward for buying G$ from the reserve (currently, a user who buys 100 G$ will also receive 100 G$X).

**Exit contribution calculation including G$X**

*
  1. Discount = 1 - G$X/G$sold
     1. If Discount <= 0 Then Discount = 0
  2. Exit contribution = Setcontribution\*Discount

**G$X Supply & Burn policies**

For every G$ token bought from the GoodDollar Reserve, the reserve will issue 1 G$X token. For every G$ token sold to the GoodDollar Reserve, the reserve will burn 1 G$X token.

#### **GoodDollar Reserve Stability** <a href="#_qz61jetq3map" id="_qz61jetq3map"></a>

As described above, the impact of buying and selling currencies to and from the GoodDollar Reserve depends on three factors:

1. The size of the reserve ratio.
2. The size of each transaction.
3. The total reserve value.

**See Simulator:**

https://docs.google.com/spreadsheets/d/1laUPAf-ZH1kjKaOkgwQizHT1wohfDj\_b5Fq6Z7GGJDY/edit?usp=drive\_web\&ouid=113040146852067786774

#### **Helper contracts** <a href="#_p1dxu7aswyt0" id="_p1dxu7aswyt0"></a>

_**Helper contracts**_ are smart contracts that connect the GoodDollar Reserve to other liquidity networks in order to allow liquidity to flow from G$ to any other token that has an automated market maker (AMM). For example, if a user wants to convert token X to G$, the helper contract will first convert token X to DAI using Uniswap, and then convert DAI to CDAI using Compound. Finally, it will convert the CDAI to G$ using the GoodDollar Reserve. Future versions of the protocol may extend this functionality to additional protocols, such as Bancor and Aave.

### **3. The GoodDollar Trust** <a href="#_mn9xjitr972u" id="_mn9xjitr972u"></a>

The aim of the _**GoodDollar Trust**_ is to generate an ongoing flow of money into the GoodDollar Reserve. What we refer to as the GoodDollar Trust is in actuality a collection of trust funds, or staking contracts, that “wrap” third-party deposit-taking DeFi protocols. Each protocol and token has a separate trust fund. For example, Compound DAI is one trust fund; Compound ETH is another; and Aave DAI will be a third.

Each separate trust fund takes the interest generated by staked assets in the protocol it wraps and donates this to the GoodDollar Reserve, for the support of crypto UBI generation. As a reward for their commitment, stakers have the option of receiving a sum of newly minted G$ tokens. They can either withdraw these tokens, at which point they will be minted, or opt not to.

### **4. Staking rewards (annual percentage returns)**

1. The _**staking rewards structure**_ is a new parameter that is governed by the GoodDAO
2. Rewards vary depending on the third-party protocol (e.g. Compound, DAI etc.) and currency pair involved.
3. Staking rewards are calculated in G$ values, as set out in the smart contract (e.g. 1M G$ in rewards per month).
4. Rewards are prorated based on the amount of capital staked per block.

Rewards are calculated based on the formula set out [here](https://eips.ethereum.org/EIPS/eip-2917). Simply put, users are rewarded in each block, according to the following calculation: **(User’s total stake/Total staked in contract) \* (Reward per block).**

**Initial staking rewards**

* Compound DAI per block reward - 138.88 yearly = 291M
* AAVE USDC per block reward - 69.44yearly = 145.5M

**Effect of G$ staking rewards on the reserve ratio**

**The minting of** G$ rewards affects the reserve ratio in the same way as the minting of G$ for UBI. The minting of new tokens both to pay rewards and to supply UBI to members increases the total supply of G$, and thus reduces the reserve ratio.

The decline in the reserve ratio following the minting of tokens for staking rewards can be determined as follows:

1. Current state (before the minting of staking rewards):
   1. S\*P=R/Rr
2. Newly minted tokens as **S**taking **R**ewards:
   1. SR
3. New **R**eserve **r**atio: Rr1
4. (S+SR)\*P=R/Rr1
5. Rr1 = R/((S+SR)\*P)

Because stakers have the option not to withdraw the rewards to which they are entitled, tokens are minted only at the point a user makes a claim, not at the point of entitlement.

#### **Multiplier rewards**

_**Multiplier rewards**_ are designed to encourage users to leave their principal and rewards locked, rather than withdrawing and converting all or part of this amount the moment they are entitled to claim their rewards.

In the first month of staking, for instance, the user will earn only 50% of the reward to which he/she is entitled: i.e. a multiplier of 0.5. From the second month onward, the user will earn the full allocation of rewards: i.e. a multiplier of 1.

When a user takes any of the below steps, his/her multiplier resets to 0.5:

1. Withdraws part or all of the capital staked.
2. Withdraws all or part of the accrued rewards.
3. Transfers LP staking tokens.

#### **Social Rewards (Social annual percentage yield)** <a href="#_iutabpno9adx" id="_iutabpno9adx"></a>

Staking is critical to GoodDollar’s ability to generate and distribute crypto UBI. To show users the power of their contribution, we use a calculation called the _**Social APY (annual percentage yield).**_ This sets out for each user how much G$ will be distributed to GoodDollar claimers each year as a result of his/her stake.

**Social APY calculation:**

Social APY is calculated according to the following equation:

**Social APY = CAPR / Rr**

Wherein:

* **CAPR** (contract annual percentage return) = The annual percentage return offered by the third-party protocol a user has staked to
* **Rr** (reserve ratio) = The ratio between capital in the GoodDollar Reserve and the total market capitalization of G$

For example, a stake of $100 to the GoodDollar Trust would enable the protocol to mint and distribute $10 worth of G$. If that stake is made to the Aave protocol (with an APR of 10%) and the reserve ratio stands at 85%, the Social APY calculation would be as follows:

**Social APY** = 10% / 85%

**Social APY** = 11.7%

### **5. The Fund Manager** <a href="#_q0skiu5ion2h" id="_q0skiu5ion2h"></a>

The _**Fund Manager**_ is a smart contract responsible for several critical processes in the GoodDollar protocol. These include:

* The activation of UBI generation.
* The transfer of interest from the GoodDollar Trust to the GoodDollar Reserve.
* The transfer of funds to the Bridge and onward to the DisCo for distribution to UBI Claimers via the Fuse blockchain.

**Keepers**

As with all smart contracts, processes handled by the Fund Manager must be triggered manually. The task of triggering these processes falls to a group of volunteers called _**Keepers**_. In exchange for instructing the Fund Manager to execute tasks, these users earn rewards as well as compensation for transaction fees incurred during the process.

In addition to the above tasks handled by the Fund Manager, Keepers can also earn G$ rewards for converting the status of verified users who have not made a claim in the past 14 days from “active” to “inactive”. This function is called “fishing”.

**Rewards for Keepers**

Keepers incur “gas” or blockchain transaction fees in the course of fulfilling their tasks. The protocol compensates them for these, and pays them additional rewards for the work they carry out. Keepers are rewarded according to the following rules:

1. When a Keeper performs the “collect interest” function, they are rewarded with newly minted G$s worth the gas fees incurred + 10%:
   1. For example, if the gas fees for activating the function amount to $200, the user will receive $220 in return for activation.
2. Keepers will only be able to “activate” the function when the accumulated interest to be transferred is 4 times greater than the cost of the gas fees that would be incurred in the execution of the transfer.
3. If no Keeper has executed the “activate” function for two months, the above limit no longer applies and anyone can execute this task.

### **6. The Distribution Contract (DisCo)** <a href="#_r9w6swau5npq" id="_r9w6swau5npq"></a>

#### **Key Terms**

**Daily reward:** The amount of G$ a verified user can claim in a 24-hour period.

**Verified user:** A user verified as real and unique.

**Active user:** A verified user who has claimed at least once in the last 2 weeks.

**Epoch:** The DisCo operates according to a three-month cycle known as an “epoch” (N.B. the duration of this cycle can be changed by the GoodDAO). The DisCo will initiate a new epoch before the cycle is completed _if_ it has accepted 30% or more than the current pool left to distribute and the pool is now 80% or more of the total value of the pool at the start of the last epoch.

**Identity Contract:** A smart contract on Fuse that holds a list of all members of the GoodDollar ecosystem who are verified as real and unique. The DisCo draws upon this for distribution.

#### **How the DiscCo works**

The _**DisCo**_, or _**Distribution Contract**_, is a smart contract that handles the distribution of G$ to all white-listed addresses (i.e. addresses verified as belonging to real and unique people in the GoodDollar ecosystem) housed in the **Identity Contract**. The DisCo is responsible for accepting G$ from elsewhere in the system and distributing this to all verified active users who have clicked “claim” in the GoodDollar Wallet app within the preceding 24 hours.

The DisCo is also responsible for calculating daily rewards, according to the below calculation:\
**Daily rewards** = (G$ in DisCo **/** days remaining in an epoch) / Active users)

### **7. GoodDollar Governance**

The GoodDollar governance model is based on the Compound governance model and code, as set out [here](https://compound.finance/docs/governance#comp). Critical to the process is the **GOOD token**, a non-transferable token that controls all smart contracts within the GoodDollar ecosystem.

#### **GoodDollar governance components** <a href="#_2e4lrx4bta1p" id="_2e4lrx4bta1p"></a>

1. **Avatar:** A master smart contract that houses permissions for all other GoodDollar smart contracts. The Avatar can interact with external smart contracts and is able to function as a “smart wallet” for the GoodDAO.
2. **Governance module:** A VotingMachine contract that implements the Governance Specs. The governance module has permission to control the Avatar when a proposal passes.
3. **GOOD:** A Reputation Token contract that supports delegation and initial state merkle proof, used for voting in the governance module.
4. **Staker distribution:** A smart contract that distributes GOOD to users who stake capital to the GoodDollar Trust.
5. **Claimer distribution:** A smart contract that distributes GOOD to users who claim G$ tokens through the GoodDollar Wallet app.
6. **Governance Staking:** A smart contract that distributes GOOD to users who stake their G$ in this contract.

#### **The GoodDAO** <a href="#_x9v4kk8jp487" id="_x9v4kk8jp487"></a>

The _**GoodDAO**_ is the decentralized autonomous organization responsible for oversight of the GoodDollar protocol. All GoodDAO members have the power to propose changes to the protocol or to the governance process. They may also vote on the proposals of others.

The GoodDAO can vote on anything directly affecting the protocol. Successful proposals for edits/additions/changes to the functionality of existing smart contracts are implemented through code upgrades. Code upgrade proposals must include the proposed new code in its final format.

#### **GOOD**

_**GOOD**_ is the GoodDollar governance token used for voting on proposals related to the GoodDollar protocol. There are **two important points** to remember about GOOD:

1. 1 GOOD = 1 vote.
2. GOOD is a non-transferable token and therefore has no market value.

#### **The delegation mechanism**

1. Allows users to delegate/undelegate to another community member’s address.
2. Users cannot delegate the GOOD that has been delegated to them.

#### **Initial distribution of GOOD**

1. 48M (InitialAmount) GOOD goes to to the G$ **claimers**:
   1. Each Claimer receives (48M/Total Claims)\*(# times the user claimed). For example, if there have been 10,000 claims logged by the app, and the user has claimed 60 times, he will receive(48M/10,000)\*60 = 288,000
2. 24M (InitialAmount) GOOD goes to the G$ **holders**:
   1. Each G$ Holders receives (24M / Total G$ supply) \* (user holdings)
   2. For example, if the total G$ supply = 10M and a user holds 100 G$, he will receive (24M/10,000,000)\*100 = 240 GOOD.
3. 24M (initialAmount) GOOD to G$ **stakers)**:
   1. Each supporter is rewarded in proportion to their stake in DAI.

#### **Ongoing distribution of GOOD** <a href="#_nhdrjwrgi6c4" id="_nhdrjwrgi6c4"></a>

GOOD tokens are minted on a monthly basis for ongoing distributions. Every month, 8M GOOD will be minted and distributed as follows:

1. **4M GOOD to the G$ claimers:**
   1. Each Claimer receives (4m/Total Claims in the preceding month)\*(# times the user claimed)
   2. For example, if there were 10,000 total claims in the past month and a user has claimed 20 times, he/she will receive (4M/10,000)\*20.
2. **2M GOOD to G$ stakers:**
   1. G$ staking is a new staking contract, unrelated to all other staking contracts.
   2. G$ staking is open only on Fuse network
   3. The distribution of GDAO should be based on the calculation set out [here](https://eips.ethereum.org/EIPS/eip-2917).
3. **2M GOOD goes to users who stake via the GoodDollar Trust in proportion to the amount they have staked:**
   1. For example, if only one user has staked $1000 in the GoodDollar Trust would earn a full 2M GOOD each month.
   2. If 10 users staked 1000$ each in goodstaking they would earn 200K each.
   3. When there are multiple staking contracts, then the amount of GOOD tokens each contract rewards its stakers is proportional to the dollar value staked in that contract.

#### **The proposal and voting process**

#### &#x20;**Key Terms**&#x20;

**The governance module:** GoodDollar’s governance module will initially be based on Compound’s contracts. The GoodDAO can elect to change this in future.\
**The proposal threshold:** The percentage of total GOOD tokens a voter must hold and/or have delegated to him/her to make a proposal. This amount is currently set at **0.25%**.\
**Quorum:** The minimum number of votes required for a proposal to be approved/overruled. This amount is currently set at **3%**.\
**The proposal period:** The time limit for a proposal to reach a quorum (3%). If a proposal does not reach a quorum within this timeframe, it is automatically overruled.\
**The countdown period:** The period allocated for voting on a proposal that has reached a quorum. This period is set at a minimum of two days. If there is a significant shift in voting within the last 24 hours of voting, the clock is reset to a full 24 hours. If voting again shifts abruptly, further 24-hour extensions will occur.

#### **Making proposals**

Any GoodDollar community member who controls more than 0.25% GOOD, either directly or through delegation, is entitled to make a proposal related to the project. There is, however, no minimum requirement for voting. Holders of any amount of GOOD can vote on proposals as they arise.

#### **Voting on proposals**

1. Proposals can only be made by **** community members whose wallets contain more than 0.25% GOOD (the **proposal threshold**).
2. Any GOOD holder can vote on whether to accept a proposal.
3. Voting on each proposal is open for a period of 14 days.
4. Each proposal has a threshold of 3% (the **quorum**).
   1. If fewer than 3% GOOD tokens are voted in favor of a proposal, it is overruled.
   2. If more than 3% GOOD tokens are voted in favor and fewer than 3% against, the proposal is considered approved.
   3. If more than 3% GOOD tokens are voted in favor, and more than 3% against, the proposal will be turned over to the relative voting mechanism.
5. The relative voting mechanism countdown takes place over two days, during which votes are accrued for one side or the other.
6. If there is a significant shift in voting within the last 24 hours, the clock is reset to permit a full 24 hours. If voting again shifts abruptly, further 24-hour extensions will occur.
7. Any proposal that earns more than 51% approval will be automatically approved for implementation with a shorter execution delay.

#### **Proposal statuses** <a href="#_s7xzj9buebqs" id="_s7xzj9buebqs"></a>

**Pending:** A proposal has been made but voting on it cannot yet begin.

**Active:** A proposal that can be voted on (within 14 days or, if threshold passed, until the holding period ends).

**Succeeded:** A proposal that has passed the majority threshold but has not yet been executed.

**Defeated:** A proposal that has not earned enough votes to pass within 14 days.

**Expired:** A proposal approved by a majority that was not executed within the execution threshold period (currently set at two days).

**Executed:** A proposal that was approved by a majority that has had its code executed within the execution threshold period.

**Canceled:** A proposal that lapses because a) the proposer's GOOD holdings decline below the proposal threshold, or b) the Guardian (see below) cancels the vote.

#### **The GoodDollar Guardian** <a href="#_mm6flsmeeyzy" id="_mm6flsmeeyzy"></a>

As the GoodDollar protocol will be fully decentralized under its new governance model. As such, there is a need to safeguard the protocol from two potential vectors of attack:

1. Attempts to withdraw capital from the GoodDollar Reserve. These could be disguised within proposals to “upgrade the reserve contract”.
2. Attempts to mint G$ to line a user’s pocket. These could be hiding within proposals requesting “a grant from the protocol”.

To ensure no nefarious actor can misuse GoodDollar in such ways, the Foundation will retain the right to cancel any proposal harmful to the project or its financial integrity. The Foundation has committed to act in good faith, and will not step in unless the circumstances above arise. The GoodDAO can vote to change this from January 2023.

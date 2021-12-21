# Elements of the GoodDollar Ecosystem

## [1. **The token (G$)**](1.-the-token-gusd.md) <a href="#_coklhq47qt9q" id="_coklhq47qt9q"></a>

The _**GoodDollar token (G$)**_ is an ERC 20 crypto token with a max supply of 2.2 trillion. It is native to Ethereum and also operates on Fuse.

## ****[**2. The Reserve**](2.-the-reserve.md) <a href="#reserve" id="reserve"></a>

The _**GoodDollar Reserve**_ is the smart contract that governs the vault holding the assets that back G$ tokens. The algorithm that guides the reserve is based on the Bancor formula, which has been altered to fit GoodDollar’s needs. There are two important characteristics unique to the GoodDollar Reserve:

1. The reserve supports the generation of G$. Users can always convert to and from G$ via the reserve.
2. The unique math of the GoodDollar Reserve lends G$ exceptional stability.

### **Exit Contributions** <a href="#_mebn0hpwchkh" id="_mebn0hpwchkh"></a>

In addition to the G$ coin and the GOOD governance token, the GoodDollar ecosystem includes a third type of crypto token: _**G$X**_. Members who hold G$X tokens can use these to reduce their exit contributions when selling G$ to the reserve by an amount set by the DAO. Users acquire G$X tokens as a reward for buying G$ from the reserve (currently, a user who buys 100 G$ will also receive 100 G$X).

### **Helpers** <a href="#_p1dxu7aswyt0" id="_p1dxu7aswyt0"></a>

_**Helper contracts**_ are smart contracts that connect the GoodDollar Reserve to other liquidity networks in order to allow liquidity to flow from G$ to any other token that has an automated market maker (AMM). For example, if a user wants to convert token X to G$, the helper contract will first convert token X to DAI using Uniswap, and then convert DAI to CDAI using Compound. Finally, it will convert the CDAI to G$ using the GoodDollar Reserve. Future versions of the protocol may extend this functionality to additional protocols, such as Bancor.

## ****[**3. The Trust**](3.-the-trust.md) <a href="#_mn9xjitr972u" id="_mn9xjitr972u"></a>

The aim of the _**GoodDollar Trust**_ is to generate an ongoing flow of money into the GoodDollar Reserve. What we refer to as the GoodDollar Trust is in actuality a collection of trust funds, or staking contracts, that “wrap” third-party deposit-taking DeFi protocols. Each protocol and token has a separate trust fund.&#x20;

## ****[**4. Staking rewards (APR)**](4.-staking-rewards-apr.md)

Rewards are calculated based on the formula set out [here](https://eips.ethereum.org/EIPS/eip-2917). Simply put, users are rewarded in each block, according to the following calculation: \
**(User’s total stake/Total staked in contract) \* (Reward per block).**

{% hint style="success" %}
**Initial staking rewards**

* Compound DAI Total reward per block = 138.88 G$s | Yearly Reward = 291M G$s
* AAVE USDC Total reward per block = 69.44 G$s | Yearly Reward = 145.5M G$s
{% endhint %}

## ****[**5. The Fund Manager**](5.-the-fund-manager.md) <a href="#_q0skiu5ion2h" id="_q0skiu5ion2h"></a>

Responsible for several critical processes in the GoodDollar protocol. These include:

* The activation of UBI generation.
* The transfer of interest from the GoodDollar Trust to the GoodDollar Reserve.
* The transfer of funds to the Bridge and onward to the DisCo for distribution to UBI Claimers via the Fuse blockchain.

## ****[**6. The Distribution Contract (DisCo)**](6.-the-distribution-contract-disco.md) <a href="#_r9w6swau5npq" id="_r9w6swau5npq"></a>

The _**DisCo**_, or _**Distribution Contract**_, is a smart contract that handles the distribution of G$ to all white-listed addresses.

## **7. Governance (DAO)**

The GoodDollar governance model is based on the Compound governance model and code, as set out [here](https://compound.finance/docs/governance#comp). Critical to the process is the **GOOD token**, a non-transferable token that controls all smart contracts within the GoodDollar ecosystem.

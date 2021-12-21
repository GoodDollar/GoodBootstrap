---
description: >-
  Instruction guide on how to stake supported tokens (DAI, USDC) to generate
  interest which will be used to support GoodDollar UBI generation and
  distribution.
---

# GoodStake

Since a UBI distribution can be done only thought inflation of the monetary policy, GoodDollarV2 assures that there's value entering our ecosystem so the value of every G$ minted towards this purpose is backed bu the assets in the GoodReserve.

This is achieved by the GoodDollar Trust, a set of smart contracts that allows deposits from GoodDollar UBI supporters, interact with third party DeFi Protocols to earn yields and then feed the GoodReserve for the minting of new G$s to be distributed in a UBI fashion.

{% hint style="success" %}
**Initial staking rewards**

* Compound DAI Total reward per block = 138.88 G$s | Yearly Reward = 291M G$s
* AAVE USDC Total reward per block = 69.44 G$s | Yearly Reward = 145.5M G$s
{% endhint %}

## Prerequisites

1. You should have a web3 wallet, (like MetaMask for example, [link to the official link](https://www.google.com/url?q=https://metamask.io/\&sa=D\&source=editors\&ust=1634809220729000\&usg=AOvVaw3sIQw4vzOnSgl4wX-4lv4E)).
2. You should have enough ETH in your wallet in order to pay the gas fees of the transaction.
3. You should have enough balance of the currency you are using to stake with.
4. You should approve to the relevant staking contract enough allowance to use your balance in order to stake.
   1. Go to the contract page of the staking contract, for example the GoodCompoundStaking (links in the references) and click on “Contract”
   2. Click on "Write Contract".
   3. Connect your wallet by clicking on "Connect to Web3" and then choosing your wallet.
   4. Click on "1. approve".
   5. Fill in the spender address and the amount and click "Write" button:

![](<../.gitbook/assets/Screenshot 2021-09-20 at 21.33.25.png>)

## Staking Interface

After you have done all the prerequisites, let's do the actual staking.

1. Go to the staking contact of your choice (either Compound or Aave, links to mainnet and couple test nets in the references).
2. Click on "Contract".
3. Click on "Write Contract".
4. Connect your wallet by clicking on "Connect to Web3" and then choosing your wallet.
5. Click on "13. stake", it will look like that (further explanation below the picture):

![](<../.gitbook/assets/Screenshot 2021-09-20 at 21.25.52.png>)

**\_amount** Amount that you would like to stake

**\_donationPer** Indicates if you would like to donate your staking rewards. Set 100 if you would like to donate your staking rewards, or 0 if you prefer not to.

**\_inInterestToken** Indicates if you would like to stake in stake token or not, for example in the compound case with cToken or normal token.

### Example

#### Staking with DAI

Let's assume we want to stake 100 DAI and we do not want to donate our rewards. Before the stake transaction, you would need to approve enough DAIs to the stake contract in order to allow it to transfer your funds.

![](<../.gitbook/assets/Screenshot 2021-09-20 at 21.33.25.png>)

Go to the related stake contract on etherscan.io

Connect your wallet by pressing the `connect to web3` button&#x20;

![](<../.gitbook/assets/image (1).png>)

Now we can finalize our staking transaction:

![](<../.gitbook/assets/Screenshot 2021-09-20 at 21.37.30.png>)

## Withdraw Interface

In order to withdraw, follow these steps:

1. Go to the staking contact of your choice (either Compound or Aave, links to mainnet and couple test nets in the references).
2. Click on "Contract".
3. Click on "Write Contract".
4. Connect your wallet by clicking on "Connect to Web3" and then choosing your wallet.
5. Click on "18. withdrawStake", it will look like that (further explanation below the picture):

![](<../.gitbook/assets/Screenshot 2021-09-20 at 21.39.18.png>)

**\_amount -** Staked amount that we would like to withdraw.&#x20;

**\_inInterestToken** indicates if we would like to withdraw in interest token or normal token, for example in compound it is either cToken or normal token.

### Example

Let's assume we staked 100DAI and we want to withdraw in cDAI.

1. Go to the staking contact of your choice (either Compound or Aave, links to mainnet and couple test nets in the references).
2. Click on "Contract".
3. Click on "Write Contract".
4. Connect your wallet by clicking on "Connect to Web3" and then choosing your wallet.
5. Click on "18. withdrawStake", it will look like that (further explanation below the picture):
6. Fill in 100dai in the _amount (don't forget 18 decimals) and fill true in the_ inInterestToken field, it should look like the picture below.
7. Click "Write" button.

![](<../.gitbook/assets/Screenshot 2021-09-20 at 21.42.16.png>)



## **GovernanceStaking Interface**

![](<../.gitbook/assets/Screenshot 2021-09-21 at 19.59.07.png>)

**\_amount** Amount that you would like to stake

### Example

In order to stake G$s to obtain governance tokens (GOOD), you will need to go GoodDollar ERC20's contract page on Fuse explorer and approve the amount you would like to stake.

Let's assume we would like to stake 100 G$s so we need to approve it first.

![](<../.gitbook/assets/Screenshot 2021-09-22 at 12.46.56.png>)

Then we can go to Governancestaking contract and finalize staking transaction.

![](<../.gitbook/assets/Screenshot 2021-09-22 at 12.49.00.png>)

In order to withdraw your GOOD governance tokens, you will need to go to the GovernanceStaking contract and use the 'withdrawRewards' function in order to withdraw your GOOD rewards without withdrawing your staked G$.

## References

### Related contract addresses

| **Contract**        |                                                        Mainnet                                                        | Kovan                                                                                                                                     | Ropsten                                                                                                                            |                                                                                                                           |
| ------------------- | :-------------------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| GoodDollar ERC20    | [0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B](https://etherscan.io/address/0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B) | [0x46183b8822BB7Cbf27E10A1acc95DfB3b5f0ec79](https://kovan.etherscan.io/address/0x46183b8822BB7Cbf27E10A1acc95DfB3b5f0ec79)               | [0x4738C5e91C4F809da21DD0Df4B5aD5f699878C1c](https://ropsten.etherscan.io/address/0x4738C5e91C4F809da21DD0Df4B5aD5f699878C1c)      |                                                                                                                           |
| GoodCompoundStaking |                                                  Did not release yet                                                  | [0xbc371C5c98D40De18382E3e0Eeb58805d76D3D50](https://kovan.etherscan.io/address/0xbc371c5c98d40de18382e3e0eeb58805d76d3d50#writeContract) | [0x410c9c4688B3f1f065c41F2b86BEc673A9bb7171](https://ropsten.etherscan.io/address/0x410c9c4688B3f1f065c41F2b86BEc673A9bb7171#code) |                                                                                                                           |
| GoodAaveStaking     |                                                  Did not release yet                                                  | [0x97336539bF2ab85ED83e63f294af113A7A110Cd3](https://kovan.etherscan.io/address/0x97336539bF2ab85ED83e63f294af113A7A110Cd3)               |                                                                                                                                    |                                                                                                                           |
| DAI                 |  [0x6b175474e89094c44da98b954eedeac495271d0f](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f)  | [0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa](https://kovan.etherscan.io/address/0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa#code)          | [0xB5E5D0F8C0cbA267CD3D7035d6AdC8eBA7Df7Cdd](https://ropsten.etherscan.io/address/0xB5E5D0F8C0cbA267CD3D7035d6AdC8eBA7Df7Cdd)      |                                                                                                                           |
| cDAI                |  [0x5d3a536e4d6dbd6114cc1ead35777bab948e3643](https://etherscan.io/token/0x5d3a536e4d6dbd6114cc1ead35777bab948e3643)  | [0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad](https://kovan.etherscan.io/address/0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad)               |                                                                                                                                    |                                                                                                                           |
| GovarnanceStaking   |                                                                                                                       |                                                                                                                                           |                                                                                                                                    | [0xFAF457Fb4A978Be059506F6CD41f9B30fCa753b0](https://explorer.fuse.io/address/0xFAF457Fb4A978Be059506F6CD41f9B30fCa753b0) |






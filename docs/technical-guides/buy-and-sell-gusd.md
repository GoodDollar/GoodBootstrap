---
description: >-
  Instruction guide on how to interact with GoodDollarV2 contracts for buying
  and selling G$s directly
---

# Buy & Sell G$

There are key user and stakeholder hypotheses built into our theory of change and adoption. Ultimately, the success of the GoodDollar economy is contingent upon market demand from both those who support G$ and those who claim it, as the economy itself is a balance between supply and demand.&#x20;

G$ is designed to gain usage and to be widely adopted as a means of exchange over time. Like Bitcoin, the initial dollar value, or “price”, of each G$ will be low – in the tenths of a cent on the dollar range to begin with. Our belief is that, because it offers free access to an instantly liquid, global basic income network, G$ will first be adopted in markets where smartphone-enabled populations currently live on less than US$10 a day. We believe that, for these populations, G$ could emerge as a useful complementary currency for use in peer-to-peer digital marketplaces as well as for on-the-ground goods and services, particularly as the network grows.

{% hint style="info" %}
GoodDollar ERC20 is a reserve backed currency with issuance governed by an AMM (automated market maker) encoded in the GoodReserve contract. Each time you buy or sell, from or to, the reserve - tokens are respectively being minted or burned according to [equation 2](https://whitepaper.gooddollar.org/appendix) WhitePaper.
{% endhint %}

You are able to buy and sell G$ directly to, and from, the GoodDollar Reserve contract. This healthy activity grows the liquidity of the ecosystem and increases the impact of the UBI GoodDollar delivers. Two key enhancements to the Reserve AMM contract support this change:

* The introduction of a 3% “exit contribution” fee on all sales of G$ into the #GoodDollar Reserve in exchange for supported cryptocurrencies. All fees go back into the #GoodDollar Reserve and grow the value of the overall economy.
* The creation of a new ERC20 token – G$X – that lets people buy and sell G$ to the Reserve without a fee. All those who buy G$ from the reserve will also receive an equal number of G$X.

### Prerequisites <a href="#h.7qnl0y4984hv" id="h.7qnl0y4984hv"></a>

1. You should have a web3 wallet (like [MetaMask](https://metamask.io/)).
2. You should have enough ETH in your wallet in order to pay the gas fees of the transaction.
3. You should have enough balance of the currency you are using to buy/sell with.
4. You should approve to exchangeHelper enough allowance to use your balance in order to buy/sell G$.
   1. Go to the contract page of the currency you are willing to buy/sell with, for example [cDAI contract page](https://www.google.com/url?q=https://kovan.etherscan.io/address/0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad\&sa=D\&source=editors\&ust=1634809220729000\&usg=AOvVaw2MhLThHQa8nApkfA9sj2vh) and click on “Contract”:

![](../.gitbook/assets/image14)

2\. Now click on “Write as Proxy”:&#x20;

![](../.gitbook/assets/image9)

3\. Connect to your wallet by clicking on “Connect to Web3”:&#x20;

![](../.gitbook/assets/image16)

4\. Now scroll down and click on “11. approve”:&#x20;

![](../.gitbook/assets/image4)

5\. You will have to enter two parameters: Spender and Amount. The spender is the contract address of the ExchangeHelper (find the relevant exchangeHelper address in the references section on the bottom of the page), the amount is the amount you would like to approve in the currency you are buying with, click Write.

![](../.gitbook/assets/image5)

### Buy G$ with DAI / cDAI <a href="#h.5xmwue139rg6" id="h.5xmwue139rg6"></a>

1. First, make sure you have done everything in the prerequisites section.
2. Optional step, using the buyReturn function you can check how much G$ you will get.
   1. Go to GoodMarketMaker (either Mainnet, Kovan or Ropsten, link in the references below).
   2. Click on “Contract”:

![](../.gitbook/assets/image15)

3\. Click on “Read as Proxy”:&#x20;

![](../.gitbook/assets/image2)

4\. Click on “2. buyReturn”:&#x20;

![](../.gitbook/assets/image13)

5\. At “\_token (address) insert the address of the token you are planning to buy with and at the “\_tokenAmount (uint256)” insert the amount that you would like to pay with (don’t forget to add the relevant amount of decimals.&#x20;

![](../.gitbook/assets/image6)

6\. For example, let’s check how much G$ you will get for 10 cDAI, so you will put cDAI contract address (in this case it’s Kovan network) at the first field and 1000000000 (which is 10 cDAI because cDAi has 8 decimals):

![](../.gitbook/assets/image12)

And you got a result of 9080104 which is 90801.04 G$ because G$ has 2 decimals.

3\. Now, go to the exchangeHelper (either Mainnet, Kovan or Ropsten, link in the references below)

4\. Click on “Contract”:&#x20;

![](../.gitbook/assets/image1)

5\. Click on “Write as Proxy”:&#x20;

![](../.gitbook/assets/image11)

6\. Connect your wallet by clicking on “Connect to Web3” button:&#x20;

![](../.gitbook/assets/image7)

7\. Click on “1. buy”:&#x20;

![](../.gitbook/assets/image3)

8\. Finally, we are about to purchase G$, your screen should look like that now:&#x20;

![](../.gitbook/assets/image10)

9\. Now let’s explain those 6 parameters, followed by an example:

1. buy: Payable amount in ether, if you buy in DAI / cDAI insert 0.
2. \_buyPath (address\[]): The address of the token you want to buy with, if you buy with DAI / cDAI than insert one of those addresses.
3. \_tokenAmount (uint256): Amount of G$ you would like to buy in the currency you are paying with, don’t forget to add the correct amount of zeros according to the specific token, for example 8 zeros for cDAI and 18 zeros for DAI.
4. \_minReturn (uint256): Minimum amount of G$s expected after buy transaction.
5. \_minDAIAmount (uint256): If input token is not cDAI then this parameter must be provided in order to correct swap and this parameter for minimum DAI return amount from Uniswap swap transaction
6. \_targetAddress (address): Recipient address, if the recipient is you then insert 0x0000000000000000000000000000000000000000

Example with cDAI:

![](../.gitbook/assets/image8)

### Sell G$ to the reserve <a href="#h.hp4socu3xt98" id="h.hp4socu3xt98"></a>

{% hint style="danger" %}
G$X token lets people buy and sell G$ to the Reserve without an exit fee. All those who buy G$ from the reserve will also receive an equal number of G$X. See [Claim GOOD and G$X](claim-good-and-gdx.md)
{% endhint %}

1. Optional step, using the sellReturn function you can check how much you will get for the G$ you are planning to sell.
   1. Go to GoodMarketMaker (check the references section for the relevant link).
   2. Click “Read as Proxy”.
   3. Go to “13. sellReturn”.
   4. You will have two parameters to fill;
      1. \_token (address) - this is the address of the token contract you would like to check how much you will get for your GoodDollars you are planning to sell.
      2. \_gdAmount (uint256) - this is the G$ amount you would like to sell and check how much you will get for, don’t forget to add the two decimals.
2. Go to exchangeHelper contract page.
3. Click on “Contract”.
4. Click on “Write as Proxy”.
5. Connect to your wallet by clicking on “Connect to Web3” button.
6. Open the sell function by clicking on “3. Sell”.
7. Now the parameters here are almost the same as the parameters on the buy function.
   1. \_sellPath (address\[]): The address of the token you would like to get for the G$ you are selling, if you buy with DAI / cDAI than insert one of those addresses.
   2. \_gdAmount (uint256): Amount of G$ you would like to sell, don’t forget to add two zeros as G$ has two decimals.
   3. \_minReturn (uint256): Minimum amount of G$s expected after buy transaction.
   4. \_minTokenReturn (uint256): If input token is not cDAI then this parameter must be provided in order to correct swap and this parameter for minimum DAI return amount from Uniswap swap transaction
   5. \_targetAddress (address): Recipient address, if the recipient is you then insert 0x0000000000000000000000000000000000000000

### References <a href="#h.upoh0nurgire" id="h.upoh0nurgire"></a>

|                  |                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contract         | Mainnet                                                                                                                                                                                                                           | Kovan                                                                                                                                                                                                                                    | Ropsten                                                                                                                                                                                                                                     |
| Gooddollar ERC20 | [0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B](https://www.google.com/url?q=https://etherscan.io/address/0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B\&sa=D\&source=editors\&ust=1634809220741000\&usg=AOvVaw1bbGiPClubVwscJgJglVg7)  | [0x46183b8822BB7Cbf27E10A1acc95DfB3b5f0ec79](https://www.google.com/url?q=https://kovan.etherscan.io/address/0x46183b8822BB7Cbf27E10A1acc95DfB3b5f0ec79\&sa=D\&source=editors\&ust=1634809220742000\&usg=AOvVaw3HZ1EHRDLx2LYM-EOaqtS5)   | [0x4738C5e91C4F809da21DD0Df4B5aD5f699878C1c](https://www.google.com/url?q=https://ropsten.etherscan.io/address/0x4738C5e91C4F809da21DD0Df4B5aD5f699878C1c\&sa=D\&source=editors\&ust=1634809220742000\&usg=AOvVaw2FHfogHQnSCPQ5pWAMkcVi)    |
| exchangeHelper   | Did not released yet                                                                                                                                                                                                              | [0x7C8f7F618c2F84C656aeb51D652848ce76990dB7](https://www.google.com/url?q=https://kovan.etherscan.io/address/0x7C8f7F618c2F84C656aeb51D652848ce76990dB7\&sa=D\&source=editors\&ust=1634809220744000\&usg=AOvVaw1kvQTVVy-URVnOw-kNe0EN)   | [0xAaB60FE459C0eB809461d858ce9A98523d826c2A](https://www.google.com/url?q=https://ropsten.etherscan.io/address/0xAaB60FE459C0eB809461d858ce9A98523d826c2A\&sa=D\&source=editors\&ust=1634809220744000\&usg=AOvVaw1aJ9bSO1fOQ6i1wC6I\_pEC)   |
| GoodMarketMaker  | Did not released yet                                                                                                                                                                                                              | [0xE0fdF6e09C4ac5aa5A8952ac32b16446eE0D0b79](https://www.google.com/url?q=https://kovan.etherscan.io/address/0xE0fdF6e09C4ac5aa5A8952ac32b16446eE0D0b79\&sa=D\&source=editors\&ust=1634809220745000\&usg=AOvVaw26rKAL33Cf16cSBwO3fvwi)   | [0xAaB60FE459C0eB809461d858ce9A98523d826c2A](https://www.google.com/url?q=https://ropsten.etherscan.io/address/0xAaB60FE459C0eB809461d858ce9A98523d826c2A\&sa=D\&source=editors\&ust=1634809220746000\&usg=AOvVaw2cYZ3zIeecxAP\_\_MY5MECs)  |
| DAI              | [0x6b175474e89094c44da98b954eedeac495271d0f](https://www.google.com/url?q=https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f\&sa=D\&source=editors\&ust=1634809220747000\&usg=AOvVaw1MRZngV3hpR8rfUgs-y14W)    | [0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa](https://www.google.com/url?q=https://kovan.etherscan.io/address/0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa\&sa=D\&source=editors\&ust=1634809220747000\&usg=AOvVaw3gjgN3ghme5qZRY\_bSrFR9)  | [0xB5E5D0F8C0cbA267CD3D7035d6AdC8eBA7Df7Cdd](https://www.google.com/url?q=https://ropsten.etherscan.io/address/0xB5E5D0F8C0cbA267CD3D7035d6AdC8eBA7Df7Cdd\&sa=D\&source=editors\&ust=1634809220748000\&usg=AOvVaw1dCTVb6\_CzuK1rPAmYB9wF)   |
| cDAI             | [0x5d3a536e4d6dbd6114cc1ead35777bab948e3643](https://www.google.com/url?q=https://etherscan.io/token/0x5d3a536e4d6dbd6114cc1ead35777bab948e3643\&sa=D\&source=editors\&ust=1634809220748000\&usg=AOvVaw0OUt3GFPvYTu9fNQ4o5ALz)    | [0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad](https://www.google.com/url?q=https://kovan.etherscan.io/address/0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad\&sa=D\&source=editors\&ust=1634809220749000\&usg=AOvVaw0ZdEx5I7AhPbJA5qJ1tYsD)   | [0x6ce27497a64fffb5517aa4aee908b1e7eb63b9ff](https://www.google.com/url?q=https://ropsten.etherscan.io/address/0x6ce27497a64fffb5517aa4aee908b1e7eb63b9ff\&sa=D\&source=editors\&ust=1634809220750000\&usg=AOvVaw22fahaP8I7bpT8sPeR0XlJ)    |

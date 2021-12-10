---
description: >-
  Instructions how to buy or sell G$ directly from the GoodReserve (V2) smart
  contract
---

# Buy & Sell (V2) (Original)

### Related contract addresses

| **Contract**     |                                                        Mainnet                                                        | Kovan                                                                                                                                          | Ropsten                                                                                                                                          |
| ---------------- | :-------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| GoodDollar ERC20 | [0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B](https://etherscan.io/address/0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B) | [0x46183b8822BB7Cbf27E10A1acc95DfB3b5f0ec79](https://kovan.etherscan.io/address/0x46183b8822BB7Cbf27E10A1acc95DfB3b5f0ec79)                    | [0x4738C5e91C4F809da21DD0Df4B5aD5f699878C1c](https://ropsten.etherscan.io/address/0x4738C5e91C4F809da21DD0Df4B5aD5f699878C1c)                    |
| ExchangeHelper   |                                                  Did not release yet                                                  | [0x7C8f7F618c2F84C656aeb51D652848ce76990dB7](https://kovan.etherscan.io/address/0x7C8f7F618c2F84C656aeb51D652848ce76990dB7#writeProxyContract) | [0xAaB60FE459C0eB809461d858ce9A98523d826c2A](https://ropsten.etherscan.io/address/0xAaB60FE459C0eB809461d858ce9A98523d826c2A#writeProxyContract) |
| GoodMarketMaker  |                                                  Did not release yet                                                  | [0xE0fdF6e09C4ac5aa5A8952ac32b16446eE0D0b79](https://kovan.etherscan.io/address/0xE0fdF6e09C4ac5aa5A8952ac32b16446eE0D0b79#writeProxyContract) | [0xAaB60FE459C0eB809461d858ce9A98523d826c2A](https://ropsten.etherscan.io/address/0xAaB60FE459C0eB809461d858ce9A98523d826c2A#code)               |
| DAI              |  [0x6b175474e89094c44da98b954eedeac495271d0f](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f)  | [0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa](https://kovan.etherscan.io/address/0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa#code)               | [0xB5E5D0F8C0cbA267CD3D7035d6AdC8eBA7Df7Cdd](https://ropsten.etherscan.io/address/0xB5E5D0F8C0cbA267CD3D7035d6AdC8eBA7Df7Cdd)                    |
| cDAI             |  [0x5d3a536e4d6dbd6114cc1ead35777bab948e3643](https://etherscan.io/token/0x5d3a536e4d6dbd6114cc1ead35777bab948e3643)  | [0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad](https://kovan.etherscan.io/address/0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad)                    | [0x6ce27497a64fffb5517aa4aee908b1e7eb63b9ff](https://ropsten.etherscan.io/address/0x6ce27497a64fffb5517aa4aee908b1e7eb63b9ff)                    |

Go to the ExchangeHelper smart contract on [etherscan.io](https://etherscan.io)

Connect your wallet by pressing the `connect to web3` button&#x20;

![](<../.gitbook/assets/image (1).png>)



## Buy G$s&#x20;



* Before use buy function , you should approve enough amount for exchangeHelper contract for the particular token that you want to use to buy G$s

### &#x20;Approve Token Example

Click on the `1. buy` to open the buy form

![](../.gitbook/assets/image.png)

* buy (payableAmount) - **optional** - fill this if you want to buy with Ether otherwise leave empty
* \_buyPath In case swap will occur through UNISWAP V2 then path must be provided as array and last element of array must be DAI address but if you want to buy G$ either with DAI or cDAI you can just pass one element array with one of these addresses such as \[daiAddress] or \[cDAIAddress]
* \_tokenAmount Amount of the tokens that you want to buy G$s
* \_minReturn Minimum amount of G$s expected after buy transaction
* \_minDAIAmount If input token is not cDAI then this parameter must be provided in order to correct swap and this parameter for minimum DAI return amount from Uniswap swap transaction
* \_targetAddress If recipient address of G$s  after buy transaction different than transaction sender wallet address then must be provided otherwise can be just set to `0x0000000000000000000000000000000000000000`

### Examples

#### Buy with cDAI

Let's assume we want to buy 100 cDAI worth of G$s then first of all we should visit cDAI contract page on  [etherscan](https://etherscan.io) if we did not approve ExchangeHelper contract in order to transfer our cDAI tokens.

cDAI tokens in 8 decimals so we need to put 10000000000 as amount.

![](<../.gitbook/assets/Screenshot 2021-09-19 at 22.22.52.png>)

Then we need to go GoodMarketMaker contract's buyReturn&#x20;

![](<../.gitbook/assets/Screenshot 2021-09-19 at 22.27.39.png>)

Then we can finalize our buy transaction&#x20;

![](<../.gitbook/assets/Screenshot 2021-09-19 at 22.29.48.png>)

#### Buy with DAI&#x20;

Let's assume we want to buy 10 DAI worth of G$s then first of all we should visit DAI contract page on the [etherscan](https://etherscan.io) if we did not approve ExchangeHelper contract in order to transfer our DAI tokens.

![](<../.gitbook/assets/Screenshot 2021-09-16 at 13.12.27.png>)

After approve transaction done , we can go to cDAI contract and check exchangeRateStored to learn how much cDAI we will get after mint cDAI with our DAIs.

![](<../.gitbook/assets/Screenshot 2021-09-19 at 21.54.21.png>)

Value of exchangeRateStored is in 28 decimals so we need to divide it to 10 ^ 28 in order to get decimal result so in that case would be 0.0309996325431056584163289377 after that we can divide our DAI amount to this amount to learn how much cDAI we will get after this transaction.So in our case would be 322.58446889 and cDAI is in 8 decimals so we need to multiply this value by 10 ^ 8 to use it in our GoodMarketMaker contract's buyReturn function.



![](<../.gitbook/assets/Screenshot 2021-09-19 at 22.03.49.png>)



Then we can go exchangeHelper contract to finalize buy transaction.

![](<../.gitbook/assets/Screenshot 2021-09-19 at 22.10.48.png>)

#### Buy with USDC

Let's assume we want to buy G$s with around 10 Usdc, First of all we need to check route and minimum receive amount on the [UNISWAP V2](https://app.uniswap.org/#/swap?use=V2) interface

![](<../.gitbook/assets/Screenshot 2021-09-21 at 23.36.41.png>)

we can go to cDAI contract and check exchangeRateStored to learn how much cDAI we will get after mint cDAI with our DAIs.

![](<../.gitbook/assets/Screenshot 2021-09-19 at 21.54.21.png>)

Value of exchangeRateStored is in 28 decimals so we need to divide it to 10 ^ 28 in order to get decimal result so in that case would be 0.0309996325431056584163289377 after that we can divide our DAI amount to this amount to learn how much cDAI we will get after this transaction.So in our case would be 322.58446889 and cDAI is in 8 decimals so we need to multiply this value by 10 ^ 8 to use it in our GoodMarketMaker contract's buyReturn function.



![](<../.gitbook/assets/Screenshot 2021-09-19 at 22.03.49.png>)



Then we can go exchangeHelper contract to finalize buy transaction.

![](<../.gitbook/assets/Screenshot 2021-09-21 at 23.42.03.png>)



## Sell G$s

* Before use sell function , you should approve enough G$s for exchangeHelper to transfer your G$s in order to sell transaction&#x20;

![](<../.gitbook/assets/Screenshot 2021-09-14 at 17.13.04.png>)

* \_sellPath The swap path for sell in order to sell G$ to target token and must provided as array of addresses if target token is not cDAI and DAI then first element of array must be DAI then path to target token in the UNISWAP V2 but if target token is either DAI or cDAI , you can just pass one element array with one of these addresses such as \[daiAddress] or \[cDAIAddress]
* \_gdAmount The amount of G$ that user want to sell
* \_minReturn Minimum return amount of cDAI in order to sell G$s&#x20;
* \_minTokenReturn Minimum return amount of target token  if target token is cDAI or DAI this can be set to 0
* \_targetAddress If address of recipient of tokens is different than transaction sender address then address can be provided otherwise just set to `0x0000000000000000000000000000000000000000`

### Examples

#### Sell for cDAI

Let's assume we want to exchange 100 G$s to cDAI then first of all we need to approve that amount so exchangeHelper can transfer it from our wallet.

![](<../.gitbook/assets/Screenshot 2021-09-20 at 11.52.30.png>)

After that we need go GoodMarketMaker contract and use sellReturn function.

![](<../.gitbook/assets/Screenshot 2021-09-20 at 11.55.31.png>)

Finally , we go to exchangeHelper contract and finalize the sell transaction.

![](<../.gitbook/assets/Screenshot 2021-09-20 at 11.58.27.png>)

#### Sell for DAI

Let's assume we want to exchange 100 G$s to DAI then first of all we need to approve that amount so exchangeHelper can transfer it from our wallet.

![](<../.gitbook/assets/Screenshot 2021-09-20 at 11.52.30.png>)

After that we need go GoodMarketMaker contract and use sellReturn function.

![](<../.gitbook/assets/Screenshot 2021-09-20 at 11.55.31.png>)

Finally , we go to exchangeHelper contract and finalize the sell transaction.

![](<../.gitbook/assets/Screenshot 2021-09-20 at 21.20.36.png>)

#### Sell for USDC

In this example Uniswap will involve to process.

Let's assume we want to exchange 1000000 G$s to USDC then first of all we need to approve that amount so exchangeHelper can transfer it from our wallet.

![](<../.gitbook/assets/Screenshot 2021-09-21 at 23.12.45.png>)

After that we need go GoodMarketMaker contract and use sellReturn function.

![](<../.gitbook/assets/Screenshot 2021-09-21 at 23.15.49.png>)

We would get 96.13310419 cDAI for 1000000G$s then we should convert this amount to DAI to learn how much DAI we will get and for that we can use cDAI contract's exchangeRateStored function which returns result in 28 decimals so we must divide this value to 10 ^ 28 so exchangeRate would be 1cDAI = 0.0309996325431056584163289377 DAI

![](<../.gitbook/assets/image (4).png>)

so we would get 96.13310419 \* 0.0309996325431056584163289377 = 2.980090905118090926 DAI as return. After that we can get proper route and minimum received amount from [UNISWAP V2](https://app.uniswap.org/#/swap?use=V2) interface.

![](<../.gitbook/assets/Screenshot 2021-09-21 at 23.18.55.png>)

Then we can finalize transaction on the ExchangeHelper contract page.

![](<../.gitbook/assets/Screenshot 2021-09-21 at 23.28.32.png>)

---
description: Guide for claiming GOOD and GDX
---

# Claim GOOD and GDX

## Prerequisetes

1. You should have a web3 wallet, (like MetaMask for example, [link to the official link](https://www.google.com/url?q=https://metamask.io/\&sa=D\&source=editors\&ust=1634809220729000\&usg=AOvVaw3sIQw4vzOnSgl4wX-4lv4E)).
2. You should have enough ETH in your wallet in order to pay the gas fees of the transaction.
3. you will need to obtain merkle proof, node index GDX/GOOD amount on [https://airdrop.gooddollar.org/](https://airdrop.gooddollar.org).

## Claim GDX

Please go to GoodReserveCDai contract interface on [etherscan.io](https://etherscan.io) (either Mainnet, Kovan or Ropsten, link in the references below).

Now, please click on the Contract tab and then click "Write as Proxy" and connect your Web3 wallet.

![](<../.gitbook/assets/image (1).png>)

Fill up the fields according to the desciption in the picture bellow while "\_user (address)" is your wallet public address.

![](<../.gitbook/assets/Screenshot 2021-09-30 at 12.31.15.png>)



## Claim GOOD

### Claiming on the Mainnet

First, you will need to obtain merkle proof, node index and GOOD amount on [https://airdrop.gooddollar.org/](https://airdrop.gooddollar.org).

Then, please go to GReputation contract interface on [etherscan.io](https://etherscan.io) (either Mainnet, Kovan or Ropsten, link in the references below).

Now, please click on the Contract tab and then click "Write as Proxy" and connect your Web3 wallet.

![](<../.gitbook/assets/image (1).png>)

Please go to "8. proofBalanceOfBlockchain" and fill up the fields according to the desciption in the picture bellow while "\_id (string)" should be set to the string "fuse" (for mainnet/kovan/ropsten) and "\_user (address)" is your wallet public address.

![](<../.gitbook/assets/Screenshot 2021-10-04 at 15.43.32.png>)

### Claiming on the Fuse

First, you will need to obtain a merkle proof, node index and GOOD amount on [https://airdrop.gooddollar.org/](https://airdrop.gooddollar.org)

Then, please go to [https://www.myetherwallet.com/wallet/access](https://www.myetherwallet.com/wallet/access) and connect your metamask (click on browser extension option) wallet, making sure you are on FUSE network.

After connecting your wallet, click Contract (on the left) and Interact with Contract.

![](<../.gitbook/assets/Screenshot 2021-10-04 at 15.28.16.png>)

Copy address of the GReputation and ABI (Contract Interface) and paste it there.

Please leave empty the Contract Type drop-down menu.

Please copy the ABI below to the ABI/JSON Interface section.

Click "Interact" button.

```
[{
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_balance",
          "type": "uint256"
        },
        {
          "internalType": "bytes32[]",
          "name": "_proof",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256",
          "name": "_nodeIndex",
          "type": "uint256"
        }
      ],
      "name": "proveBalanceOfAtBlockchain",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }]
```

![](<../.gitbook/assets/Screenshot 2021-10-04 at 15.29.30.png>)

Then click Interact and fill in the inputs: (Don't forget to write the balance in 18 decimals)

![](<../.gitbook/assets/Screenshot 2021-10-04 at 15.32.32.png>)

Click "Write" button, you are done!

## References <a href="#h.upoh0nurgire" id="h.upoh0nurgire"></a>

|                     |                      |                                                                                                                                                                |                      |
| ------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| **Contract**        | **Mainnet**          | **Kovan**                                                                                                                                                      | **Ropsten**          |
| **GoodReserveCDai** | Did not released yet | [https://kovan.etherscan.io/address/0xbe4fe98c9c4c0a8f3681c34c94ce2e462da5fc89](https://kovan.etherscan.io/address/0xbe4fe98c9c4c0a8f3681c34c94ce2e462da5fc89) | Did not released yet |
| **GReputation**     | Did not released yet | [https://kovan.etherscan.io/address/0xef0c1e6f98e433d81ae3e6611944bc06e533a47b](https://kovan.etherscan.io/address/0xef0c1e6f98e433d81ae3e6611944bc06e533a47b) | Did not released yet |


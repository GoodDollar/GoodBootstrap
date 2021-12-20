---
description: >-
  This page provides contract addresses for key components of GoodDollar
  protocol.
---

# Core Contracts & API

## Contracts & API

GoodDollar Protocol is deployed on both the Ethereum mainnet and on the Fuse sidechain. Contracts like the GoodReserve are only on Mainnet, and other contracts like the UBIScheme are only on the Fuse sidechain. Certain contracts, such as the DAO and G$ Token contracts, are deployed on both networks.

## Core Contracts

### Core Contracts

### GoodDollar G$ ERC-20

| Contract                                                                                                            | Mainnet                                                                                                                                 | Fuse                                                                                                                                   | Source code                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [GoodDollar ERC20](https://docs.gooddollar.org/smart-contracts-guide/core-contracts-and-api#gooddollar-gusd-erc-20) | [0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B](https://etherscan.io/address/0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B)                   | [0x495d133B938596C9984d462F007B676bDc57eCEC](https://explorer.fuse.io/address/0x495d133b938596c9984d462f007b676bdc57ecec)              | [GoodDollar.sol](https://github.com/GoodDollar/GoodContracts/blob/master/contracts/token/GoodDollar.sol)                                  |
|                                                                                                                     |                                                                                                                                         |                                                                                                                                        |                                                                                                                                           |
| [GoodStaking](https://docs.gooddollar.org/smart-contracts-guide#goodstaking)                                        | [0xEa12bB3917cf6aE2FDE97cE4756177703426d41F](https://etherscan.io/address/0xEa12bB3917cf6aE2FDE97cE4756177703426d41F)                   |                                                                                                                                        | [SimpleDAIStaking.sol](https://github.com/GoodDollar/GoodContracts/blob/master/stakingModel/contracts/SimpleDAIStaking.sol)               |
| [GoodReserve](https://docs.gooddollar.org/smart-contracts-guide/core-contracts-and-api#goodreserve)                 | [0x5C16960F2Eeba27b7de4F1F6e84E616C1977e070](https://etherscan.io/address/0x5C16960F2Eeba27b7de4F1F6e84E616C1977e070)                   |                                                                                                                                        | [GoodReserveCDai.sol](https://github.com/GoodDollar/GoodContracts/blob/master/stakingModel/contracts/GoodReserveCDai.sol)                 |
| [GoodFundManager](https://docs.gooddollar.org/smart-contracts-guide/core-contracts-and-api#goodfundmanager)         | [0xbDFD60f3aE73329D33ebe17d78383DEfd72643Ad](https://etherscan.io/address/0xbDFD60f3aE73329D33ebe17d78383DEfd72643Ad)                   |                                                                                                                                        | [GoodFundManager.sol](https://github.com/GoodDollar/GoodContracts/blob/master/stakingModel/contracts/GoodFundManager.sol)                 |
| [GoodMarketMaker](https://docs.gooddollar.org/smart-contracts-guide#goodmarketmaker)                                | [0xEDbE438Cd865992fDB72dd252E6055A71b02BE72](https://etherscan.io/address/0xEDbE438Cd865992fDB72dd252E6055A71b02BE72)                   |                                                                                                                                        | [GoodMarketMaker.sol](https://github.com/GoodDollar/GoodContracts/blob/master/stakingModel/contracts/GoodMarketMaker.sol)                 |
| [ContributionCalculation](core-contracts-and-api.md)                                                                | [0x8eEC64bb6807c0178f96277cCE6a334B4e565E5C](https://etherscan.io/address/0x8eEC64bb6807c0178f96277cCE6a334B4e565E5C)                   |                                                                                                                                        | [ContributionCalculation.sol](https://github.com/GoodDollar/GoodContracts/blob/master/stakingModel/contracts/ContributionCalculation.sol) |
| [UBIScheme](https://docs.gooddollar.org/smart-contracts-guide/core-contracts-and-api#ubischeme)                     |                                                                                                                                         | [0xD7aC544F8A570C4d8764c3AAbCF6870CBD960D0D](https://explorer.fuse.io/address/0xD7aC544F8A570C4d8764c3AAbCF6870CBD960D0D/transactions) | [UBIScheme.sol](https://github.com/GoodDollar/GoodContracts/blob/master/stakingModel/contracts/UBIScheme.sol)                             |
| [Identity](https://docs.gooddollar.org/smart-contracts-guide/core-contracts-and-api#identity)                       | [0x76e76e10Ac308A1D54a00f9df27EdCE4801F288b](https://etherscan.io/address/0x76e76e10Ac308A1D54a00f9df27EdCE4801F288b)                   | [0xFa8d865A962ca8456dF331D78806152d3aC5B84F](https://explorer.fuse.io/address/0xFa8d865A962ca8456dF331D78806152d3aC5B84F)              | [Identity.sol](https://github.com/GoodDollar/GoodContracts/blob/master/contracts/identity/Identity.sol)                                   |
| [FirstClaimPool](https://docs.gooddollar.org/smart-contracts-guide/core-contracts-and-api#firstclaimpool)           |                                                                                                                                         | [0x18BcdF79A724648bF34eb06701be81bD072A2384](https://explorer.fuse.io/address/0x18BcdF79A724648bF34eb06701be81bD072A2384)              | [FirstClaimPool.sol](https://github.com/GoodDollar/GoodContracts/blob/master/stakingModel/contracts/FirstClaimPool.sol)                   |
| [AdminWallet](https://docs.gooddollar.org/smart-contracts-guide#adminwallet)                                        |                                                                                                                                         | [0x9F75dAcB77419b87f568d417eBc84346e134144E](https://explorer.fuse.io/address/0x9F75dAcB77419b87f568d417eBc84346e134144E)              | [AdminWallet.sol](https://github.com/GoodDollar/GoodContracts/blob/master/contracts/wallet/AdminWallet.sol)                               |
| [OneTimePayments](https://docs.gooddollar.org/smart-contracts-guide/core-contracts-and-api#onetimepayments)         |                                                                                                                                         | [0xd9Aa86e0Ddb932bD78ab8c71C1B98F83cF610Bd4](https://explorer.fuse.io/address/0xd9Aa86e0Ddb932bD78ab8c71C1B98F83cF610Bd4)              | [OneTimePayments.sol](https://github.com/GoodDollar/GoodContracts/blob/master/contracts/dao/schemes/OneTimePayments.sol)                  |
| [DonationsStaking](https://docs.gooddollar.org/smart-contracts-guide/core-contracts-and-api#donationsstaking)       | [0x93fb057eec37abc11d955d1c09e6a0d218f35cff](https://etherscan.io/address/0x93fb057eec37abc11d955d1c09e6a0d218f35cff#readProxyContract) |                                                                                                                                        | [DonationsStakinng.sol](https://github.com/GoodDollar/GoodContracts/blob/master/upgradables/contracts/staking/DonationsStaking.sol)       |

#### GoodDollar G$ ERC-20

The GoodDollar G$ token follows the ERC-20 token standard and also supports ERC-677.

#### GoodStaking

#### GoodStaking

Supporters / stakers can stake crypto which is then sent to permissionless protocols which earn interest. The FundManager has permissions to collect interest-earned from this contract.

```
/**
 * @dev Allows a staker to deposit DAI tokens. Notice that `approve` is
 * needed to be executed before the execution of this method.
 * Can be executed only when the contract is not paused.
 * @param _amount The amount of DAI to stake
 */
function stakeDAI(uint256 _amount) public whenNotPaused

/**
 * @dev Withdraws the sender staked DAI.
 */
function withdrawStake() public
```

### GoodReserve

#### GoodReserve

The GoodReserve mints G$ based on the interest transferred from the FundManager. Only the FundManager can trigger minting. The GoodReserve also acts as the GoodDollar liquidity pool and AMM (Automatic Market Maker) and enables methods to buy and sell G$s.

```
/**
 * @dev Converts `buyWith` tokens to GD tokens and updates the bonding curve params.
 * `buy` occurs only if the GD return is above the given minimum. It is possible
 * to buy only with cDAI and when the contract is set to active. 
 * MUST `approve` prior this action to allow this contract to accomplish the
 * conversion.
 * @param _buyWith The tokens that should be converted to GD tokens
 * @param _tokenAmount The amount of `buyWith` tokens that should be converted to GD tokens
 * @param _minReturn The minimum allowed return in GD tokens
 * @return (gdReturn) How much GD tokens were transferred
 */
function buy(ERC20 _buyWith,uint256 _tokenAmount,uint256 _minReturn) public requireActive onlyCDai(_buyWith) returns (uint256)

/**
 * @dev Converts GD tokens to `sellTo` tokens and update the bonding curve params.
 * `sell` occurs only if the token return is above the given minimum. Notice that
 * there is a contribution amount from the given GD that remains in the reserve.
 * It is only possible to sell to cDAI and only when the contract is set to
 * active. MUST make call to G$ `approve` prior to this action to allow this
 * contract to accomplish the conversion.
 * @param _sellTo The tokens that will be received after the conversion
 * @param _gdAmount The amount of GD tokens that should be converted to `_sellTo` tokens
 * @param _minReturn The minimum allowed `sellTo` tokens return
 * @return (tokenReturn) How much `sellTo` tokens were transferred
 */

function sell(
    ERC20 _sellTo,
    uint256 _gdAmount,
    uint256 _minReturn
) public requireActive onlyCDai(_sellTo) returns (uint256)

/**
 * @dev Current price of GD in `token`. currently only cDAI is supported.
 * @param _token The desired reserve token to have
 * @return price of GD
 */
function currentPrice(ERC20 _token) public view returns (uint256)
```

### GoodFundManager

#### GoodFundManager

Has permissions to collect interest from the GoodStaking contract and permissions to tell GoodReserve to mint. Anyone can trigger the collection and minting process

```
/**
 * @dev Collects UBI interest in cDai from a given staking contract and transfers
 * that interest to the reserve contract. Then transfers the gd
 * received from the reserve contract back to the staking contract and to the
 * bridge, which locks the funds and then same amount of G$ tokens are minted to the
 * ubiRecipient address on the sidechain
 *
 * @param _staking Contract that implements `collectUBIInterest` and transfer cDai to
 * a given address. The given address should be the same whitelisted `reserve`
 * address in the current contract, in case that the given staking contract transfers
 * the funds to another contract, zero GD tokens will be minted by the reserve contract.
 * Emits `FundsTransferred` event in case which interest has been passed to the `reserve`
 */
function transferInterest(StakingContract _staking)
    public
    requireActive
    reserveHasInitialized
    requireDAOContract(address(_staking))
```

### UBIScheme

#### UBIScheme

Holds all the G$s that were transferred via bridge from the FundManager. The pool of G$s is divided equally by the amount of current active users, and distributed every day. Each active user can then "claim" his quota. If a user fails to claim his quota it becomes part of the next day's pool of G$ to be distributed as basic income.

```
/**
 * @dev Checks the amount which the sender address is eligible to claim for,
 * regardless if they have been whitelisted or not.
 * @return The amount of GD tokens the address can claim.
 */
function checkEntitlement() public view requireActive returns (uint256)

/**
 * @dev Function for claiming UBI. Requires contract to be active and claimer to be whitelisted.
 * Calls distributionFormula, calculats the amount the caller can claim, and transfers the amount
 * to the caller. Emits the address of caller and amount claimed.
 * @return A bool indicating if UBI was claimed
 */
function claim() public requireActive onlyWhitelisted returns (bool)

/**
 * @dev In order to update users from active to inactive, we give out incentive to people
 * to update the status of inactive users, this action is called "Fishing". Anyone can
 * send a tx to the contract to mark inactive users. The "fisherman" receives a reward
 * equal to the daily UBI (ie instead of the “fished” user). User that “last claimed” > 14
 * can be "fished" and made inactive (reduces active users count by one). Requires
 * contract to be active.
 * @param _account to fish
 * @return A bool indicating if UBI was fished
 */
function fish(address _account) public requireActive returns (bool)

/**
 * @dev executes `fish` with multiple addresses. emits the number of users from the given
 * array who actually been tried being fished.
 * @param _accounts to fish
 * @return A bool indicating if all the UBIs were fished
 */
function fishMulti(address[] memory _accounts)
```



### Identity

#### Identity

The identity contract controls addresses that are whitelisted to "Claim" UBI.

* **Face Verification** GoodDollar currently whitelists users based on a user proving "uniqueness" by signing up with a live and unique face. All image data and details are anonymized in order to allow the user to create a new account in case he is unable to recover his wallet. Facial details are deleted after `authenticationPeriod` and users are required to perform face verification again every `authenticationPeriod` days.
* **Social Profile** Each blockchain address is linked to the user's public profile as created in the wallet. The DID is the node id in the public p2p GunDB database. Mappings from wallet address to DID are held in `addrTODID`

```
/* 
 * @dev Returns true if given address has been added to whitelist
 * @param account the address to check
 * @return a bool indicating weather the address is present in whitelist
*/
function isWhitelisted(address account) public view returns (bool)

/* 
 * @dev Function that gives the date the given user was added
 * @param account The address to check
 * @return The date the address was added
*/
function lastAuthenticated(address account) public view returns (uint256)

/* the number of days an authentication is valid for*/
uint256 public authenticationPeriod

mapping(address => string) public addrToDID;
```

### OneTimePayments

#### OneTimePayments

Payments on the GoodDollar wallet are done via payment links. G$s are held in escrow and the recipient can retrieve the funds if he has the key. While the money is in escrow the sender can choose to cancel the payment and retrieve the funds. Based on [Celo's](https://github.com/celo) payments contract.

```
/* 
* @dev ERC677 on token transfer function. When transferAndCall is called on this contract,
 * this function is called, depositing the payment amount under the hash of the given bytes.
 * Reverts if hash is already in use. Can only be called by token contract.
 * @param sender the address of the sender
 * @param value the amount to deposit
 * @param data The given paymentId which should be a fresh public key
 */

to deposit a payment to a one time payment address call:
GoodDollar.transferAndCall(value,data) this will trigger OneTimePayments onTokenTransfer

/* @dev Withdrawal function.
 * allows the sender that proves ownership of paymentId to withdraw
 * @param paymentId the address of the public key that the
 *   rightful receiver of the payment knows the private key to
 * @param signature the signature of a the message containing the msg.sender address signed
 *   with the private key.
 */
function withdraw(address paymentId, bytes memory signature) public onlyRegistered

/* @dev Cancel function
 * allows only creator of payment to cancel
 * @param paymentId The paymentId of the payment to cancelæ
 */
function cancel(address paymentId) public
```

### DonationsStaking

#### DonationsStaking

Any ETH/DAI sent to this contract address is donated to the GoodDollar DAO and will generate interest to fund UBI. The funds are periodically staked in the GoodStaking contract by calling the `stakeDonations`method.

```
    uint256 public totalETHDonated;
    uint256 public totalDAIDonated;

    event DonationStaked(
        address caller,
        uint256 stakedDAI,
        uint256 ethDonated,
        uint256 daiDonated
    );

    /**
     * @dev stake available funds. It
     * take balance in eth and buy DAI from uniswap then stake outstanding DAI balance.
     * anyone can call this.
     * @param _minDAIAmount enforce expected return from uniswap when converting eth balance to DAI
     */
    function stakeDonations(uint256 _minDAIAmount) public payable isActive {
        uint256 daiDonated = DAI.balanceOf(address(this));
        uint256 ethDonated = _buyDAI(_minDAIAmount);

        uint256 daiBalance = DAI.balanceOf(address(this));
        require(daiBalance > 0, "no DAI to stake");

        stakingContract.stakeDAI(daiBalance);
        totalETHDonated += ethDonated;
        totalDAIDonated += daiDonated;
        emit DonationStaked(msg.sender, daiBalance, ethDonated, daiDonated);
    }

    /**
     * @dev total DAI value staked
     * @return DAI value staked
     */
    function totalStaked() public view returns (uint256) {
        Staking.Staker memory staker = stakingContract.stakers(address(this));
        return staker.stakedDAI;
    }
```

### GoodMarketMaker

#### GoodMarketMaker

Helper contract for the GoodReserve.

### ContributionCalculation

#### ContributionCalculation

Helper contract for calculating the exit contribution (ie when selling G$ back to the reserve)

### FirstClaimPool

#### FirstClaimPool

Helper contract for UBIScheme. Manually funded by the Foundation to give 1G$ for "inactive" users when they claim. Since a new user (inactive) becomes active and eligible to claim UBI only in the next UBI epoch. So for new users not go empty handed on their first claim we give out a 1G$.

### AdminWallet

#### AdminWallet

Helper contract for our backend servers to whitelist users and to fill their Fuse network gas.

## Token Bridge Contracts

### Token Bridge Contracts

Bridge contracts were developed by [Fuse](https://fuse.io).

{% hint style="info" %}
Note: for regular users it is recommended to use FuseSwap Bridge in order to avoid losing your tokens ([help](https://docs.fuse.io/fuseswap/bridge-fuse-erc20-tokens)). FuseSwap Bridge: [Mainnet -> Fuse](https://fuseswap.com/#/bridge/0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B) | [Fuse -> Mainnet](https://fuseswap.com/#/bridge/0x495d133B938596C9984d462F007B676bDc57eCEC).
{% endhint %}

Note: for regular users it is recommended to use FuseSwap Bridge in order to avoid losing your tokens ([help](https://docs.fuse.io/fuseswap/bridge-fuse-erc20-tokens)). FuseSwap Bridge: [Mainnet -> Fuse](https://fuseswap.com/#/bridge/0x67C5870b4A41D4Ebef24d2456547A03F1f3e094B) | [Fuse -> Mainnet](https://fuseswap.com/#/bridge/0x495d133B938596C9984d462F007B676bDc57eCEC).

## DAO Contracts

| Contract                        | Mainnet                                                                                                               | Fuse                                                                                                                      | Source Code                                                                                                                                                                       |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ForeignBridge (mainnet -> fuse) | [0xD5D11eE582c8931F336fbcd135e98CEE4DB8CCB0](https://etherscan.io/address/0xD5D11eE582c8931F336fbcd135e98CEE4DB8CCB0) |                                                                                                                           | [ForeignAMBErc677ToErc677.sol](https://github.com/fuseio/tokenbridge-contracts/blob/master/contracts/upgradeable\_contracts/amb\_erc677\_to\_erc677/ForeignAMBErc677ToErc677.sol) |
| HomeBridge (fuse -> mainnet)    |                                                                                                                       | [0xD39021DB018E2CAEadb4B2e6717D31550e7918D0](https://explorer.fuse.io/address/0xD39021DB018E2CAEadb4B2e6717D31550e7918D0) | [HomeAMBErc677ToErc677.sol](https://github.com/fuseio/tokenbridge-contracts/blob/master/contracts/upgradeable\_contracts/amb\_erc677\_to\_erc677/HomeAMBErc677ToErc677.sol)       |

### DAO Contracts

DAO contracts were developed by [DAOStack](https://daostack.io)

| Contract        | Mainnet                                                                                                               | Fuse                                                                                                                      | Source Code                                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Controller      | [0x95C0d9dCEA1E243ED696F34CAc5e6559C3c128a3](https://etherscan.io/address/0x95C0d9dCEA1E243ED696F34CAc5e6559C3c128a3) | [0xBcE053b99e22158f8B62f4DBFbEdE1f936b2D4e4](https://explorer.fuse.io/address/0xBcE053b99e22158f8B62f4DBFbEdE1f936b2D4e4) | [Controller.sol](http://github.com/daostack/arc/tree/master/contracts/controller/Controller.sol)                 |
| Avatar          | [0x1ecFD1afb601C406fF0e13c3485f2d75699b6817](https://etherscan.io/address/0x1ecFD1afb601C406fF0e13c3485f2d75699b6817) | [0xf96dADc6D71113F6500e97590760C924dA1eF70e](https://explorer.fuse.io/address/0xf96dADc6D71113F6500e97590760C924dA1eF70e) | [Avatar.sol](http://github.com/daostack/arc/tree/master/contracts/controller/Avatar.sol)                         |
| Reputation      | [0xCb4a6aF3b15D64E8f50B3cea54c4f481d9E434C1](https://etherscan.io/address/0xCb4a6aF3b15D64E8f50B3cea54c4f481d9E434C1) | [0x0be7C592374EE0bD0CcBFC76Be758a138BcaEc6E](https://explorer.fuse.io/address/0x0be7C592374EE0bD0CcBFC76Be758a138BcaEc6E) | [Reputation.sol](http://github.com/daostack/infra/tree/master/contracts/Reputation.sol)                          |
| SchemeRegistrar | [0x098148534aC15A44CFF52387bA81Ed929589eCAf](https://etherscan.io/address/0x098148534aC15A44CFF52387bA81Ed929589eCAf) | [0x12F706FaafCBf8093282Dba0c40eD0D4Eb5CAF54](https://explorer.fuse.io/address/0x12F706FaafCBf8093282Dba0c40eD0D4Eb5CAF54) | [SchemeRegistrar.sol](http://github.com/daostack/arc/tree/master/contracts/universalSchemes/SchemeRegistrar.sol) |
| AbsoluteVote    | [0xf6b5F7a885CBc57d739aDBEe76E52A70Bc04D795](https://etherscan.io/address/0xCb4a6aF3b15D64E8f50B3cea54c4f481d9E434C1) | [0xf6b5F7a885CBc57d739aDBEe76E52A70Bc04D795](https://explorer.fuse.io/address/0x0be7C592374EE0bD0CcBFC76Be758a138BcaEc6E) | [AbsoluteVote.sol](http://github.com/daostack/infra/tree/master/contracts/votingMachines/AbsoluteVote.sol)       |
| UpgradeScheme   | [0xF9B357d83BDAD6881feb09d909095872B93203d0](https://etherscan.io/address/0xF9B357d83BDAD6881feb09d909095872B93203d0) | [0x653c67Be5b3739708e84B61641253822405d78D8](https://explorer.fuse.io/address/0x653c67Be5b3739708e84B61641253822405d78D8) | [UpgradeScheme.sol](http://github.com/daostack/arc/tree/master/contracts/universalSchemes/UpgradeScheme.sol)     |

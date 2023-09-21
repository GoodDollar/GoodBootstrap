# GoodDollarMintBurnWrapper

#### **Contract Specs**

* Purpose of contract is to:
  * Distribute rewards by permissioned contracts (\_minters) from current balance of bridged G$ rewards or mint fresh ones on sidechains.
  * Give permissions to bridges to mint G$ on sidechains (starting with [Multichain.org](http://multichain.org/)) based on[https://github.com/anyswap/multichain-smart-contracts/blob/1459fe6281867319af8ffb1849e5c16d242d6530/contracts/wrapper/MintBurnWrapper.sol](https://github.com/anyswap/multichain-smart-contracts/blob/1459fe6281867319af8ffb1849e5c16d242d6530/contracts/wrapper/MintBurnWrapper.sol)
* should modify/add logic to MintBurnWrapper
* prerequisites:
  * GoodDAO needs to register scheme on the sidechain (so it can call controller to mint)
* Should implement the following methods
  * initialize(uint256 bpsPerDayMaxValue, address guardian)
  * setUpdateFrequency(uint256 timestampOrBlockNumber)
    * only avatar or guardian
  * addMinter(address minter, uint256 cap, uint256 max, uint32 bpsPerDay, bool withRewardsRole)
    * bpsPerDay is relevant for sendOrMint functionality, cap+max are limits for bridge and other minters. withRewardsRole, does this minter has permissions to call sendOrMint.
    * bpsPerDay is in basepoints ie 300 = 300/10000 = 0.03 = 3%
    * calculate nominal perDayDistributionLimit = \_bpsPerDayDistributionLimit\*G$Supply/10000
    * adds _minter, dateUpdated(can be block),_ \_bpsPerDayDistributionLimit and perDayDistributionLimit to the list of addresses that are allowed to mint
    * should only be updatable by Avatar or Guardian
    * should be able to call this multiple times to update \_bpsPerDayDistributionLimit
    * should emit event
  * removeMinter(address \_minter) // or add with 0
    * removes \_minter
    * should emit event
  * balanceDebt()
    * only runs if(contractG$Balance>0 && mintingDebt>0)
    * burn: burned = min(contractG$Balance, mintingDebt)
    * mintingDebt -= burned
  * sendOrMint(uint256 \_amount, address \_to)
    * should verify sender is a minter
    * call balanceDebt()
    * should reset mintedToday\[minter] if day passed
    * should send to \_to: sentAmount = min(contractG$Balance, \_amount)
    * should mint to \_to mintedAmount = min(perDayDistributionLimit - distributedToday, \_amount - sentAmount)
    * totalRewardsSent = sentAmount + mintedAmount
    * mintingDebt += mintedAmount
    * increase distributedToday\[minter] with amount totalRewardsSent
    * if updateFrequency months passed or a updateFrequency months worth of blocks (depending if we keep blockUpdated or dateUpdated) then recalculate the perDayDistributionLimit according to current supply
    * should emit event
    * reentrancy guard + update then call pattern
    * return the totalRewardsSent
  * onTokenTransfer
    * support for a single token transfer to bridge via multichain without needing to approve token transfer first
  * burn/mint
    * support multichain router API

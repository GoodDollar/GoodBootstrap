---
description: >-
  The staking contracts factory. Producing contracts donate earned interest to
  the DAO allowing stakers to deposit or withdraw their stake.
---

# AaveStakingFactory

The producing contracts are buying Aave-wrapped tokens and can transfer the daily interest to the DAO.

### Events

#### Deployed

Emitted when new clone of the Aave staking contract was deployed.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>proxy</td><td>The ERC1167 clones factory.</td></tr><tr><td>token</td><td>The token which is accepted in the deployed staking contract clone.</td></tr><tr><td>impl</td><td>The amount of claimers claims.</td></tr></tbody></table>

```
event Deployed(address proxy, address cToken, address impl);
```

### cloneAndInit

The function instantiates and initalizes an EIP 1167 proxy contract as minimal clone of the staking contract at public field `impl`.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>token</td><td>The token to be used for staking in this contract.</td></tr><tr><td>_lendingPool</td><td></td></tr><tr><td>_ns</td><td>The NameService contract address which holds all the necessary addresses.</td></tr><tr><td>_maxRewardThreshold</td><td>The amount of blocks that need to pass in order to user would get their rewards with 1x multiplier instead of 0.5x.</td></tr><tr><td>_tokenUsdOracle</td><td>The address of the TOKEN/USD oracle.</td></tr><tr><td>_incentiveController</td><td>Incentive Controller of AAVE protocol. It is utilized to claim rewards from AAVE.</td></tr><tr><td>_aaveUSDOracle</td><td>The address of the AAVE token/USD oracle.</td></tr><tr><td>_tokenToDaiSwapPath</td><td>The UniswapV2 swap path from TOKEN to DAI. (TOKEN is the underlying token of <code>_cToken</code>.)</td></tr></tbody></table>

```
function cloneAndInit(
    address token,
    address _lendingPool,
    address _ns,
    uint64 _maxRewardThreshold,
    address _tokenUsdOracle,
    address _incentiveController,
    address _aaveUSDOracle,
    address[] memory _tokenToDaiSwapPath
) public;
```

There is another overloaded version of the signature:&#x20;

```
function cloneAndInit(
    address _impl,
    address token,
    address _lendingPool,
    address _ns,
    uint64 _maxRewardThreshold,
    address _tokenUsdOracle,
    address _incentiveController,
    address _aaveUSDOracle,
    address[] memory _tokenToDaiSwapPath
) public;
```

Here you can specify the `_impl` of the clone proxy.

### predictAddress

The function is to compute the address of the proxy clone of the staking contract to deploy.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_impl</td><td>The imlementation of the staking contract.</td></tr><tr><td>token</td><td>First parameter of the constructor for <code>_impl</code>. (The token to stake.)</td></tr><tr><td>paramsHash</td><td>The keccak256 hash of remaining parameters of the constructor for <code>_impl</code>.</td></tr></tbody></table>

Returns: an address of the clone to be deployed.

```
function predictAddress(
    address _impl,
    address token,
    bytes32 paramsHash
) public view returns (address);
```

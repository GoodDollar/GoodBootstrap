---
description: The staking contract that donates earned interest to the DAO.
---

# CompoundStakingFactory

The contract allow stakers to deposit Token (DAI) or withdraw their stake in Token (DAI) the contracts buy cToken (cDAI) and can transfer the daily interest to the DAO.

### Events

#### Deployed

Emitted when new clone of the Compound staking contract was deployed.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>proxy</td><td>The ERC1167 clones factory.</td></tr><tr><td>cToken</td><td>The compound token which is accepted in the deployed staking contract clone.</td></tr><tr><td>impl</td><td>The amount of claimers claims.</td></tr></tbody></table>

```
event Deployed(address proxy, address cToken, address impl);
```

### cloneAndInit

The function instantiates and initalizes an EIP 1167 proxy contract as minimal clone of the staking contract at public field `impl`.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_cToken</td><td>The compound token to be used for staking in this contract.</td></tr><tr><td>_ns</td><td>The NameService contract address which holds all the necessary addresses.</td></tr><tr><td>_maxRewardThreshold</td><td>The amount of blocks that need to pass in order to user would get their rewards with 1x multiplier instead of 0.5x.</td></tr><tr><td>_tokenUsdOracle</td><td>The address of the TOKEN/USD oracle. (TOKEN is the underlying token of <code>_cToken</code>.)</td></tr><tr><td>_compUsdOracle</td><td>The address of the AAVE/USD oracle.</td></tr><tr><td>_tokenToDaiSwapPath</td><td>The UniswapV2 swap path from TOKEN to DAI. (TOKEN is the underlying token of <code>_cToken</code>.)</td></tr></tbody></table>

```
function cloneAndInit(
    address _cToken,
    address _ns,
    uint64 _maxRewardThreshold,
    address _tokenUsdOracle,
    address _compUsdOracle,
    address[] memory _tokenToDaiSwapPath
) public;
```

There is another overloaded version of the signature:&#x20;

```
function cloneAndInit(
    address _impl,
    address _cToken,
    address _ns,
    uint64 _maxRewardThreshold,
    address _tokenUsdOracle,
    address _compUsdOracle,
    address[] memory _tokenToDaiSwapPath
) public;
```

Here you can specify the `_impl` of the clone proxy.

### predictAddress

The function is to compute the address of the proxy clone of the staking contract to deploy.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_impl</td><td>The imlementation of the staking contract.</td></tr><tr><td>cToken</td><td>First parameter of the constructor for <code>_impl</code>. (The compound token to stake.)</td></tr><tr><td>paramsHash</td><td>The keccak256 hash of remaining parameters of the constructor for <code>_impl</code>.</td></tr></tbody></table>

Returns: an address of the clone to be deployed.

```
function predictAddress(
    address _impl,
    address cToken,
    bytes32 paramsHash
) public view returns (address);
```

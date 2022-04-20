---
description: The staking contract that donates earned interest to the DAO.
---

# CompoundStakingFactory

The contract allow stakers to deposit Token (DAI) or withdraw their stake in Token (DAI) the contracts buy cToken (cDAI) and can transfer the daily interest to the DAO.

### Events

#### Deployed

Emitted when new clone of the Compound staking contract was deployed.

| Parameter name | Annotation                                                                   |
| -------------- | ---------------------------------------------------------------------------- |
| proxy          | The ERC1167 clones factory.                                                  |
| cToken         | The compound token which is accepted in the deployed staking contract clone. |
| impl           | The amount of claimers claims.                                               |

```
event Deployed(address proxy, address cToken, address impl);
```

### cloneAndInit

The function instantiates and initalizes an EIP 1167 proxy contract as minimal clone of the staking contract at public field `impl`.

| Parameter name       | Annotation                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| \_cToken             | The compound token to be used for staking in this contract.                                                         |
| \_ns                 | The NameService contract address which holds all the necessary addresses.                                           |
| \_maxRewardThreshold | The amount of blocks that need to pass in order to user would get their rewards with 1x multiplier instead of 0.5x. |
| \_tokenUsdOracle     | The address of the TOKEN/USD oracle. (TOKEN is the underlying token of `_cToken`.)                                  |
| \_compUsdOracle      | The address of the AAVE/USD oracle.                                                                                 |
| \_tokenToDaiSwapPath | The UniswapV2 swap path from TOKEN to DAI. (TOKEN is the underlying token of `_cToken`.)                            |

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

| Parameter name | Annotation                                                                     |
| -------------- | ------------------------------------------------------------------------------ |
| \_impl         | The imlementation of the staking contract.                                     |
| cToken         | First parameter of the constructor for `_impl`. (The compound token to stake.) |
| paramsHash     | The keccak256 hash of remaining parameters of the constructor for `_impl`.     |

Returns: an address of the clone to be deployed.

```
function predictAddress(
    address _impl,
    address cToken,
    bytes32 paramsHash
) public view returns (address);
```

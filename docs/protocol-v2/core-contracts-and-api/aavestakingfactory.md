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

| Parameter name | Annotation                                                          |
| -------------- | ------------------------------------------------------------------- |
| proxy          | The ERC1167 clones factory.                                         |
| token          | The token which is accepted in the deployed staking contract clone. |
| impl           | The amount of claimers claims.                                      |

```
event Deployed(address proxy, address cToken, address impl);
```

### cloneAndInit

The function instantiates and initalizes an EIP 1167 proxy contract as minimal clone of the staking contract at public field `impl`.

| Parameter name        | Annotation                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| token                 | The token to be used for staking in this contract.                                                                  |
| \_lendingPool         |                                                                                                                     |
| \_ns                  | The NameService contract address which holds all the necessary addresses.                                           |
| \_maxRewardThreshold  | The amount of blocks that need to pass in order to user would get their rewards with 1x multiplier instead of 0.5x. |
| \_tokenUsdOracle      | The address of the TOKEN/USD oracle.                                                                                |
| \_incentiveController | Incentive Controller of AAVE protocol. It is utilized to claim rewards from AAVE.                                   |
| \_aaveUSDOracle       | The address of the AAVE token/USD oracle.                                                                           |
| \_tokenToDaiSwapPath  | The UniswapV2 swap path from TOKEN to DAI. (TOKEN is the underlying token of `_cToken`.)                            |

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

| Parameter name | Annotation                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| \_impl         | The imlementation of the staking contract.                                 |
| token          | First parameter of the constructor for `_impl`. (The token to stake.)      |
| paramsHash     | The keccak256 hash of remaining parameters of the constructor for `_impl`. |

Returns: an address of the clone to be deployed.

```
function predictAddress(
    address _impl,
    address token,
    bytes32 paramsHash
) public view returns (address);
```

---
description: The utilitary library which is helping to perform swaps in Uniswap V2.
---

# UniswapV2SwapHelper

### maxSafeTokenAmount

A helper function to calculate percentage out of token liquidity in pool that is safe to exchange against sandwich attack.&#x20;

Also checks if token->Native token has better safe limit, so perhaps doing tokenA->Native token->tokenB is better than tokenA->tokenB.&#x20;

In that case it could be that Native token->tokenB can be attacked because we dont know if Native token received for tokenA->Native token is less than `_maxPercentage` of the liquidity in Native token->tokenB.&#x20;

In our use case it is always eth->dai so either it will be safe or very minimal.

| Parameter name               | Annotation                                                                                                                                                              |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_iHasRouter                 | The contract address which instance has router address.                                                                                                                 |
| \_inToken                    | The address of the token we are swapping.                                                                                                                               |
| \_outToken                   | The address of swap result token.                                                                                                                                       |
| \_inTokenAmount              | The amount of in token required to swap.                                                                                                                                |
| \_maxLiquidityPercentageSwap | Max percentage of liquidity to swap to token. When swapping tokens and this value is out of 100000, so for example if you want to set it to 0.3 you need set it to 300. |

Returns: safe amount of token that could be swapped.

```
function maxSafeTokenAmount(
    address _iHasRouter,
    address _inToken,
    address _outToken,
    uint256 _inTokenAmount,
    uint256 _maxLiquidityPercentageSwap
) public view returns (uint256 safeAmount);
```

### swap

A helper function to perform swap tokens in the Uniswap V2.

| Parameter name    | Annotation                                              |
| ----------------- | ------------------------------------------------------- |
| \_iHasRouter      | The contract address which instance has router address. |
| \_path            | The path of the swap.                                   |
| \_tokenAmount     | The token amount to swap.                               |
| \_mintTokenReturn | Minimum token amount to get in swap transaction.        |
| \_receiver        | The receiver of tokens after swap transaction.          |

Can only be called by the Avatar.

```
function swap(
    address _iHasRouter,
    address[] memory _path,
    uint256 _tokenAmount,
    uint256 _minTokenReturn,
    address _receiver
) internal returns (uint256 swapResult);
```

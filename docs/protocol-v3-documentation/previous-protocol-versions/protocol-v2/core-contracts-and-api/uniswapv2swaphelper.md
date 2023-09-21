---
description: The utilitary library which is helping to perform swaps in Uniswap V2.
---

# UniswapV2SwapHelper

### maxSafeTokenAmount

A helper function to calculate percentage out of token liquidity in pool that is safe to exchange against sandwich attack.&#x20;

Also checks if token->Native token has better safe limit, so perhaps doing tokenA->Native token->tokenB is better than tokenA->tokenB.&#x20;

In that case it could be that Native token->tokenB can be attacked because we dont know if Native token received for tokenA->Native token is less than `_maxPercentage` of the liquidity in Native token->tokenB.&#x20;

In our use case it is always eth->dai so either it will be safe or very minimal.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_iHasRouter</td><td>The contract address which instance has router address.</td></tr><tr><td>_inToken</td><td>The address of the token we are swapping.</td></tr><tr><td>_outToken</td><td>The address of swap result token.</td></tr><tr><td>_inTokenAmount</td><td>The amount of in token required to swap.</td></tr><tr><td>_maxLiquidityPercentageSwap</td><td>Max percentage of liquidity to swap to token. When swapping tokens and this value is out of 100000, so for example if you want to set it to 0.3 you need set it to 300.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_iHasRouter</td><td>The contract address which instance has router address.</td></tr><tr><td>_path</td><td>The path of the swap.</td></tr><tr><td>_tokenAmount</td><td>The token amount to swap.</td></tr><tr><td>_mintTokenReturn</td><td>Minimum token amount to get in swap transaction.</td></tr><tr><td>_receiver</td><td>The receiver of tokens after swap transaction.</td></tr></tbody></table>

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

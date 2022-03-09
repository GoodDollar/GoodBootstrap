---
description: >-
  Supporters / stakers can stake their USDC which is sent to permissionless
  protocols which earn interest. The FundManager has permissions to collect
  interest-earned from this contract.
---

# GoodAaveStaking V2 (USDC)

### Events

#### Staked

Emitted when `staker` stake `value` tokens of `token`.

| Parameter name | Annotation                        |
| -------------- | --------------------------------- |
| staker         | The address of the staker.        |
| token          | The address of the staking token. |
| value          | The value to be staked.           |

```
event Staked(address indexed staker, address token, uint256 value);
```

#### StakeWithdraw

Emitted when `staker` withdraws their stake `value` tokens of `token`.

| Parameter name | Annotation                                             |
| -------------- | ------------------------------------------------------ |
| staker         | The address of the staker.                             |
| token          | The address of the staking token that beign withdrawn. |
| value          | The value to be withdrawn.                             |

```
event StakeWithdraw(address indexed staker, address token, uint256 value);
```

#### InterestCollected

Emitted when fundmanager transfers interest collected from DeFi protrocol.

| Parameter name          | Annotation                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| recipient               | The recipient address of the interest                                                                                          |
| iTokenGains             | The amount of intereset accrued.                                                                                               |
| tokenGains              | The amount of interest worth in underlying token value.                                                                        |
| actualTokenRedeemed     | Actual token redeemed in Uniswap V2 (max 0.3% of liquidity) to token (in this case USDC).                                      |
| actualRewardTokenEarned | Actual amount of reward tokens earned.                                                                                         |
| interestCollectedInDAI  | The DAI amount of USDC tokens sent to the reserve as interest from converting token and optionally reward token in Uniswap V2. |

```
event InterestCollected(
		address recipient,
		uint256 iTokenGains,
		uint256 tokenGains,
		uint256 actualTokenRedeemed,
		uint256 actualRewardTokenEarned,
		uint256 interestCollectedInDAI
	);
```

### currentGains

Function that calculates current interest gains of this staking contract.

| Parameter name            | Annotation                                                 |
| ------------------------- | ---------------------------------------------------------- |
| \_returnTokenBalanceInUSD | Determine return token balance of staking contract in USD. |
| \_returnTokenGainsInUSD   | Determine return token gains of staking contract in USD.   |

| Return parameter name | Annotation                            |
| --------------------- | ------------------------------------- |
| iTokenGains           | Gains in iToken (in this case cUSDC). |
| tokenGains            | Gains in token (in this case USDC).   |
| tokenBalance          | Total tokens locked.                  |
| balanceInUSD          | Locked tokens worth in USD.           |
| tokenGainsInUSD       | Gains in USD.                         |

```
function currentGains(
	bool _returnTokenBalanceInUSD,
	bool _returnTokenGainsInUSD
)
	public
	view
	override
	returns (
		uint256 iTokenGains,
		uint256 tokenGains,
		uint256 tokenBalance,
		uint256 balanceInUSD,
		uint256 tokenGainsInUSD
	);
```

### stake

Allows a staker to deposit Tokens (in this case DAI). Notice that `approve` is needed to be executed before the execution of this method.

| Parameter name    | Annotation                                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| \_amount          | The amount of Token (in this case USDC) or iToken (in this case cUSDC) to stake (it depends on `_inInterestToken` parameter). |
| \_donationPer     | The % of interest staker want to donate.                                                                                      |
| \_inInterestToken | Specificy if stake in iToken (in this case cUSDC) or Token (in this case USDC).                                               |

Can be executed only when the contract is not paused.

```
function stake(
		uint256 _amount,
		uint256 _donationPer,
		bool _inInterestToken
	) external virtual;
```

### withdrawStake

Withdraws the sender staked Token (in this case USDC).

| Parameter name    | Annotation                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| \_amount          | Amount to withdraw in Token (in this case USDC) or iToken (in this case cUSDC).                                            |
| \_inInterestToken | If `true` `_amount` is in iToken (in this case cUSDC) and also returned in iToken otherwise use Token (in this case USDC). |

Can be executed only when the contract is not paused.

```
function withdrawStake(uint256 _amount, bool _inInterestToken) external virtual;
```

### withdrawRewards

Withdraw staker G$ rewards + GDAO (GOOD) rewards to the caller (staker).

```
function withdrawRewards() external;
```

### claimReputation

Withdraw staker GDAO (GOOD) rewards to the caller (staker).

```
function claimReputation() public;
```

### collectUBIInterest

Collects gained interest (in G$) by fundmanager.

| Parameter name | Annotation                                          |
| -------------- | --------------------------------------------------- |
| \_recipient    | The recipient of iToken (in this case cUSDC) gains. |

| Return parameter name     | Annotation                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| actualTokensRedeemed      | Collected interest from token.                                                                          |
| actualRewardTokenRedeemed | Collected interest from reward token.                                                                   |
| actualDai                 | Total Token (in this case USDC amount equal to DAI amount) received from swapping token + reward token. |

```
function collectUBIInterest(address _recipient)
		public
		virtual
		returns (
			uint256 actualTokenRedeemed,
			uint256 actualRewardTokenRedeemed,
			uint256 actualDai
		);
```

### getTokenValueInUSD

The function is to calculate Token (in this case USDC) price in USD.

| Parameter name | Annotation                                |
| -------------- | ----------------------------------------- |
| \_oracle       | Chainlink oracle usd/token oralce.        |
| \_amount       | Amount of Token to calculate worth of it. |
| \_decimals     | Decimals of Token.                        |

Returns: worth of Tokens in USD, the decimals are 8.

```
function getTokenValueInUSD(
		address _oracle,
		uint256 _amount,
		uint256 _decimals
	) public view returns (uint256);
```

### getUserMintedAndPending

The function that can provide information about minted and pending rewards in G$ of the `_staker`.

| Parameter name | Annotation                         |
| -------------- | ---------------------------------- |
| \_staker       | Account to get rewards status for. |

Returns: The first element of the tuple is Minted value and the second is Pending value in G$; 2 decimals.

```
function getUserMintedAndPending(address _staker)
		external
		view
		returns (uint256, uint256);
```

### getGasCostForInterestTransfer

Function to get interest transfer cost for this particular staking contract.

Returns: Gas cost in wei.

```
function getGasCostForInterestTransfer()
		external
		view
		override
		returns (uint32);
```

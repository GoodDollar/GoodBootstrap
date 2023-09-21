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

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>staker</td><td>The address of the staker.</td></tr><tr><td>token</td><td>The address of the staking token.</td></tr><tr><td>value</td><td>The value to be staked.</td></tr></tbody></table>

```
event Staked(address indexed staker, address token, uint256 value);
```

#### StakeWithdraw

Emitted when `staker` withdraws their stake `value` tokens of `token`.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>staker</td><td>The address of the staker.</td></tr><tr><td>token</td><td>The address of the staking token that beign withdrawn.</td></tr><tr><td>value</td><td>The value to be withdrawn.</td></tr></tbody></table>

```
event StakeWithdraw(address indexed staker, address token, uint256 value);
```

#### InterestCollected

Emitted when fundmanager transfers interest collected from DeFi protrocol.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>recipient</td><td>The recipient address of the interest</td></tr><tr><td>iTokenGains</td><td>The amount of intereset accrued.</td></tr><tr><td>tokenGains</td><td>The amount of interest worth in underlying token value.</td></tr><tr><td>actualTokenRedeemed</td><td>Actual token redeemed in Uniswap V2 (max 0.3% of liquidity) to token (in this case USDC).</td></tr><tr><td>actualRewardTokenEarned</td><td>Actual amount of reward tokens earned.</td></tr><tr><td>interestCollectedInDAI</td><td>The DAI amount of USDC tokens sent to the reserve as interest from converting token and optionally reward token in Uniswap V2.</td></tr></tbody></table>

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

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_returnTokenBalanceInUSD</td><td>Determine return token balance of staking contract in USD.</td></tr><tr><td>_returnTokenGainsInUSD</td><td>Determine return token gains of staking contract in USD.</td></tr></tbody></table>

<table><thead><tr><th width="278.57142857142856">Return parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>iTokenGains</td><td>Gains in iToken (in this case cUSDC).</td></tr><tr><td>tokenGains</td><td>Gains in token (in this case USDC).</td></tr><tr><td>tokenBalance</td><td>Total tokens locked.</td></tr><tr><td>balanceInUSD</td><td>Locked tokens worth in USD.</td></tr><tr><td>tokenGainsInUSD</td><td>Gains in USD.</td></tr></tbody></table>

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

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_amount</td><td>The amount of Token (in this case USDC) or iToken (in this case cUSDC) to stake (it depends on <code>_inInterestToken</code> parameter).</td></tr><tr><td>_donationPer</td><td>The % of interest staker want to donate.</td></tr><tr><td>_inInterestToken</td><td>Specificy if stake in iToken (in this case cUSDC) or Token (in this case USDC).</td></tr></tbody></table>

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

<table><thead><tr><th width="225.57142857142856">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_amount</td><td>Amount to withdraw in Token (in this case USDC) or iToken (in this case cUSDC).</td></tr><tr><td>_inInterestToken</td><td>If <code>true</code> <code>_amount</code> is in iToken (in this case cUSDC) and also returned in iToken otherwise use Token (in this case USDC).</td></tr></tbody></table>

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

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_recipient</td><td>The recipient of iToken (in this case cUSDC) gains.</td></tr></tbody></table>

<table><thead><tr><th width="278.57142857142856">Return parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>actualTokensRedeemed</td><td>Collected interest from token.</td></tr><tr><td>actualRewardTokenRedeemed</td><td>Collected interest from reward token.</td></tr><tr><td>actualDai</td><td>Total Token (in this case USDC amount equal to DAI amount) received from swapping token + reward token.</td></tr></tbody></table>

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

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_oracle</td><td>Chainlink oracle usd/token oralce.</td></tr><tr><td>_amount</td><td>Amount of Token to calculate worth of it.</td></tr><tr><td>_decimals</td><td>Decimals of Token.</td></tr></tbody></table>

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

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_staker</td><td>Account to get rewards status for.</td></tr></tbody></table>

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

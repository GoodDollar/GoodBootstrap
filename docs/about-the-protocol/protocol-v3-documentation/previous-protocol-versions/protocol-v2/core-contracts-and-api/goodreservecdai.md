---
description: >-
  The GoodReserveCDai mints G$ based on the interest transferred from the
  FundManager. Only the FundManager can trigger minting.
---

# GoodReserveCDai

The contract also acts as the GoodDollar liquidity pool and AMM (Automatic Market Maker) and enables methods to buy and sell G$s.

### Events

#### UBIMinted

Emitted when new G$ tokens are minted.

<table><thead><tr><th width="281.57142857142856">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>day</td><td>Epoch of UBI.</td></tr><tr><td>interestToken</td><td>The token paid as interest.</td></tr><tr><td>interestReceived</td><td>Wei amount of interest paid in <code>interestToken</code>.</td></tr><tr><td>gdInterestMinted</td><td>Amount of G$ tokens that was added to the supply as result of <code>mintInterest</code> function.</td></tr><tr><td>gdExpansionMinted</td><td>Amount of G$ tokens that was added to the supply as a result of <code>mintExpansion</code> function.</td></tr><tr><td>gdUbiTransferred</td><td>Amount of G$ tokens that was minted to the <code>ubiCollector</code> contract.</td></tr></tbody></table>

```
event UBIMinted(
    uint256 indexed day,
    address indexed interestToken,
    uint256 interestReceived,
    uint256 gdInterestMinted,
    uint256 gdExpansionMinted,
    uint256 gdUbiTransferred
);
```

#### TokenPurchased

Emitted when G$ tokens are purchased from the reserve.

<table><thead><tr><th width="281.57142857142856">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>caller</td><td>The initiate person of the event.</td></tr><tr><td>inputToken</td><td>The convertible token address which the G$ tokens were purchased with.</td></tr><tr><td>inputAmount</td><td>Reserve tokens amount.</td></tr><tr><td>actualReturn</td><td>Actual return of the tokens after the conversion.</td></tr><tr><td>receiverAddress</td><td>The address of the receiver of tokens.</td></tr></tbody></table>

```
event TokenPurchased(
    address indexed caller,
    address indexed inputToken,
    uint256 inputAmount,
    uint256 actualReturn,
    address indexed receiverAddress
);
```

#### TokenSold

Emitted when G$ tokens are sold to the reserve.

<table><thead><tr><th width="281.57142857142856">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>caller</td><td>The initiate person of the event.</td></tr><tr><td>outputToken</td><td>The convertible token address which the G$ tokens were sold to.</td></tr><tr><td>gdAmount</td><td>Reserve tokens amount.</td></tr><tr><td>contributionAmount</td><td>Actual return of the tokens after the conversion.</td></tr><tr><td>actualReturn</td><td>The address of the receiver of tokens.</td></tr><tr><td>receiverAddress</td><td>The address of the receiver of the tokens.</td></tr></tbody></table>

```
event TokenSold(
	address indexed caller,
	address indexed outputToken,
	uint256 gdAmount,
	uint256 contributionAmount,
	uint256 actualReturn,
	address indexed receiverAddress
);
```

### buy

Converts cDai tokens to GD tokens and updates the bonding curve params. The `buy` occurs only if the G$ return is above the given minimum. It is possible to buy only with cDAI and when the contract is set to active. MUST call to cDAI `approve` prior this action to allow this contract to accomplish the conversion.

| Parameter name  | Annotation                                                       |
| --------------- | ---------------------------------------------------------------- |
| \_tokenAmount   | The amount of cDAI tokens that should be converted to G$ tokens. |
| \_minReturn     | The minimum allowed return in G$ tokens.                         |
| \_targetAddress | Address of G$ and GOOD recipient if different than `msg.sender`. |

Returns: How much G$ tokens were transferred.

```
function buy(
    uint256 _tokenAmount,
    uint256 _minReturn,
    address _targetAddress
) external returns (uint256);
```

### sell

The `sell` helper function burns G$ tokens and update the bonding curve params. The `sell` occurs only if the token return is above the given minimum. Notice that there is a contribution amount from the given GD that remains in the reserve.

<table><thead><tr><th width="181.24390236164845">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_gdAmount</td><td>The amount of GD tokens that should be converted to cDAI tokens.</td></tr><tr><td>_minReturn</td><td>The minimum allowed amount of cDAI tokens to return.</td></tr><tr><td>_target</td><td>Address of the receiver of cDAI when sell G$.</td></tr><tr><td>_seller</td><td>Address of the seller when using helper contract.</td></tr></tbody></table>

Returns: The tuple of two: cDAI received amount and G$ exit contribution.

```
function sell(
		uint256 _gdAmount,
		uint256 _minReturn,
		address _target,
		address _seller
	) external returns (uint256, uint256);
```

### mintRewardFromRR

Mint rewards for staking contracts in G$ and update RR requires minting permissions which is enforced by [`_mintGoodDollars`](https://github.com/GoodDollar/GoodProtocol/blob/master/contracts/reserve/GoodReserveCDai.sol#L305) function.

<table><thead><tr><th width="181.24390236164845">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_token</td><td>The amount of GD tokens that should be converted to cDAI tokens.</td></tr><tr><td>_to</td><td>The minimum allowed amount of cDAI tokens to return.</td></tr><tr><td>_amount</td><td>Address of the receiver of cDAI when sell G$.</td></tr></tbody></table>

Returns: The tuple of two: cDAI received amount and G$ exit contribution.

```
function mintRewardFromRR(
		address _token,
		address _to,
		uint256 _amount
	) public;
```

### mintUBI

Only FundManager or other with mint G$ permission can call this to trigger minting. Reserve sends UBI + interest to FundManager.

<table><thead><tr><th width="181.24390236164845">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_daiToConvert</td><td>DAI amount to convert cDAI.</td></tr><tr><td>_startingCDAIBalance</td><td>Initial cDAI balance before staking collect process start.</td></tr><tr><td>_interestToken</td><td>The token that was transfered to the reserve.</td></tr></tbody></table>

Returns: The tuple of two: how much GD UBI was minted and how much cDAI collected from staking contracts.

```
function mintUBI(
		uint256 _daiToConvert,
		uint256 _startingCDAIBalance,
		ERC20 _interestToken
	) public returns (uint256, uint256)
```

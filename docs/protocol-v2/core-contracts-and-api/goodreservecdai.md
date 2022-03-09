---
description: >-
  The GoodReserveCDai mints G$ based on the interest transferred from the
  FundManager. Only the FundManager can trigger minting.
---

# GoodReserveCDai

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

| Parameter name | Annotation                                                       |
| -------------- | ---------------------------------------------------------------- |
| \_gdAmount     | The amount of GD tokens that should be converted to cDAI tokens. |
| \_minReturn    | The minimum allowed amount of cDAI tokens to return.             |
| \_target       | Address of the receiver of cDAI when sell G$.                    |
| \_seller       | Address of the seller when using helper contract.                |

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

| Parameter name | Annotation                                                       |
| -------------- | ---------------------------------------------------------------- |
| \_token        | The amount of GD tokens that should be converted to cDAI tokens. |
| \_to           | The minimum allowed amount of cDAI tokens to return.             |
| \_amount       | Address of the receiver of cDAI when sell G$.                    |

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

| Parameter name        | Annotation                                                 |
| --------------------- | ---------------------------------------------------------- |
| \_daiToConvert        | DAI amount to convert cDAI.                                |
| \_startingCDAIBalance | Initial cDAI balance before staking collect process start. |
| \_interestToken       | The token that was transfered to the reserve.              |

Returns: The tuple of two: how much GD UBI was minted and how much cDAI collected from staking contracts.

```
function mintUBI(
		uint256 _daiToConvert,
		uint256 _startingCDAIBalance,
		ERC20 _interestToken
	) public returns (uint256, uint256)
```



\=========================================================

The GoodReserveCDai also acts as the GoodDollar liquidity pool and AMM (Automatic Market Maker) and enables methods to buy and sell G$s.

```
/**
 * @dev Converts cDai tokens to GD tokens and updates the bonding curve params.
 * `buy` occurs only if the GD return is above the given minimum. It is possible
 * to buy only with cDAI and when the contract is set to active. MUST call to
 * cDAI `approve` prior this action to allow this contract to accomplish the
 * conversion.
 * @param _tokenAmount The amount of cDAI tokens that should be converted to GD tokens
 * @param _minReturn The minimum allowed return in GD tokens
 * @param _targetAddress address of g$ and gdx recipient if different than msg.sender
 * @return (gdReturn) How much GD tokens were transferred
 */
function buy(
	uint256 _tokenAmount,
	uint256 _minReturn,
	address _targetAddress
) external returns (uint256);

/**
 * @dev sell helper function burns GD tokens and update the bonding curve params.
 * `sell` occurs only if the token return is above the given minimum. Notice that
 * there is a contribution amount from the given GD that remains in the reserve.
 * @param _gdAmount The amount of GD tokens that should be converted to cDAI tokens
 * @param _minReturn The minimum allowed `sellTo` tokens return
 * @param _target address of the receiver of cDAI when sell G$
 * @param _seller address of the seller when using helper contract
 * @return (tokenReturn, contribution) (cDAI received, G$ exit contribution)
 */
function sell(
	uint256 _gdAmount,
	uint256 _minReturn,
	address _target,
	address _seller
) external returns (uint256, uint256);

/**
 * @dev Current price of GD in cDAI.
 * @return price of GD
 */
function currentPrice() public view returns (uint256) {
	return getMarketMaker().currentPrice(ERC20(cDaiAddress));
}
```

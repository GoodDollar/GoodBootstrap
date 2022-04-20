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

| Parameter name    | Annotation                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------- |
| day               | Epoch of UBI.                                                                             |
| interestToken     | The token paid as interest.                                                               |
| interestReceived  | Wei amount of interest paid in `interestToken`.                                           |
| gdInterestMinted  | Amount of G$ tokens that was added to the supply as result of `mintInterest` function.    |
| gdExpansionMinted | Amount of G$ tokens that was added to the supply as a result of `mintExpansion` function. |
| gdUbiTransferred  | Amount of G$ tokens that was minted to the `ubiCollector` contract.                       |

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

| Parameter name  | Annotation                                                             |
| --------------- | ---------------------------------------------------------------------- |
| caller          | The initiate person of the event.                                      |
| inputToken      | The convertible token address which the G$ tokens were purchased with. |
| inputAmount     | Reserve tokens amount.                                                 |
| actualReturn    | Actual return of the tokens after the conversion.                      |
| receiverAddress | The address of the receiver of tokens.                                 |

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

| Parameter name     | Annotation                                                      |
| ------------------ | --------------------------------------------------------------- |
| caller             | The initiate person of the event.                               |
| outputToken        | The convertible token address which the G$ tokens were sold to. |
| gdAmount           | Reserve tokens amount.                                          |
| contributionAmount | Actual return of the tokens after the conversion.               |
| actualReturn       | The address of the receiver of tokens.                          |
| receiverAddress    | The address of the receiver of the tokens.                      |

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

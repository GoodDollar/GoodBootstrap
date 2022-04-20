---
description: >-
  Helper contract to buy/sell G$ at GoodReserve with any token supported by
  Uniswap V2. Since reserve only supports cDAI.
---

# ExchangeHelper

### Events

#### TokenPurchased

Emitted when G$ tokens are purchased.

| Parameter name  | Annotation                                                             |
| --------------- | ---------------------------------------------------------------------- |
| caller          | The address who initiated the action.                                  |
| inputToken      | The convertible token address which the G$ tokens were purchased with. |
| inputAmount     | Reserve tokens amount.                                                 |
| actualReturn    | Actual return after the conversion.                                    |
| receiverAddress | Address of the receiver of the tokens.                                 |

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

Emitted when G$ tokens are sold.

| Parameter name     | Annotation                                                          |
| ------------------ | ------------------------------------------------------------------- |
| caller             | The address who initiated the action.                               |
| outputToken        | The convertible token address which the G$ tokens were sold to.     |
| gdAmount           | The G$ tokens amount.                                               |
| contributionAmount | The amount of G$ tokens that was contributed during the conversion. |
| actualReturn       | Actual return after the conversion.                                 |
| receiverAddress    | Address of the receiver of tokens.                                  |

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

The function converts any "buyWith" tokens to DAI. Then call to reserve's buy function is occured. It is to convert the tokens to G$ tokens.

| Parameter name  | Annotation                                                                                                           |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| \_buyPath       | The tokens swap path in order to buy G$ if initial token is not DAI or cDAI. The end of the path must be set to DAI. |
| \_tokenAmount   | The amount of "buyWith" tokens that should be converted to G$ tokens.                                                |
| \_minReturn     | The minimum allowed return in G$ tokens.                                                                             |
| \_minDAIAmount  | The minimum DAI out amount from Exchange swap function.                                                              |
| \_targetAddress | The address of G$ and GDX recipient if different than `msg.sender`.                                                  |

Returns: how much G$ tokens were transferred.

```
function buy(
    address[] memory _buyPath,
    uint256 _tokenAmount,
    uint256 _minReturn,
    uint256 _minDAIAmount,
    address _targetAddress
) public payable returns (uint256);
```

### sell

The function converts G$ tokens to cDAI through reserve then it makes further transactions according to desired `_sellTo` token. The user could either send cDAI or DAI directly or desired token through Uniswap V2.

| Parameter name   | Annotation                                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| \_sellPath       | The tokens swap path in order to sell G$ to target token. If target token is not DAI or cDAI then first element of the path must be DAI. |
| \_gdAmount       | The amount of G$ tokens that should be converted to "\_sellTo" tokens.                                                                   |
| \_minReturn      | The minimum allowed "sellTo" tokens return.                                                                                              |
| \_minTokenReturn | The mininmum DAI out amount from Exchange swap function.                                                                                 |
| \_targetAddress  | The address of "\_sellTo" token recipient if different than `msg.sender`.                                                                |

Returns: how much "sellTo" tokens were transferred.

```
function sell(
    address[] memory _sellPath,
    uint256 _gdAmount,
    uint256 _minReturn,
    uint256 _minTokenReturn,
    address _targetAddress
) public returns (uint256);
```

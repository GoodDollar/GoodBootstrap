---
description: >-
  Helper contract to buy/sell G$ at GoodReserve with any token supported by
  Uniswap V2. Since reserve only supports cDAI.
---

# ExchangeHelper

### Events

#### TokenPurchased

Emitted when G$ tokens are purchased.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>caller</td><td>The address who initiated the action.</td></tr><tr><td>inputToken</td><td>The convertible token address which the G$ tokens were purchased with.</td></tr><tr><td>inputAmount</td><td>Reserve tokens amount.</td></tr><tr><td>actualReturn</td><td>Actual return after the conversion.</td></tr><tr><td>receiverAddress</td><td>Address of the receiver of the tokens.</td></tr></tbody></table>

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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>caller</td><td>The address who initiated the action.</td></tr><tr><td>outputToken</td><td>The convertible token address which the G$ tokens were sold to.</td></tr><tr><td>gdAmount</td><td>The G$ tokens amount.</td></tr><tr><td>contributionAmount</td><td>The amount of G$ tokens that was contributed during the conversion.</td></tr><tr><td>actualReturn</td><td>Actual return after the conversion.</td></tr><tr><td>receiverAddress</td><td>Address of the receiver of tokens.</td></tr></tbody></table>

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

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_buyPath</td><td>The tokens swap path in order to buy G$ if initial token is not DAI or cDAI. The end of the path must be set to DAI.</td></tr><tr><td>_tokenAmount</td><td>The amount of "buyWith" tokens that should be converted to G$ tokens.</td></tr><tr><td>_minReturn</td><td>The minimum allowed return in G$ tokens.</td></tr><tr><td>_minDAIAmount</td><td>The minimum DAI out amount from Exchange swap function.</td></tr><tr><td>_targetAddress</td><td>The address of G$ and GDX recipient if different than <code>msg.sender</code>.</td></tr></tbody></table>

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

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_sellPath</td><td>The tokens swap path in order to sell G$ to target token. If target token is not DAI or cDAI then first element of the path must be DAI.</td></tr><tr><td>_gdAmount</td><td>The amount of G$ tokens that should be converted to "_sellTo" tokens.</td></tr><tr><td>_minReturn</td><td>The minimum allowed "sellTo" tokens return.</td></tr><tr><td>_minTokenReturn</td><td>The mininmum DAI out amount from Exchange swap function.</td></tr><tr><td>_targetAddress</td><td>The address of "_sellTo" token recipient if different than <code>msg.sender</code>.</td></tr></tbody></table>

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

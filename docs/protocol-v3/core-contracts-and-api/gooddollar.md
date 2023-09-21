---
description: >-
  The GoodDollar G$ token follows the ERC-20 token standard and also supports
  ERC-677.
---

# GoodDollar

### Events

#### Transfer

Emitted when `value` tokens are moved from one account (`from`) to another (`to`).

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>from</td><td>The address from which tokens are moved.</td></tr><tr><td>to</td><td>The address to which tokens are moved.</td></tr><tr><td>value</td><td>The value to be processed and then transferred.</td></tr></tbody></table>

Note that `value` may be zero.

```
event Transfer(address indexed from, address indexed to, uint256 value);
```

#### Approval

Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>owner</td><td>The address of the tokens owner.</td></tr><tr><td>spender</td><td>The address which can spend tokens in allowance.</td></tr><tr><td>value</td><td>The tokens amount to be spent on behave of the tokens owner.</td></tr></tbody></table>

```
event Approval(address indexed owner, address indexed spender, uint256 value);
```

### transfer

Processes fees from given value and sends remainder to given address.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>to</td><td>The address to be sent to.</td></tr><tr><td>value</td><td>The value to be processed and then transferred.</td></tr></tbody></table>

Returns: a boolean that indicates if the operation was successful.

```
function transfer(address to, uint256 value) public returns (bool);
```

### approve

Approve the passed address to spend the specified amount of tokens on behalf of `msg.sender`.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>spender</td><td>The address which will spend the funds.</td></tr><tr><td>value</td><td>The amount of tokens to be spent.</td></tr></tbody></table>

Returns: a boolean that indicates if the operation was successful.

```
function approve(address spender, uint256 value) public returns (bool);
```

### transferFrom

Transfer tokens from one address to another on behalf of the third party as `msg.sender`.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>from</td><td>The address which you want to send tokens from.</td></tr><tr><td>to</td><td>The address which you want to transfer to.</td></tr><tr><td>value</td><td>The amount of tokens to be transferred.</td></tr></tbody></table>

Returns: a boolean that indicates if the operation was successful.

```
function transferFrom(
        address from,
        address to,
        uint256 value
    ) public returns (bool);
```

### transferAndCall

Processes transfer fees and calls ERC677Token transferAndCall function.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>from</td><td>The address to transfer to.</td></tr><tr><td>value</td><td>The amount to transfer.</td></tr><tr><td>data</td><td>The data to be used in further execution according to ERC677.</td></tr></tbody></table>

Returns: a boolean that indicates if the operation was successful.

```
function transferAndCall(
        address to,
        uint256 value,
        bytes calldata data
    ) external returns (bool);
```

### mint

Minting function.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>to</td><td>The address that will receive the minted tokens. Must be out of blocklist. The blocklist is managed by the administrator of the contract.</td></tr><tr><td>value</td><td>Value the amount of tokens to mint.</td></tr></tbody></table>

Who can execute: An address who is in minter role.

Returns: a boolean that indicates if the operation was successful.

```
function mint(address to, uint256 value) public;
```

### burn

Burns a specific amount of tokens.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>value</td><td>The amount of token to be burned..</td></tr></tbody></table>

Who can execute: An address who is not blocklisted by the administration.

```
function burn(uint256 value) public;
```

### burnFrom

Burns a specific amount of tokens from the target address and decreases an allowance.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>from</td><td>The address which you want to burn tokens from. Must not be in blocklist.</td></tr><tr><td>value</td><td>The amount of token to be burned.</td></tr></tbody></table>

Who can execute: An address who is not blocklisted by the administration.

```
function burnFrom(address from, uint256 value) public;
```

### increaseAllowance

Increase the amount of tokens that an owner allows a spender.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>spender</td><td>The address which will spend the funds.</td></tr><tr><td>addedValue</td><td>The amount of tokens to increase the allowance by.</td></tr></tbody></table>

Returns: a boolean that indicates if the operation was successful.

```
function increaseAllowance(address spender, uint256 addedValue) public returns (bool);
```

### decreaseAllowance

Decrease the amount of tokens that an owner allowed to a spender.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>spender</td><td>The address which will spend the funds.</td></tr><tr><td>subtractedValue</td><td>The amount of tokens to decrease the allowance by.</td></tr></tbody></table>

Returns: a boolean that indicates if the operation was successful.

```
function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool);
```

### getFees

Gets the current transaction fees.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>value</td><td>Value the amount of tokens to mint.</td></tr></tbody></table>

Returns: tuple of `uint256` and `bool`, first is an absolute amount of fees based on value and the second is whether `msg.sender` paying or not.

```
function getFees(uint256 value) public view returns (uint256, bool);
```



### setFeeRecipient

Sets the address that receives the transactional fees.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_feeRecipient</td><td>The new address to receive transactional fees.</td></tr></tbody></table>

Who can execute: An adminstrator only.

```
function setFeeRecipient(address _feeRecipient) public;
```

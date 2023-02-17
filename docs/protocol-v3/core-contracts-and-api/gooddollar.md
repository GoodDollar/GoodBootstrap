---
description: >-
  The GoodDollar G$ token follows the ERC-20 token standard and also supports
  ERC-677.
---

# GoodDollar

### Events

#### Transfer

Emitted when `value` tokens are moved from one account (`from`) to another (`to`).

| Parameter name | Annotation                                      |
| -------------- | ----------------------------------------------- |
| from           | The address from which tokens are moved.        |
| to             | The address to which tokens are moved.          |
| value          | The value to be processed and then transferred. |

Note that `value` may be zero.

```
event Transfer(address indexed from, address indexed to, uint256 value);
```

#### Approval

Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.

| Parameter name | Annotation                                                   |
| -------------- | ------------------------------------------------------------ |
| owner          | The address of the tokens owner.                             |
| spender        | The address which can spend tokens in allowance.             |
| value          | The tokens amount to be spent on behave of the tokens owner. |

```
event Approval(address indexed owner, address indexed spender, uint256 value);
```

### transfer

Processes fees from given value and sends remainder to given address.

| Parameter name | Annotation                                      |
| -------------- | ----------------------------------------------- |
| to             | The address to be sent to.                      |
| value          | The value to be processed and then transferred. |

Returns: a boolean that indicates if the operation was successful.

```
function transfer(address to, uint256 value) public returns (bool);
```

### approve

Approve the passed address to spend the specified amount of tokens on behalf of `msg.sender`.

| Parameter name | Annotation                              |
| -------------- | --------------------------------------- |
| spender        | The address which will spend the funds. |
| value          | The amount of tokens to be spent.       |

Returns: a boolean that indicates if the operation was successful.

```
function approve(address spender, uint256 value) public returns (bool);
```

### transferFrom

Transfer tokens from one address to another on behalf of the third party as `msg.sender`.

| Parameter name | Annotation                                      |
| -------------- | ----------------------------------------------- |
| from           | The address which you want to send tokens from. |
| to             | The address which you want to transfer to.      |
| value          | The amount of tokens to be transferred.         |

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

| Parameter name | Annotation                                                    |
| -------------- | ------------------------------------------------------------- |
| from           | The address to transfer to.                                   |
| value          | The amount to transfer.                                       |
| data           | The data to be used in further execution according to ERC677. |

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

| Parameter name | Annotation                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| to             | The address that will receive the minted tokens. Must be out of blocklist. The blocklist is managed by the administrator of the contract. |
| value          | Value the amount of tokens to mint.                                                                                                       |

Who can execute: An address who is in minter role.

Returns: a boolean that indicates if the operation was successful.

```
function mint(address to, uint256 value) public;
```

### burn

Burns a specific amount of tokens.

| Parameter name | Annotation                         |
| -------------- | ---------------------------------- |
| value          | The amount of token to be burned.. |

Who can execute: An address who is not blocklisted by the administration.

```
function burn(uint256 value) public;
```

### burnFrom

Burns a specific amount of tokens from the target address and decreases an allowance.

| Parameter name | Annotation                                                                |
| -------------- | ------------------------------------------------------------------------- |
| from           | The address which you want to burn tokens from. Must not be in blocklist. |
| value          | The amount of token to be burned.                                         |

Who can execute: An address who is not blocklisted by the administration.

```
function burnFrom(address from, uint256 value) public;
```

### increaseAllowance

Increase the amount of tokens that an owner allows a spender.

| Parameter name | Annotation                                         |
| -------------- | -------------------------------------------------- |
| spender        | The address which will spend the funds.            |
| addedValue     | The amount of tokens to increase the allowance by. |

Returns: a boolean that indicates if the operation was successful.

```
function increaseAllowance(address spender, uint256 addedValue) public returns (bool);
```

### decreaseAllowance

Decrease the amount of tokens that an owner allowed to a spender.

| Parameter name  | Annotation                                         |
| --------------- | -------------------------------------------------- |
| spender         | The address which will spend the funds.            |
| subtractedValue | The amount of tokens to decrease the allowance by. |

Returns: a boolean that indicates if the operation was successful.

```
function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool);
```

### getFees

Gets the current transaction fees.

| Parameter name | Annotation                          |
| -------------- | ----------------------------------- |
| value          | Value the amount of tokens to mint. |

Returns: tuple of `uint256` and `bool`, first is an absolute amount of fees based on value and the second is whether `msg.sender` paying or not.

```
function getFees(uint256 value) public view returns (uint256, bool);
```



### setFeeRecipient

Sets the address that receives the transactional fees.

| Parameter name | Annotation                                     |
| -------------- | ---------------------------------------------- |
| \_feeRecipient | The new address to receive transactional fees. |

Who can execute: An adminstrator only.

```
function setFeeRecipient(address _feeRecipient) public;
```

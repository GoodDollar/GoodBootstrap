---
description: Payments on the GoodDollar wallet are done via payment links.
---

# OneTimePayments

G$s are held in an escrow and the recipient can retrieve the funds if he has the key. While the money is in escrow the sender can choose to cancel the payment and retrieve the funds. Based on [Celo's](https://github.com/celo) payments contract.

### Events

#### PaymentDeposit

Emitted when payment was performed. Occurs only during the token contract call.

| Parameter name | Annotation                                     |
| -------------- | ---------------------------------------------- |
| from           | The address of the tokens sender.              |
| paymentId      | The address representing an ID of the payment. |
| amount         | Amount of the payment.                         |

```
event PaymentDeposit(address indexed from, address paymentId, uint256 amount);
```

To deposit a payment to a one time payment address call perform the further:

```
GoodDollar.transferAndCall(value, data);
```

The above will trigger OneTimePayments onTokenTransfer callback, which will trigger the PaymentDeposit.

#### PaymentCancel

Emitted when payment was cancelled.

| Parameter name | Annotation                                     |
| -------------- | ---------------------------------------------- |
| from           | The address of the tokens sender.              |
| paymentId      | The address representing an ID of the payment. |
| amount         | Amount of the payment.                         |

```
event PaymentCancel(address indexed from, address paymentId, uint256 amount);
```

#### PaymentWithdraw

Emitted when payment was withdrawn.

| Parameter name | Annotation                                     |
| -------------- | ---------------------------------------------- |
| from           | The address of the tokens sender.              |
| to             | The address of the tokens receiver.            |
| paymentId      | The address representing an ID of the payment. |
| amount         | Amount of the payment.                         |

```
event PaymentWithdraw(
    address indexed from,
    address indexed to,
    address indexed paymentId,
    uint256 amount
);
```

### withdraw

Withdrawal function.

| Parameter name | Annotation                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------- |
| paymentId      | The address of the public key that the rightful receiver of the payment knows the private key to. |
| signature      | The signature of a the message containing the `msg.sender` address signed with the private key.   |

```
function withdraw(address paymentId, bytes memory signature) public;
```

### cancel

Payments cancel function.

| Parameter name | Annotation                       |
| -------------- | -------------------------------- |
| \_paymentId    | The ID of the payment to cancel. |

Allows only creator of payment to cancel.

```
function cancel(address paymentId) public;
```

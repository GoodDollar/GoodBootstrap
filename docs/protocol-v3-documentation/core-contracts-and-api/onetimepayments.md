---
description: Payments on the GoodDollar wallet are done via payment links.
---

# OneTimePayments

G$s are held in an escrow and the recipient can retrieve the funds if he has the key. While the money is in escrow the sender can choose to cancel the payment and retrieve the funds. Based on [Celo's](https://github.com/celo) payments contract.

### Events

#### PaymentDeposit

Emitted when payment was performed. Occurs only during the token contract call.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>from</td><td>The address of the tokens sender.</td></tr><tr><td>paymentId</td><td>The address representing an ID of the payment.</td></tr><tr><td>amount</td><td>Amount of the payment.</td></tr></tbody></table>

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

<table><thead><tr><th width="223.06025121092682">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>from</td><td>The address of the tokens sender.</td></tr><tr><td>paymentId</td><td>The address representing an ID of the payment.</td></tr><tr><td>amount</td><td>Amount of the payment.</td></tr></tbody></table>

```
event PaymentCancel(address indexed from, address paymentId, uint256 amount);
```

#### PaymentWithdraw

Emitted when payment was withdrawn.

<table><thead><tr><th width="223.06025121092682">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>from</td><td>The address of the tokens sender.</td></tr><tr><td>to</td><td>The address of the tokens receiver.</td></tr><tr><td>paymentId</td><td>The address representing an ID of the payment.</td></tr><tr><td>amount</td><td>Amount of the payment.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>paymentId</td><td>The address of the public key that the rightful receiver of the payment knows the private key to.</td></tr><tr><td>signature</td><td>The signature of a the message containing the <code>msg.sender</code> address signed with the private key.</td></tr></tbody></table>

```
function withdraw(address paymentId, bytes memory signature) public;
```

### cancel

Payments cancel function.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_paymentId</td><td>The ID of the payment to cancel.</td></tr></tbody></table>

Allows only creator of payment to cancel.

```
function cancel(address paymentId) public;
```

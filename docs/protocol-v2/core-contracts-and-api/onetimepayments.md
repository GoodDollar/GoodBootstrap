---
description: Payments on the GoodDollar wallet are done via payment links.
---

# OneTimePayments

G$s are held in escrow and the recipient can retrieve the funds if he has the key. While the money is in escrow the sender can choose to cancel the payment and retrieve the funds. Based on [Celo's](https://github.com/celo) payments contract.

```
/* 
* @dev ERC677 on token transfer function. When transferAndCall is called on this contract,
 * this function is called, depositing the payment amount under the hash of the given bytes.
 * Reverts if hash is already in use. Can only be called by token contract.
 * @param sender the address of the sender
 * @param value the amount to deposit
 * @param data The given paymentId which should be a fresh public key
 */

to deposit a payment to a one time payment address call:
GoodDollar.transferAndCall(value,data) this will trigger OneTimePayments onTokenTransfer

/* @dev Withdrawal function.
 * allows the sender that proves ownership of paymentId to withdraw
 * @param paymentId the address of the public key that the
 *   rightful receiver of the payment knows the private key to
 * @param signature the signature of a the message containing the msg.sender address signed
 *   with the private key.
 */
function withdraw(address paymentId, bytes memory signature) public onlyRegistered

/* @dev Cancel function
 * allows only creator of payment to cancel
 * @param paymentId The paymentId of the payment to cancelæ
 */
function cancel(address paymentId) public
```

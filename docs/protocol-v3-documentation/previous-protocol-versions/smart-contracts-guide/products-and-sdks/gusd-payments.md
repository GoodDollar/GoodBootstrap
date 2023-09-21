---
description: >-
  G$ wallet works using payment links. Any vendor can create a simple payment
  request link that can be used on its website to start the payment process.
---

# G$ Payments

G$ wallet works using payment links. Any vendor can create a simple payment request link that can be used on its website to start the payment process.

### Payment Flow

* User press on payment link on vendor website
* GoodDollar wallet is opened with a confirmation screen showing payment details
* Once user confirms, wallet sends transaction details via callback url defined by the vendor
* vendor website upon receiving response via callback closes the wallet window and continues the checkout flow&#x20;

### Generating The Payment Link

The payment link has the form of:

{% hint style="info" %}
https://wallet.gooddollar.org/?code=\<safebase64encodedparams>
{% endhint %}

The code parameter is a base64 encoded object with the following fields

```
Code: {
    m: string, //MNID encoded wallet address to receive payment
    a: number, //amount of payment
    r: string, //reason for payment
    cat: Catergoy,//payment category
    ven: Vendor //object vendor details,
  }

Category: Enum {
 DigitalServices = 1
 SocialMedia = 2
 Product = 3
 Course = 4
 Donation = 5
 Other = 6
}

Vendor: {
    cbu: url //callback url
    ind: string //invoice id
    web: url //vendor website
    ven: string //vendor name
    d: string //extra data for transferAndCall
}

```

Example:

```
const params = {
 m:'3dMkyEZ1QFLwi2aoUNkfV6B8Xe5s5eFw2nd',
 a: 25.3,
 r: 'The Commonists Manifesto',
 cat: 3,
 ven: {
   cbu: 'https://bookstore.xyz/backend/paymentcall',
   ind: '1234-urg',
   web: 'https://bookstore.xyz',
   ven: 'The Commons',
   d:'this can be read from the ERC677 Transfer event',
 }
}
```

Next, to encode it, you can run the following javascript code:

```
encodeURIComponent(btoa(JSON.stringify(params)))
```

The final payment link would be: `https://wallet.gooddollar.org/?code=eyJtIjoiM2RNa3lFWjFRRkx3aTJhb1VOa2ZWNkI4WGU1czVlRncybmQiLCJhIjoyNS4zLCJyIjoiVGhlIENvbW1vbmlzdHMgTWFuaWZlc3RvIiwiY2F0IjozLCJ2ZW4iOnsiY2J1IjoiaHR0cHM6Ly9ib29rc3RvcmUueHl6L2JhY2tlbmQvcGF5bWVudGNhbGwiLCJpbmQiOiIxMjM0LXVyZyIsIndlYiI6Imh0dHBzOi8vYm9va3N0b3JlLnh5eiIsInZlbiI6IlRoZSBDb21tb25zIiwiZCI6InRoaXMgY2FuIGJlIHJlYWQgZnJvbSB0aGUgRVJDNjc3IFRyYW5zZmVyIGV2ZW50In19`

### Handling Callback Response From Wallet

The wallet will send a `POST` request to the callback url defined in the `ven.cbu` field.

{% hint style="info" %}
Make sure your endpoint handles POST requests
{% endhint %}

The POST request send a JSON object with:

* invoiceId: specified by the vendor in `ven.ind` field
* transactionId: the transaction hash of the payment on the Fuse blockchain

```
{ invoiceId: '123-udg', transactionId: '0x3593.....0374' }
```

### Verifying The Payment On The Fuse Blockchain

It is recommended to verify that the transactionId reported by the wallet did happen and that it matches the payment details.

Use any web3 library to read the events from the transaction.&#x20;

The contract event ABI is: (See [Smart Contracts ](../#gooddollar-token-gusd)to get the G$ token contract address)

```
["Transfer(indexed address from,indexed address to,uint256 value,bytes data)"]
```

The last `data` field will contain the data supplied in the extra data field, if that field is omitted or empty then it will contain the data supplied in the invoice id field. This way you can verify that the transaction matches the specific payment.

{% hint style="info" %}
Verify that the fields _to_, _value_ and _data_ match what you expect for the payment to prevent fraud.
{% endhint %}

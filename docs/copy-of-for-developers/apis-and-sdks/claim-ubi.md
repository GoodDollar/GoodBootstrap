---
description: >-
  Every verified person is eligible to claim daily free UBI in the form of G$
  tokens.
---

# Claim UBI

Make sure user wallet is whitelisted, see [Identity](../../for-developers/apis-and-sdks/identity-sybil-resistance.md).

First, create the SDK.\
The first argument should be an ethers Web3Provider, since the user will need to sign transactions.\
Second argument is which environment and chain contract set to use.\


{% hint style="info" %}
Every user can claim every day from every chain that has a UBI pool
{% endhint %}

```typescript
import { ClaimSDK } from "@gooddollar/web3sdk-v2"

const sdk = new ClaimSDK(web3provider, "production" | "production-celo")
```

Check if the user is currently eligible to claim today:

```typescript
const claimAmount = await sdk.checkEntitlement() // if claimAmount > 0 user can claim
```

Then, perform claim:

```typescript
await sdk.claim()
```

You can also get the next `Date` when the user will be eligible to claim again

```typescript
const nextClaimTime = await sdk.getNextClaimTime()
```

### React hooks

You can also use our react hooks to manage claim.

See the Claim/Identity react hooks code [here](https://github.com/GoodDollar/GoodWeb3-Mono/blob/master/packages/sdk-v2/src/sdk/claim/react.ts).\
Storybook examples [here](https://github.com/GoodDollar/GoodWeb3-Mono/tree/master/packages/sdk-v2/src/stories/claim).\
You will need to first setup our context provider as explained [here](../../for-developers/apis-and-sdks/react-hooks-setup.md).



#### Need a hand?

Fill out this form to request support:

{% embed url="http://gooddollar.typeform.com/builders" %}

# React Hooks Setup

We write our components in react-native-web so they are compatible with both web and mobile platforms.

\
We use the following packages for the web3 react experience:

* native-base
* react-native-web
* useDapp
* ethers

To use the react hooks SDK, you'll need to make sure you have the following installed:

```sh
yarn install @usedapp/core ethers react-native-async-storage/async-storage react react-native react-native-web

```

Then, you'll need to create a context provider which is a wrapper around[ useDapp context provider](https://usedapp-docs.netlify.app/docs/api%20reference/providers/#dappprovider):

```jsx
import { Celo, Fuse, Web3Provider, AsyncStorage } from '@gooddollar/web3sdk-v2'
import { Goerli, Mainnet } from '@usedapp/core'

...
...

const contractsEnv = "production"
..

return (<Web3Provider
                web3Provider={webprovider}
                env={contractsEnv}
                config={{
                    pollingInterval: 15000,
                    networks: [Goerli, Mainnet, Fuse, Celo],
                    readOnlyChainId: undefined,
                    readOnlyUrls: {
                        1: 'https://rpc.ankr.com/eth',
                        122: 'https://rpc.fuse.io',
                        42220: 'https://forno.celo.org',
                    },
                }}
            >
                {children}
</Web3Provider>)
```

#### Need a hand?

Fill out this form to request support:

{% embed url="http://gooddollar.typeform.com/builders" %}

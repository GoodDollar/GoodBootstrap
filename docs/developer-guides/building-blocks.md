---
description: >-
  Common components meant to be used across the app, this components ensure
  consistency and helps to make changes and further development faster.
---

# Building Blocks

There are a[ list of several common](https://github.com/GoodDollar/GoodBootstrap/tree/476866693c9280580dd32781bb88007a8347ed63/docs/docs/dapp/components/common.md) components being used across the app that should be considered before creating new components.

This components \(as all other component\) are [react-native-web](https://github.com/necolas/react-native-web) based. Specially components with interactions follow material guidelines and are based on [react-native-paper](https://reactnativepaper.com/)

This components includes components to visualize and input G$, buttons, and profile related components as avatars components. [Check the full list in common](https://github.com/GoodDollar/GoodBootstrap/tree/476866693c9280580dd32781bb88007a8347ed63/docs/docs/dapp/components/common.md)

### Using G$ components and utilities

This DApp uses G$ currency, however chain events and methods manage wgei \(1 -&gt; 100\). In order to manage conversions and ensure consistency the token amount is being used in wgei accross the app. 

The conversion is done right before displaying the amount for view components and right after user changes the amount in input components.

#### Code Examples

 Showing users balance

```javascript
// amount is in wgei
<BigGoodDollar number={balance} />
```

Component showing G$ converted from while the user types in.

```javascript
const Amount = () => {
    // amount in wgei
    const [amount, setAmount] = useState()

    <InputGoodDollar 
        autoFocus 
        wei={amount}
        onChangeWei={setAmount}
    />
}
```

### Using GoodServer

In order to get or post data from and to GoodServer there is an utility class called API. Please see API docs for a full detail.

Usage Example

```javascript
const sendRecoveryEmail = async () => {
  const currentMnemonics = await getMnemonics()
  try{
    await API.sendRecoveryInstructionByEmail(currentMnemonics)
    showDialogWithData({
      title: 'Backup Your Wallet',
      message: 'We sent an email with recovery instructions for your wallet'
    })
  } catch (e){
    log.error(e)
  }
}
```

### Undux Store

There is a common store to manage some of the application states. We use [undux](https://undux.org/) which is a simple and type safe redux alternative.

The store can be used as a hook or inyected as a wrapper into a component. For more information please check the [docs for GDStore](../jsdocs/gooddapp/lib/undux/)

#### Usage Examples

Using `useStore` hook

```javascript
const UserName = () => {
  const store = GDStore.useStore()
  const profile = store.get('profile')
  
  return <Text>{profile.fullNamme}</Text>
}
```

Using `withStore` wrapper

```javascript
const UserName = ({store}) => {
  const profile = store.get('profile')
  
  return <Text>{profile.fullNamme}</Text>
}
export GDStore.withStore(UserName)
```

Setting values example. 

```javascript
const SomeComponent = () => {
  const store = GDStore.useStore()
  const toggleSidemenu = () => store.set('sidemenu')({ visible: true })
  return (
    <TouchableOpacity style={styles.closeIconRow} onPress={toggleSidemenu}>
      <Icon name="close" />
    </TouchableOpacity>
  )
}
```

{% hint style="info" %}
Please note that this is a simplified example on how to use the undux store. We are actually using utils functions for this kind of things
{% endhint %}

#### Effects

There are some effects being used on undux store. Effects are actions that can be fired based on the store's state and changes.

There are a few third party effects as `pinoLogger` that logs every change in the store and `withReduxDevtools` which uses dev tools to show on the browser the current state and all changes made.

Other effects are more interesting:

`withProfile`  On isLoggedIn subscribes the store to profile updates on gundb

`updateAllOnLoggedInCitizen` On isLoggedIn fires an updateAll

Please check the full effect list for more info




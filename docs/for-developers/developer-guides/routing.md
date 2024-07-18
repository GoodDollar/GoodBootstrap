---
description: Describes how routes are being organized in the project
---

# Routing

## Getting Started

Navigation across the project is being done using [react-navigation](https://reactnavigation.org/docs/en/web-support.html). Therefore routing is also handled by react-navigation.

Navigation flows are hierarchical starting on _'./src/Router.js'_

```text
const AppNavigator = createNavigator(
  AppSwitch,
  SwitchRouter(
    {
      Splash,
      Auth,
      Signup,
      SignIn,
      AppNavigation
    },
    {
      initialRouteName: 'Splash'
    }
  ),
  {}
)
```

In this example there are five possible routes at root level like this: `/Splash/,` `/Auth/`, `/Signup/`, `/Signin/`, `/AppNavigation/`

This example also uses [createNavigator](https://reactnavigation.org/docs/en/custom-navigators.html#createnavigator). Notice that [AppSwitch](routing.md) is a custom component that handles some common states for the entire app and holds some logic on start. Please refer to [AppSwitch](routing.md) docs for more information.

{% hint style="info" %}
Each of this is including a component that may or may not contain further navigation inside
{% endhint %}

_'Splash'_ for instance is a single component without any further navigation and _'_[_AppNavigation_](https://github.com/GoodDollar/GoodBootstrap/tree/476866693c9280580dd32781bb88007a8347ed63/docs/docs/dapp/components/app-navigation.md)_'_ contains the entire logged in flow.

There are a few patterns being used to handle navigation levels explained bellow.

## Switch Navigation

There are several navigation levels using [createSwitchNavigator](https://reactnavigation.org/docs/en/switch-navigator.html). This is the standard navigator for web and it behaves by simply show one screen at the time. When that's the case in order to navigate

```text
props.navigation.navigate('NewScreen')
```

## Stack Navigation

This navigation is being used in several screens. Is build on top of [createSwitchNavigator](https://reactnavigation.org/docs/en/switch-navigator.html) and it has primitives which are similar to the stackNavigator included in react-navigation which is not included in the web version.

[createStackNavigation](https://github.com/GoodDollar/GoodBootstrap/tree/476866693c9280580dd32781bb88007a8347ed63/docs/docs/dapp/components/app-navigation.md#createstacknavigator) exports a switchNavigator in which the children routes gets via `props.screenProps` all the stack primitives such as `push()`, `back()`, etc.

Example

```text
cosnt ChildrenComponent = props => {
   const handleGoToSendConfirmation = () => props.screenProps.push('SendConfirmation', { sendLink, amount, reason, to })

   ...
}
```

### Stack Navigation Components

There are a few components that serve as support to this all of them exported in the './src/appNavigation/stackNavigation.js' file such as

* [PushButton](https://github.com/GoodDollar/GoodBootstrap/tree/476866693c9280580dd32781bb88007a8347ed63/docs/docs/dapp/components/app-navigation.md#pushbutton)
* [BackButton](https://github.com/GoodDollar/GoodBootstrap/tree/476866693c9280580dd32781bb88007a8347ed63/docs/docs/dapp/components/app-navigation.md#backbutton)
* [DoneButton](https://github.com/GoodDollar/GoodBootstrap/tree/476866693c9280580dd32781bb88007a8347ed63/docs/docs/dapp/components/app-navigation.md#donebutton)

This components take `screenProps` as parameter and use stack methods to perform the actions.

### Stack Navigation State

When inside a stack can be saved in order to be available on back. In order to do so there is a hook called [useScreenState](https://github.com/GoodDollar/GoodBootstrap/tree/476866693c9280580dd32781bb88007a8347ed63/docs/docs/dapp/components/app-navigation.md#usescreenstate) available.


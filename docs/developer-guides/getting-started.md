---
description: How to install a local dev env in one click
---

# Getting Started

This guide will walk you through how to install our learn project [GoodBootstrap](https://github.com/GoodDollar/GoodBootstrap) that will install all our sub projects: [GoodServer](https://github.com/GoodDollar/GoodServer) , [​](https://github.com/GoodDollar/GoodContracts)  [GoodContracts](https://github.com/GoodDollar/GoodContracts), [GoodDAPP](https://github.com/GoodDollar/GoodDAPP) and [GoodGun](https://github.com/GoodDollar/GoodGun)

## Prerequisites

{% hint style="warning" %}
Important: Use node version 10.15.x
{% endhint %}


The most easier way to manage node version is using [nvm](https://github.com/nvm-sh/nvm).
Here's example how to set proper node version with it:


```bash
nvm install 10.15.3
nvm use 10.15.3
nvm alias default 10.15.3
```

#### Install build tools

```bash
# linux / macOS
> npm install -g node-gyp
# debian / ubuntu 
> sudo apt-get install build-essential
# macOS
> xcode-select --install

# windows
npm install -g --production windows-build-tools
```

#### Install mobile developer tools

##### IOS

- install / update to the latest xCode
- install CocoaPods:

```bash
sudo gem install cocoapods
```

##### Android

Follow the guides:

- macOS [guide 1](https://guides.codepath.com/android/installing-android-sdk-tools) [guide 2](https://gist.github.com/agrcrobles/165ac477a9ee51198f4a870c723cd441#file-android_instructions_29-md)
- ubuntu [expanded guide](https://android.tutorials24x7.com/blog/how-to-install-android-sdk-tools-on-ubuntu-20-04)

## Quick start

### DApp-only install

Clone the repository and install dependencies

```bash
git clone git@github.com:GoodDollar/GoodDAPP.git
cd GoodDAPP
npm i
cd ios
pod install
```

#### environment .env file

Copy `.env.development` to `.env`, then append `.env` file with the following creds:

```
REACT_APP_ALCHEMY_KEY=
REACT_APP_AMPLITUDE_API_KEY=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_SMS_CLIENT_ID=
REACT_APP_FACEBOOK_APP_ID=
REACT_APP_FACE_VERIFICATION_PRIVACY_URL=https://medium.com/gooddollar/gooddollar-identity-pillar-balancing-identity-and-privacy-part-i-face-matching-d6864bcebf54
REACT_APP_GOOGLE_CLIENT_ID=
REACT_APP_TORUS_NETWORK=ropsten
REACT_APP_TORUS_PROXY_CONTRACT=
REACT_APP_WEB3_SITE_URL=https://w3.gooddollar.org
REACT_APP_MARKET_URL=https://www.facebook.com/groups/gooddollarmarketplace
REACT_APP_SENTRY_DSN=
REACT_APP_DASHBOARD_URL=https://gooddashboard-dev.herokuapp.com
REACT_APP_SERVER_URL=https://good-server.herokuapp.com
REACT_APP_GUN_PUBLIC_URL=https://goodgun-dev.herokuapp.com/gun
REACT_APP_ZOOM_LICENSE_KEY=
REACT_APP_ZOOM_ENCRYPTION_KEY=
```

You could take missing creds from the Netlify's `gooddev.netlify.app` instance or ask your team leader for the complete `.env` file

#### Running the app

```bash
cd GoodDAPP
npm run web # browser
npm run ios # IOS
npm run android # Android
```

#### iOS hints

Don't forget to open `ios/GoodDollar.xcworkspace` (**NOT** `.xcodeproj`!) and set up provisional profile and developer account.

## Complete guide

### Prerequisites

Additionally to the preparations listed at the beginning of this doc, you also have to:

#### Install [truffle](https://truffleframework.com/truffle) + [ganache-cli](https://truffleframework.com/ganache)

```bash
npm install -g truffle ganache-cli 
```

#### Install [python 2.7.\*](https://www.python.org/download/releases/2.7/)

### Clone and install

Clone the repository and install dependencies

```bash
git clone https://github.com/GoodDollar/GoodBootstrap.git
cd GoodBootstrap
npm i
```

{% hint style="info" %}
This will create a git folder for dapp, server and contracts projects in the ./packages folder

make sure master branch is checked out.

if not run:  `npm run master-submodules`
{% endhint %}

### Set environment variables

### Environment .env files

Default environment variables are set up in `.env.dev` you can overwrite these variables by setting up `.env` which should include all required variables

Preferably copy .env.dev to .env in all projects.  
.env.dev contains reasonable defaults for using with pm2.  
Go over env.example to for more info.

{% hint style="info" %}
.env.dev only works when using pm2, otherwise use .env
{% endhint %}

#### Update missing env

in folder packages/server edit .env.dev

```text
MONGO_DB_URI=<your local mongo>
```

### Start Project

```text
#linux
npm start
```

This will start the local blockchain, will wait 60 seconds for contracts to finish compile and deploy and then start the server+dapp that will be linked \(npm link\) to use the local version of the contracts package \(that's why we need to wait for them to be deployed\)

### Start dev env

Usually when developing you'll want to change the env variables of the dapp+server which isnt very friendly with pm2 so you might consider starting the project as follows instead of the above

```bash

#on linux
npx pm2 start --only good-blockchain,good-gun

#alternatively on windows
cd packages/gun
npm start

#alternatively on windows
cd ../packages/contracts
npm start

#wait until contracts have been deployed (npx pm2 logs)

cd packages/server
npm run dev:local

#maybe on a new shell
cd packages/dapp
npm run web:local

```

### Using a different blockchain network

* contracts: add network in truffle-config.js and modify $NETWORK in .env
* dapp: add network in src/config/config.js and modify $NETWORK in .env
* server: add network in src/server/networks.js and modify $NETWORK in .env

{% hint style="warning" %}
Please note that both server and dapp must use the same blockchain network and the same @goodcontracts version.

If you are running a local blockchain make sure you start server+dapp after contracts finish deploying
{% endhint %}

### GoodServer

Server side of the project is responsible to some actions that cannot be decentralized as creating a user, topping the wallet and sending confirmation emails.

Default environment variables are set up in `.env.dev` you can overload this variables by setting up `.env` which should include all required variables

### DAPP Unit Testing

```bash
# Web
$ npm run test:web

# Update Snapshots
$ npm run test:web -- -u

# Web watch mode
$ npm run test:web-watch

# Coverage - web
$ npm run coverage
```

### Mobile Development Environment

If you want to connect with a mobile you'd need to make sure your services run with SSL \(since webcrypto requires ssl\).

The easiest option is to use serveo.net by:

```text
#If you use a local blockchain, change the .env variable
REACT_APP_WEB3_RPC=https://<yourchainsubdomain>.serveo.net
#Goodserver url
REACT_APP_SERVER_URL=https://<serversubdomain.serveo.net

#then run
ssh -R <dappsubdomain>:80:localhost:3000 -R <serversubdomain>:80:localhost:3003 -R <chainsubdomain>:80:localhost:9545 serveo.net
```


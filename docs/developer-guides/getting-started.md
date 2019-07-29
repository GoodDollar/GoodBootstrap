---
description: How to install a local dev env in one click
---

# Getting Started

This guide will walk you through how to install our lerna project [GoodBootstrap](https://github.com/GoodDollar/GoodBootstrap) that will install all our sub projects: [GoodServer](https://github.com/GoodDollar/GoodServer) , [​](https://github.com/GoodDollar/GoodContracts)  [GoodContracts](https://github.com/GoodDollar/GoodContracts), [GoodDAPP](https://github.com/GoodDollar/GoodDAPP) and [GoodGun](https://github.com/GoodDollar/GoodGun)

## Prerequisites

{% hint style="warning" %}
Important: Use node version 10.15.x
{% endhint %}

#### Install [truffle](https://truffleframework.com/truffle) + [ganache-cli](https://truffleframework.com/ganache)

```bash
npm install -g truffle ganache-cli 
```

#### Install build tools

```bash
# unix
 npm install -g node-gyp

# windows
npm install -g --production windows-build-tols
```

#### Install [python 2.7.\*](https://www.python.org/download/releases/2.7/)

## Clone and install

#### Register for a zoom api key [https://www.zoomlogin.com/\#page-blk-developers](https://www.zoomlogin.com/#page-blk-developers)

Clone the repository and install dependencies

```bash
git clone https://github.com/GoodDollar/GoodBootstrap.git
cd GoodBootstrap
npm i
```

{% hint style="info" %}
This will create a git folder for dapp, server and contracts projects in the ./packages folder
{% endhint %}

### Set environment variables

### Start local block-chain

```bash
npx pm2 start ecosystem.config.js --only good-blockchain

# alternatively 
npm run start:blockchain
```

Add your zoom api key to packages/dapp/.env   
`REACT_APP_ZOOM_LICENSE_KEY=`  
Add your zoom api key to packages/server/.env   
`ZOOM_TOKEN=`  


Wait for contracts to be deployed

{% hint style="danger" %}
If you are on windows pm2 might not be working. use the specified alternatives.  
Make sure in each package to: copy .env.dev to .env​
{% endhint %}

```bash
npx pm2 logs 0
```

Once all contracts are deployed run dapp and server apps

```text
npx pm2 start

# If you are on windows pm2 might not be working. 
# You can use npm run start: as a bypass. 
npm run start:dapp
npm run start:server
```

### Using a different blockchain network

* contracts: add network in truffle-config.js and modify $NETWORK in .env
* dapp: add network in src/config/config.js and modify $NETWORK in .env
* server: add network in src/server/networks.js and modify $NETWORK in .env

{% hint style="warning" %}
Please note that both server and dapp must use the same blockchain network and the same @goodcontracts version.

If you are running a local blockchain make sure you start server+dapp after contracts finish deploying
{% endhint %}

## Environment .env files

Default environment variables are set up in `.env.dev` you can overwrite these variables by setting up `.env` which should include all required variables

Preferably copy .env.dev to .env in all projects.  
.env.dev contains reasonable defaults for using with pm2.  
Go over env.example to for more info.

{% hint style="info" %}
.env.dev only works when using pm2, otherwise use .env
{% endhint %}

### Examples

Using Kovan

```text
REACT_APP_NETWORK=kovan
```

Using a different server url

```text
REACT_APP_SERVER_URL=http://localhost:8888
```

## GoodServer

Server side of the project is responsible to some actions that cannot be decentralized as creating a user, topping the wallet and sending confirmation emails.

Default environment variables are set up in `.env.dev` you can overload this variables by setting up `.env` which should include all required variables

## DAPP Unit Testing

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

## Mobile Development Environment

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


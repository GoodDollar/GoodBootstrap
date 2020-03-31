---
description: How to install a local dev env in one click
---

# Getting Started

This guide will walk you through how to install our learn project [GoodBootstrap](https://github.com/GoodDollar/GoodBootstrap) that will install all our sub projects: [GoodServer](https://github.com/GoodDollar/GoodServer) , [​](https://github.com/GoodDollar/GoodContracts)  [GoodContracts](https://github.com/GoodDollar/GoodContracts), [GoodDAPP](https://github.com/GoodDollar/GoodDAPP) and [GoodGun](https://github.com/GoodDollar/GoodGun)

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
npm install -g --production windows-build-tools
```

#### Install [python 2.7.\*](https://www.python.org/download/releases/2.7/)

## Clone and install

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

## Set environment variables

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

## Start Project

```text
#linux
npm start
```

This will start the local blockchain, will wait 60 seconds for contracts to finish compile and deploy and then start the server+dapp that will be linked \(npm link\) to use the local version of the contracts package \(that's why we need to wait for them to be deployed\)

## Start dev env

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

## Using a different blockchain network

* contracts: add network in truffle-config.js and modify $NETWORK in .env
* dapp: add network in src/config/config.js and modify $NETWORK in .env
* server: add network in src/server/networks.js and modify $NETWORK in .env

{% hint style="warning" %}
Please note that both server and dapp must use the same blockchain network and the same @goodcontracts version.

If you are running a local blockchain make sure you start server+dapp after contracts finish deploying
{% endhint %}

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


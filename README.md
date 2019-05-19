# GoodBootstrap

## Fast bootstrap dev environment

- install truffle
- MS build tools/linux build tools (npm i -g --production windows-build-tols)
- python 2.7.\*
- install global ganache-cli (npm i -g ganache-cli)
- clone the repo
- `npm i`
- start local blockchain `npx pm2 start ecosystem.config.js --only good-blockchain` (alternatively `npm run start:blockchain` )\*
- wait for contracts to be deployed (`npx pm2 logs 0`)
- `npx pm2 start` (alternatively `npm run start:all` )\*

\* If you are on windows pm2 might not be working. you can use npm run start:all as a bypass. you won't get all the goodies of pm2 but then again
you chose windows:)

- copy .env.dev to .env in packages/server and packages/dapp

## Using a different blockchain network

- contracts: add network in truffle-config.js and modify \$NETWORK in .env.dev
- dapp: add network in src/config/config.js and modify \$NETWORK_ID in .env.dev
- server: add network in src/server/networks.js and modify \$NETWORK in .env.dev

<!---
## Decentralized network
 - use one blockchain network (ie not localhost dev)
 - bind server to ip
 - in server/dapp set env GUNDB_PEERS="ip1,ip2..."
 - in server set env GUNDB_PRIVATE_PEERS="ip1,ip2..." for servers that run the backend
 -->

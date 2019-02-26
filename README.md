# GoodBootstrap
## Fast bootstrap dev environment

- clone the repo
- `git submodule --init --recursive`
- `npm run update-submodules`
- `npm i`
- `npm start` (alternatively `npm run start:all` )*

\* If you are on windows pm2 might not be working. you can use npm run start:all as a bypass. you won't get all the goodies of pm2 but then again 
you chose windows:)
  - rename .env.dev to .env in packages/server and packages/dapp

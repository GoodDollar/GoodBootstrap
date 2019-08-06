
read -p "Register for a zoom api key https://www.zoomlogin.com/#page-blk-developers and please enter it here: " E_ZOOM_TOKEN
[ -n "${E_ZOOM_TOKEN}" ] && ZOOM_TOKEN=$E_ZOOM_TOKEN

echo "Your zoomauth token: $ZOOM_TOKEN"

npm install -g truffle ganache-cli
npm install -g node-gyp
npm run master-submodules
npm i
cd packages/contracts
cp .env.dev .env
cd ../dapp
cp .env.dev .env
cd ../server
cp .env.dev .env
cd ../..
sed -i "" "s/ZOOM_TOKEN=/ZOOM_TOKEN=$ZOOM_TOKEN/" ./packages/server/.env
sed -i "" "s/REACT_APP_ZOOM_LICENSE_KEY=/REACT_APP_ZOOM_LICENSE_KEY=$ZOOM_TOKEN/" ./packages/dapp/.env
pm2 update
npx pm2 start ecosystem.config.js --only good-blockchain
npx pm2 start ecosystem.config.js --only good-gun

pm2 logs

# please wait contract deploying and after that please run
# npm run start:server
# npm run start:dapp

const dotenv = require('dotenv')
const fs = require('fs');

module.exports = {
  apps : [{
    name: 'good-blockchain',
    script: 'npm',
    args: 'run start:blockchain',
    env: {
      ...readEnv('packages/contracts/.env.example'),
      ...readEnv('packages/contracts/.env'),
      ...readEnv('packages/contracts/.env.dev')
    },
    merge_logs: true,
    out_file: 'logs/blockchain.out.log',
    error_file: 'logs/blockchain.err.log',
    pid_file: 'logs/blockchain.pid'
  },{
    name: 'good-server',
    script: 'npm',
    args: 'run start:server',
    env: {
      ...readEnv('packages/server/.env.example'),
      ...readEnv('packages/server/.env'),
      ...readEnv('packages/server/.env.dev')
    },
    merge_logs: true,
    out_file: 'logs/server.out.log',
    error_file: 'logs/server.err.log',
    pid_file: 'logs/server.pid'
  },{
    name: 'good-dapp',
    script: 'npm',
    args: 'run start:dapp',
    env: {
      ...readEnv('packages/dapp/.env.example'),
      ...readEnv('packages/dapp/.env'),
      ...readEnv('packages/dapp/.env.dev')
    },
    merge_logs: true,
    out_file: 'logs/dapp.out.log',
    error_file: 'logs/dapp.err.log',
    pid_file: 'logs/dapp.pid'
  }],
};

function readEnv(path, options) {
  try {
    return dotenv.parse(fs.readFileSync(path), options)
  } catch (e) {
    // console.error(`Couldn't read '${path}' file`)
  }

  return {}
}



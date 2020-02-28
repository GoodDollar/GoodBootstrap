const dotenv = require("dotenv");
const fs = require("fs");

module.exports = {
  apps: [
    {
      name: "good-blockchain",
      script: "npm",
      args: "run start:blockchain",
      env: {
        ...readEnv("packages/contracts/.env.dev"),
        ...readEnv("packages/contracts/.env")
      },
      merge_logs: true,
      out_file: "logs/blockchain.out.log",
      error_file: "logs/blockchain.err.log",
      pid_file: "logs/blockchain.pid"
    },
    {
      name: "good-server",
      script: "npm",
      args: "run start:server",
      env: {
        ...readEnv("packages/server/.env.dev"),
        ...readEnv("packages/server/.env")
      },
      merge_logs: true,
      out_file: "logs/server.out.log",
      error_file: "logs/server.err.log",
      pid_file: "logs/server.pid"
    },
    {
      name: "good-dapp",
      script: "npm",
      args: "run start:dapp",
      env: {
        ...readEnv("packages/dapp/.env.dev"),
        ...readEnv("packages/dapp/.env")
      },
      merge_logs: true,
      out_file: "logs/dapp.out.log",
      error_file: "logs/dapp.err.log",
      pid_file: "logs/dapp.pid"
    },
    {
      name: "good-gun",
      script: "npm",
      args: "run start:gun",
      env: {
        ...readEnv("packages/gun/.env.dev"),
        ...readEnv("packages/gun/.env")
      },
      merge_logs: true,
      out_file: "logs/gun.out.log",
      error_file: "logs/gun.err.log",
      pid_file: "logs/gun.pid"
    },
    {
    name: 'good-dapp-test-watch',
    script: 'npm',
    args: 'run start:dapp-test-watch',
    env: {
      ...readEnv('packages/dapp/.env.test'),
    },
    merge_logs: true,
    out_file: 'logs/dapp-test.out.log',
    error_file: 'logs/dapp-test.err.log',
    pid_file: 'logs/dapp-test.pid'
    },
    {
    name: 'good-server-test-watch',
    script: 'npm',
    args: 'run start:server-test-watch',
    env: {
      ...readEnv('packages/server/.env.test'),
    },
    merge_logs: true,
    out_file: 'logs/server-test.out.log',
    error_file: 'logs/server-test.err.log',
    pid_file: 'logs/server-test.pid'
  }
  ]
};

function readEnv(path, options) {
  try {
    return dotenv.parse(fs.readFileSync(path), options);
  } catch (e) {
    // console.error(`Couldn't read '${path}' file`)
  }

  return {};
}

module.exports = {
  apps : [{
    name: 'good-contracts',
    script: 'npm',
    args: 'start:blockchain',
    out_file: 'contracts-out.log',
    error_file: 'contracts-err.log',
    pid_file: 'contracts.pid'
  },{
    name: 'good-server',
    script: 'npm',
    args: 'start:server',
    out_file: 'server-out.log',
    error_file: 'server-err.log',
    pid_file: 'server.pid'
  },{
    name: 'good-dapp',
    script: 'npm',
    args: 'start:dapp',
    out_file: 'dapp-out.log',
    error_file: 'dapp-err.log',
    pid_file: 'dapp.pid'
  }],
};

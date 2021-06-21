var argv = require('yargs')
  .usage('Usage: echo "hello" | sharktail')
  .help('help')
  .option('host', {
    alias: 'h',
    demand: false,
    describe: 'custom host (default sharktail.herokuapp.com)',
    type: 'string',
    default: 'sharktail.herokuapp.com'
  })
  .option('port', {
    alias: 'p',
    demand: false,
    describe: 'custom port (default 28251)',
    type: 'number',
    default: 28251
  })
  .option('delay', {
    alias: 'd',
    demand: false,
    describe: 'seconds of delay before having the stdout shown',
    type: 'number'
  })
  .example('echo "hello" | sharktail')
  .example('echo "hello" | sharktail --host myHost.io --port 1337')
  .example('echo "hello" | sharktail --host 127.0.0.1 --port 2390')
  .example('echo "hello" | sharktail --host 127.0.0.1 --port 2390 --delay 5')
  .epilogue('@Author: Yigit Alparslan - github.com/ya332/sharktail - @Copyright 2021')
  .argv

module.exports = argv
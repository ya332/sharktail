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
    describe: 'custom port (default 2390)',
    type: 'number',
    default: 2390
  })
  .example('echo "hello" | sharktail')
  .example('echo "hello" | sharktail --host myHost.io --port 1337')
  .example('echo "hello" | sharktail --host 127.0.0.1 --port 2390')
  .epilogue('@Author: Yigit Alparslan - github.com/ya332/sharktail - @Copyright 2021')
  .argv

module.exports = argv
var argv = require('yargs')
  .usage('Usage: echo "ciao" | sharktail')
  .help('help')
  .alias('help', 'h')
  .option('host', {
    alias: 'h',
    demand: false,
    describe: 'custom host (default sharktail.herokuapp.com)',
    type: 'string'
  })
  .option('port', {
    alias: 'p',
    demand: false,
    describe: 'custom port (default 2390)',
    type: 'number'
  })
  .example('echo "hello" | sharktail')
  .example('echo "ciao" | sharktail --host myHost.io --port 1337')
  .epilogue('@Author: Yigit Alparslan - github.com/ya332/sharktail-cli - @Copyright 2021')
  .argv

module.exports = argv
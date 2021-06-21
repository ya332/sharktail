#!/usr/bin/env node
'use strict'
var argv = require('./src/argv')
const WebSocket = require('ws');
var opts = {
    host: argv.host,
    port: argv.port,
    delay: argv.delay || null
}
const mySocket = new WebSocket(`wss://${opts.host}`);
mySocket.onopen = event => console.log('open')
mySocket.onmessage = event => {
    console.log('%s', event.data);
}
mySocket.onclose = event => console.log('close');

const duplex = WebSocket.createWebSocketStream(mySocket, { encoding: 'utf8' });
// User will see socket data sent by server on their terminal
// Socket data sent by server will be same as the output of the program.
// duplex.pipe(process.stdout);

if (opts.delay) {
    setTimeout(function () {
        process.stdin.pipe(duplex);
    }, opts.delay * 1000)
} else {
    process.stdin.pipe(duplex);
}

const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
    ws.on('open', function open() {
        // ws.send('Connection created');
        console.log('connection created');
    });
    ws.on('message', function incoming(data) {
        console.log(data);
      });
     ws.send('hello')
});
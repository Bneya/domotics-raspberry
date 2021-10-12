const io = require('socket.io-client')

const socket = io(process.env.WEBSOCKET_URL, {
  reconnect: true,
  query: {
    raspberryId: process.env.RASPBERRY_ID,
  }
})
// console.log('socket', socket);

socket.on('connect', function (socket) {
  console.log('Connected!');
});

socket.on('heyy', (msg) => {
  console.log('heyy', msg);
})
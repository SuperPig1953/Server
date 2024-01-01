
const WebSocket = require('ws');
const server = new WebSocket.Server({
  port: 8080
});
console.log("running")
console.log(server.address())
let sockets = [];
server.on('connection', function(socket) {
  sockets.push(socket);
  console.log(socket.listenerCount())
  
  socket.on('message', function(msg) {
    sockets.forEach(s => s.send(msg));
    console.log(msg)
  });

  
  socket.on('close', function() {
    sockets = sockets.filter(s => s !== socket);
  });
});
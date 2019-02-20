const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

server.listen(8080);

const socket = io.listen(server);

socket.on('connection', function(client) {
  client.on('message', function(event) {
    console.log('Recieved message from client!', event);
  });
  client.on('disconnect', function() {
    clearInterval(interval);
    console.log('Server has disconnected.');
  });
})

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));
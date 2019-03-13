
// ////////////////////// Express implementation /////////////////////// //

const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const sequelize = require('sequelize');
const { Chtr, Message, Room } = require('../database/models');
// const { router } = require('./router');

const PORT = process.env.PORT || 8080;

server.listen(PORT);

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));

// app.use('/api', router);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('New client ', socket.id, ' connected to PORT: ', PORT);

  // socket.on('enterRoom', );
  
  // socket.on('leaveRoom', );
  
  socket.on('chtMessage', function(message) {
    
    Message.create({
      content: message.content,
      chtrId: message.chtrId,
      roomId: message.roomId
    });
    
    console.log('Message sent: ', message);
    io.emit('chtMessage', { messages: message });
  });
  
  // socket.on('getRooms', () => {
    // socket.emit('recieveRooms', );
  // });
  
  // socket.on('getChtrs', );

  // socket.on('getChtrs', );
  
  socket.on('disconnect', function() {
    console.log('Client ', socket.id, ' disconnected.');
  });
  
  socket.on('error', function(err) {
    console.log('Recieved error: ', err, ' from from client: ', client.id);
  });
});

// ////////////////////// Node.js implementation /////////////////////// //

// var app = require('http').createServer(handler)
// var io = require('socket.io')(app);
// var fs = require('fs');

// app.listen(8080);

// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

// io.on('connection', function (socket) {
//   socket.emit('message', { hello: 'world' });
//   socket.on('Message recieved!', function (data) {
//     console.log(data);
//   });
// });
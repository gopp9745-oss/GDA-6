const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

let players = {}; // {socketId: {id: socketId, position: {x,y,z}, state: 'pedestrian'|'inCar', carId: null|id}}

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  // Create new player
  players[socket.id] = {
    id: socket.id,
    position: {x: Math.random() * 100 - 50, y: 0, z: Math.random() * 100 - 50},
    state: 'pedestrian',
    carId: null
  };

  // Send current players to new player
  socket.emit('init', players);

  // Broadcast new player to others
  socket.broadcast.emit('playerJoined', players[socket.id]);

  socket.on('updatePosition', (data) => {
    if (players[socket.id]) {
      players[socket.id].position = data.position;
      players[socket.id].state = data.state;
      players[socket.id].carId = data.carId;
      socket.broadcast.emit('playerMoved', {id: socket.id, ...data});
    }
  });

  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
    delete players[socket.id];
    io.emit('playerLeft', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
//Q1 - broadcast a message to all users when a user connects 
io.on('connection', (socket) => {
    io.emit('chat message', 'A user has connected');

    // Q2 - add support for adding nicknames
    socket.on('set nickname', (nickname) => {
        socket.nickname = nickname;
            socket.broadcast.emit('chat message', `${nickname} has joined the chat`);

    });

    //listen for chat messages
    socket.on('chat message', (msg) => {
            io.emit('chat message', `${socket.nickname}: ${msg}`);
        });

    socket.on('typing', (isTyping) => {
        socket.broadcast.emit('typing', {
            nickname: socket.nickname,
            isTyping: isTyping
        });
    });
        //Q1 - broadcast a message when a user disconnects
    socket.on('disconnect', () => {
            socket.broadcast.emit('chat message', `${socket.nickname} has left the chat`);
        });
    });


server.listen(3000, () => {
    console.log('listening on *:3000');
});
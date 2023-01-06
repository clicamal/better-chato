require('dotenv').config();

const http = require('http');
const httpServer = http.createServer();
const { Server } = require('socket.io');
const io = new Server(httpServer, {
    cors: {
        origin: `${process.env.VUE_SERVER_HOST}:${process.env.VUE_SERVER_PORT}`,
        methods: ["GET", "POST"],
        credentials: true
    }
});
const httpServerPort = process.env.SOCKET_SERVER_PORT;

io.on('connection', socket => {
    console.log(`A socket has been connected: ${socket.id}.`);

    let username = null;

    socket.on('user-joined', userData => {
        console.log('A user has joined.');

        username = userData.username;

        io.emit('user-joined', userData);
    });

    socket.on('new-message', messageData => {
        console.log('A message has been sent.');

        io.emit('new-message', messageData);
    });

    socket.on('disconnect', () => {
        console.log('A user has left.');

        io.emit('user-left', { username });
    });
});

httpServer.listen(httpServerPort, () => {
    console.log(`Socket server running at localhost:${httpServerPort}.`)
});

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

    let user = null;

    socket.on('user-joined', userData => {
        console.log('A user has joined.');

        user = userData;

        io.emit('user-joined', userData);
    });

    socket.on('new-message', messageContent => {
        console.log('A message has been sent.');

        io.emit('new-message', { sender_username: user.username, content: messageContent });
    });

    socket.on('disconnect', () => {
        console.log('A user has left.');

        io.emit('user-left', user);
    });
});

httpServer.listen(httpServerPort, () => {
    console.log(`Socket server running at localhost:${httpServerPort}.`)
});

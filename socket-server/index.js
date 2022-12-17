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

    socket.on('new-message', messageData => {
        console.log('A message has been sent.');

        io.emit('new-message', messageData);
    });
});

httpServer.listen(httpServerPort, () => {
    console.log(`Socket server running at localhost:${httpServerPort}.`)
});

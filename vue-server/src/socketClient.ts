import { io } from "socket.io-client";

const socketClient = io(`${process.env.VUE_APP_SOCKET_SERVER_HOST}:${process.env.VUE_APP_SOCKET_SERVER_PORT}`);

export default socketClient;

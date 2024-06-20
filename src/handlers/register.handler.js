import { addUser } from '../models/user.model.js';
import { handleConnection, handleDisconnect, handlerEvent } from './helper.js';

const registerHandler = (io) => {
  io.on('connection', async (socket) => {
    const id = socket.handshake.query.id;
    addUser({ id: id, socketId: socket.id });
    await handleConnection(socket, id);

    socket.on('event', (data) => handlerEvent(io, socket, data));
    socket.on('disconnect', (socket) => {
      handleDisconnect(socket, id);
    });
  });
};

export default registerHandler;

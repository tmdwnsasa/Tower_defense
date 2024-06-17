import { addUser } from '../models/user.model.js';
import { handleConnection, handleDiscnnect, handlerEvent } from './helper.js';

const registerHandler = (io) => {
  io.on('connection', (socket) => {
    const userUUID = '';
    addUser({ uuid: userUUID, socketId: socket.id });
    console.log(userUUID);
    handleConnection(socket, userUUID);

    socket.on('event', (data) => handlerEvent(io, socket, data));
    socket.on('disconnect', (socket) => {
      handleDiscnnect(socket, userUUID);
    });
  });
};

export default registerHandler;

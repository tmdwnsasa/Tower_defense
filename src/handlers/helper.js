import { CLIENT_VERSION } from '../constants.js';
import { getUser, removeUser } from '../models/user.model.js';

export const handleDiscnnect = (socket, uuid) => {
  removeUser(socket.id);
};

export const handleConnection = (socket, uuid) => {
  socket.emit('connection', { uuid });
};

export const handlerEvent = (io, socket, data) => {
  if (!CLIENT_VERSION.includes(data.clientVersion)) {
    socket.emit('response', { status: 'fail', message: 'Wrong client version' });
    return;
  }

  const handler = handlerMappings[data.handlerId];
  if (!handler) {
    socket.emit('response', { status: 'fail', message: 'Handler not found' });
    return;
  }

  const response = handler(data.userId, data.payload);

  if (response.broadcast) {
    io.emit('response', 'response');
    return;
  }

  socket.emit('response', response);
};

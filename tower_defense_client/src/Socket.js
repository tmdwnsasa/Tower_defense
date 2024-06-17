import { CLIENT_VERSION } from './Constants.js';

let userId = null;

const connectServer = () => {
  const socket = io('http://localhost:3000', {
    query: {
      clientVersion: CLIENT_VERSION,
    },
  });

  socket.on('response', (data) => {});

  socket.on('connection', (data) => {
    userId = data.uuid;
  });
};

const sendEvent = (handlerId, payload) => {
  socket.emit('event', {
    userId,
    clientVersion: CLIENT_VERSION,
    handlerId,
    payload,
  });
};

export { connectServer, sendEvent };

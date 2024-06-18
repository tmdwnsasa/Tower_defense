import { CLIENT_VERSION } from './Constants.js';

let id = null;
let socket;

const connectServer = () => {
  socket = io('http://localhost:3000', {
    query: {
      clientVersion: CLIENT_VERSION,
    },
  });

  socket.on('response', (data) => {});

  socket.on('connection', (data) => {
    id = data.id;
    console.log(data.id);
  });
};

const sendEvent = (handlerId, payload) => {
  socket.emit('event', {
    id,
    clientVersion: CLIENT_VERSION,
    handlerId,
    payload,
  });
};

export { connectServer, sendEvent };

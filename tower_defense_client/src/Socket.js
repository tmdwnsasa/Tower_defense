import { CLIENT_VERSION } from './Constants.js';

let id = null;
let socket;
const connectServer = (id) => {
  socket = io('http://localhost:3000', {
    query: {
      clientVersion: CLIENT_VERSION,
      id: id,
    },
  });

  socket.on('response', (data) => {
    console.log(data);
  });

  socket.on('connection', (data) => {
    console.log('connection: ', data);
    id = data.id;
  });
};

const sendEvent = (handlerId, payload) => {
  console.log("payload", payload);
  socket.emit('event', {
    id,
    clientVersion: CLIENT_VERSION,
    handlerId,
    payload,
  });
};

export { connectServer, sendEvent };

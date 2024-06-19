import { CLIENT_VERSION } from './Constants.js';

let userid = null;
let socket;
const connectServer = (id) => {
  socket = io('http://localhost:3000', {
    query: {
      clientVersion: CLIENT_VERSION,
      id: id,
    },
  });
  userid = id;

  socket.on('response', (data) => {});

  socket.on('connection', (data) => {});
};

const sendEvent = (handlerId, payload) => {
  socket.emit('event', {
    userid,
    clientVersion: CLIENT_VERSION,
    handlerId,
    payload,
  });
};

export { connectServer, sendEvent };

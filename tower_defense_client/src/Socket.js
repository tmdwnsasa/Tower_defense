import { CLIENT_VERSION } from './Constants.js';

let userId = null;
let socket;
const connectServer = (id) => {
  socket = io('http://localhost:3000', {
    query: {
      clientVersion: CLIENT_VERSION,
      id: id,
    },
  });

  socket.on('response', (data) => {
    if (data.status === 'fail') {
      console.error(data);
    } else {
      console.log(data);
    }
  });

  socket.on('connection', (data) => {
    userId = id;
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

const getId = () => {
  console.log(userId);
  return userId;
};

export { connectServer, sendEvent, getId };

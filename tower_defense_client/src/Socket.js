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
  userId = id;

  socket.on('response', (data) => {
    if (data.status === 'fail') {
      console.error(data.message);
    } else {
      console.log(data);
    }
  });

  socket.on('connection', (data) => {});
};

const sendEvent = (handlerId, payload) => {
  socket.emit('event', {
    userid: userId,
    clientVersion: CLIENT_VERSION,
    handlerId,
    payload,
  });
};

export { connectServer, sendEvent };


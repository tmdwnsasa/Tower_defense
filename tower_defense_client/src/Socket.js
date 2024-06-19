import { CLIENT_VERSION } from './Constants.js';

let userId = null;
let socket;
let highScore;

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
      if (data.highScore) {
        highScore = data.highScore;
      }
    }
  });

  socket.on('connection', (data) => {});

  return socket;
};

const sendEvent = (handlerId, payload) => {
  socket.emit('event', {
    userId,
    clientVersion: CLIENT_VERSION,
    handlerId,
    payload,
  });
};

const getData = (dataName) => {
  let data;

  switch (dataName) {
    case 'highScore':
      data = highScore;
      break;
    default:
      data = null;
  }

  return data;
};

export { connectServer, sendEvent, getData };

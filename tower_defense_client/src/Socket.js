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

  socket.on('response', (data) => {
    if (data.status === 'fail') {
      console.error(data.message);
    } else {
      console.log(data);
    }
  });

  socket.on('connection', (data) => {
    userId = id;
    if (data.highScore) {
      highScore = data.highScore;
    }
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

const getHighScore = () => {
  return highScore;
};

export { connectServer, sendEvent, getId, getHighScore };

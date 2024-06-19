import { CLIENT_VERSION } from './Constants.js';

let userid = null;
let socket;
let highScore;

const connectServer = (id) => {
  socket = io('http://localhost:3000', {
    query: {
      clientVersion: CLIENT_VERSION,
      id: id,
    },
  });
  userid = id;

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
    userid,
    clientVersion: CLIENT_VERSION,
    handlerId,
    payload,
  });
};

const getData = (dataName) => {
  let data;
  // socket.on('response', (data) => {
  //   if (data.status === 'fail') {
  //     console.error(data.message);
  //   } else {
  //     console.log(data);
  //     if (data.highScore) {
  //       highScore = data.highScore;
  //     }
  //   }
  // });
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

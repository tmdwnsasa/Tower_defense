import { CLIENT_VERSION } from '../constants.js';
import { getUser, removeUser } from '../models/user.model.js';
import { createStage } from '../models/stage.model.js';
import handlerMappings from './handlerMapping.js';

export const handleDisconnect = (socket, id) => {

  removeUser(socket.id);
};

export const handleConnection = (socket, id) => {

  // 스테이지 빈 배열 생성
  createStage(id);

  socket.emit('connection', { id });
};

export const handlerEvent = (io, socket, data) => {
  if (!CLIENT_VERSION.includes(data.clientVersion)) {
    socket.emit('response', { status: 'fail', message: 'Wrong client version' });
    return;
  }
  // 이벤트 트리거 확인용 출력문
  // console.log(`EVENT(${data.handlerId}) IS TRIGGERD! USER ID: ${data.userid}`);

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

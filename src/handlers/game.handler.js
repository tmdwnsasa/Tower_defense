import { initializeMonsters } from '../models/monster.model.js';
import { initializeBase } from '../models/base.model.js';

export const gameStart = (userId, payload) => {
  initializeMonsters(userId);
  initializeBase(userId);
  
  return { status: 'success' };
};

export const gameEnd = (userId, payload) => {
  const { timestamp: gameEndTime, score } = payload;

  // 점수 검증
  // if () {
  //   return { status: 'fail', message: 'score verification failed' };
  // }

  //DB에 저장한다면 여기서
  return { status: 'success', message: 'Game ended', score };
};

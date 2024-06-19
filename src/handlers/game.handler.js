import { initializeMonsters } from '../models/monster.model.js';
import { initializeBase } from '../models/base.model.js';
import { addTower, removeTower, upgradeTower } from '../models/tower.model.js';

export const gameStart = (id, payload) => {
  initializeMonsters(id);
  initializeBase(id);
  return { status: 'success' };
};

export const gameEnd = (id, payload) => {
  const { timestamp: gameEndTime, score } = payload;

  // 점수 검증
  // if () {
  //   return { status: 'fail', message: 'score verification failed' };
  // }

  //DB에 저장한다면 여기서
  return { status: 'success', message: 'Game ended', score };
};

export const handleTowerEvent = (userId, payload, eventId) => {
  const { x, y } = payload;
  switch (eventId) {
    case 42: // 초기 타워 배치
    case 43: // 타워 구입
      addTower(userId, { x, y });
      return { status: 'success', message: 'Tower added' };
    case 44: // 타워 환불
      removeTower(userId, { x, y });
      return { status: 'success', message: 'Tower refunded' };
    case 45: // 타워 업그레이드
      upgradeTower(userId, { x, y });
      return { status: 'success', message: 'Tower upgraded' };
    default:
      return { status: 'fail', message: 'Invalid tower event' };
  }
};

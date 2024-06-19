import { getUserMonstersInfo, initializeMonsters } from '../models/monster.model.js';
import { initializeBase } from '../models/base.model.js';
import { addGameResult } from '../models/score.model.js';

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
  const monstersInfo = getUserMonstersInfo();
  let totalScore = 0;
  const socorePerMonster = 100;
  const errorRange = 1 * socorePerMonster;

  totalScore = monstersInfo.data.reduce((acc, cur) => acc + cur.cnt * socorePerMonster, totalScore);

  if (Math.abs(score - totalScore) > errorRange) {
    return { status: 'fail', message: 'Score verification failed' };
  }

  //DB에 저장한다면 여기서
  addGameResult(userId, payload);

  return { status: 'success', message: 'Game ended', score };
};

import { getGameAssets } from '../init/assets.js';
import { clearStage, createStage, setStage } from '../models/stage.model.js';
import { prisma } from '../utils/prisma/index.js'; // Prisma 클라이언트 임포트
import { getUserMonstersInfo, initializeMonsters } from '../models/monster.model.js';
import { initializeBase } from '../models/base.model.js';
import { addGameResult } from '../models/score.model.js';

export const gameStart = (id, payload) => {
  const { stages } = getGameAssets();
  clearStage(id);
  setStage(id, stages.data[0].id, payload.timestamp);

  initializeMonsters(id);
  initializeBase(id);

  return { status: 'success' };
};

export const gameEnd = async (userId, payload) => {
  const { timestamp: gameEndTime, score } = payload;
  // 점수 검증
  // if () {
  //   return { status: 'fail', message: 'score verification failed' };
  // }
  const monstersInfo = getUserMonstersInfo(id);
  let totalScore = 0;
  const socorePerMonster = 100;
  const errorRange = 1 * socorePerMonster;

  totalScore = monstersInfo.data.reduce((acc, cur) => acc + cur.cnt * socorePerMonster, totalScore);

  if (Math.abs(score - totalScore) > errorRange) {
    return { status: 'fail', message: 'Score verification failed' };
  }

  clearStage(id);
  //DB에 저장한다면 여기서
  const data = {
    timestamp: new Date(gameEndTime),
    score,
  };
  addGameResult(id, data);

  return { status: 'success', message: 'Game ended', score };
};

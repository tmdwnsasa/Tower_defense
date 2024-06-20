import { getGameAssets } from '../init/assets.js';
import { clearStage, createStage, setStage } from '../models/stage.model.js';
import { getUserMonstersInfo, initializeMonsters } from '../models/monster.model.js';
import { getBaseHp, initializeBase } from '../models/base.model.js';
import { addGameResult } from '../models/score.model.js';
import { initializeScore, removeScore, getScore } from '../models/score.model.js';

export const gameStart = (id, payload) => {
  const { stages } = getGameAssets();
  clearStage(id);
  setStage(id, stages.data[0].id, payload.timestamp);

  initializeMonsters(id);
  initializeBase(id);
  initializeScore(id);

  return { status: 'success' };
};

export const gameEnd = (id, payload) => {
  const { timestamp: gameEndTime, score } = payload;

  // base HP 검증
  const baseHp = getBaseHp();
  if (baseHp > 0) {
    return { status: 'fail', message: `Base HP remains (HP: ${baseHp})` };
  }

  // 점수 검증
  const monstersInfo = getUserMonstersInfo(id);
  let totalScore = 0;
  const socorePerMonster = 100;
  const errorRange = 1 * socorePerMonster;

  totalScore = monstersInfo.data.reduce((acc, cur) => acc + cur.cnt * socorePerMonster, totalScore);

  if (Math.abs(score - totalScore) > errorRange) {
    return { status: 'fail', message: 'Score verification failed' };
  }

  //DB에 저장한다면 여기서
  const data = {
    timestamp: new Date(gameEndTime),
    score,
  };
  addGameResult(id, data);

  return { status: 'success', message: 'Game ended', score };
};

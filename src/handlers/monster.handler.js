import { getMonsterLevel, increaseMonsterKillCount } from '../models/monster.model.js';

export const addMonsterKillCount = (userId, payload) => {
  const { monsterLevel } = payload;
  const currentLevel = getMonsterLevel(userId);
  if (monsterLevel > currentLevel) {
    return { status: 'fail', message: `monsterLevel(${monsterLevel}) is not matched` };
  }
  increaseMonsterKillCount(userId, monsterLevel);
  return { status: 'success' };
};

export const killGoldenGoblin = (userId, payload) => {
  const { monsterNumber } = payload;
  if (monsterNumber !== 6) {
    return { status: 'fail', message: 'it is not Golden Goblin' };
  }
  return { status: 'success', gold: 1000 };
};

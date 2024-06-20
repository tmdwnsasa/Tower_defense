import { getMonsterLevel, getUserMonstersInfo, increaseMonsterKillCount } from '../models/monster.model.js';

export const addMonsterKillCount = (userId, payload) => {
  const { monsterLevel } = payload;
  const currentLevel = getMonsterLevel(userId);
  if (monsterLevel > currentLevel) {
    return { status: 'fail', message: `monsterLevel(${monsterLevel}) is not matched` };
  }
  increaseMonsterKillCount(userId, monsterLevel);
  return { status: 'success' };
};

export const spawnGoldenGoblin = (userId, payload) => {
  const userMonstersInfo = getUserMonstersInfo(userId);
  if (userMonstersInfo.data[0] >= getMonsterLevel(userId))
    return { status: 'fail', message: 'too many spawn Golden Goblin' };
  return { status: 'success' };
};

export const killGoldenGoblin = (userId, payload) => {
  const { monsterNumber } = payload;
  if (monsterNumber !== 6) {
    return { status: 'fail', message: 'it is not Golden Goblin' };
  }
  increaseMonsterKillCount(userId, 0);
  return { status: 'success', gold: 500 };
};

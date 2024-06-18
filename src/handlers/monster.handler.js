import { getMonsterLevel, increaseMonsterKillCount } from '../models/monster.model.js';

export const addMonsterKillCount = (userId, payload) => {
  const { monsterlevel } = payload;
  const currentLevel = getMonsterLevel(userId);
  if (monsterlevel > currentLevel) {
    return { status: 'fail', message: 'MonsterLevel is not matched' };
  }

  increaseMonsterKillCount(userId, monsterlevel);
  return { status: 'success' };
};

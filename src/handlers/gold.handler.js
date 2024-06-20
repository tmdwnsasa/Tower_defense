import { getGold, setGold } from '../models/gold.model.js';

export const applyChangedGold = (userId, payload) => {

  const serverGold = getGold(userId);

  // console.log("gold.handeler >> serverGold, currentGold", serverGold, payload.currentGold);

  // 클라이언트 vs 서버 비교
  if (serverGold !== payload.currentGold) {
    return { status: 'fail', message: 'Current Gold mismatch' };
  }

  setGold(userId, serverGold + payload.gold);

  return { status: 'success' };
};

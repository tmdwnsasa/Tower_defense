import { getScore, addScore } from '../models/score.model.js';

export const addMonsterKillScore = (userId, payload) => {

  const serverScore = getScore(userId);

  // 클라이언트 vs 서버 비교
  if (serverScore !== payload.currentScore) {
    return { status: 'fail', message: 'Current Score mismatch' };
  }

  addScore(userId, payload.score);

  return { status: 'success' };
};

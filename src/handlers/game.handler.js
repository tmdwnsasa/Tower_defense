import { initializeMonsters } from '../models/monster.model.js';
import { initializeBase } from '../models/base.model.js'; 
import { prisma } from '../utils/prisma/index.js'; // Prisma 클라이언트 임포트

export const gameStart = (id, payload) => {
  initializeMonsters(id);
  initializeBase(id);
  return { status: 'success' };
};

export const gameEnd = async (userId, payload) => {
  const { timestamp: gameEndTime, score } = payload;

  // 점수 검증 로직 추가 
  if (score < 0) {
    return { status: 'fail', message: 'Invalid score' };
  }

  try {
    // 데이터베이스에 점수를 저장하는 로직 추가 
    await prisma.$transaction([
      prisma.gameResultLog.create({
        data: {
          id: userId,
          score: score,
          timestamp: new Date(gameEndTime),
        },
      }),
    ]);

    return { status: 'success', message: 'Game ended', score };
  } catch (error) {
    console.error('Error saving game result:', error);
    return { status: 'fail', message: 'Failed to save game result' };
  }
};



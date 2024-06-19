import { initializeMonsters } from '../models/monster.model.js';
import { initializeBase } from '../models/base.model.js';
import { addTower, removeTower, upgradeTower } from '../models/tower.model.js';
import { prisma } from '../utils/prisma/index.js'; // Prisma 클라이언트 임포트

export const gameStart = (userId, payload) => {
  initializeMonsters(userId);
  initializeBase(userId);
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

export const handleTowerEvent = (userId, payload, eventId) => {
  const { x, y } = payload;
  console.log(`무슨 이벤트냐 : ${eventId}, userId: ${userId}, payload:`, payload);
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
      return { status: 'fail', message: 'Invalid tower event', eventId: eventId };
  }
};

import { prisma } from '../utils/prisma/index.js';

// // 최고 점수 갱신
// export const updateHighScore = async (userId, score) => {
//   const updatedHighScore = await prisma.User.update({
//     data: {
//       score,
//     },
//     where: {
//       userId,
//     },
//   });
// };

// 최고 점수 조회
export const getHighScore = async (userId) => {
  const user = await prisma.GameResultLog.findFirst({
    where: {
      userId,
    },
    orderBy: {
      score: 'desc',
    }
  });

  if (!user) {
    return null;
  }

  return user.score;
};

// 게임 결과 이력 추가
export const addGameResult = async (userId, data) => {
  const gameResult = await prisma.GameResultLog.create({
    data: {
      userId,
      score: data.score,
      score: data.timestamp,
    },
  });
};

// 게임 결과 이력 조회
export const getGameResults = async (userId, take = 10) => {
  const gameResults = await prisma.GameResultLog.findMany({
    data: {
      score: true,
      timestamp: true,
    },
    where: {
      userId,
    },
    orderBy: {
      timestamp: 'desc',
    },

    take,
  });

  return gameResults;
};

// 랭킹 조회
export const getranking = async (take = 10) => {
  const ranking = await prisma.GameResultLog.findMany({
    data: {
      userId: true,
      score: true,
    },
    orderBy: {
      score: 'desc',
    },
    take,
  });

  //   console.log(ranking);
  return ranking;
};
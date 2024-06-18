const userTowers = {};

// userTowers 샘플
// {${userId} : [ {orderId: 1, posX:100, posY: 50, upgrade_level:0 },
//             {orderId: 2, posX:200, posY: 150, upgrade_level:1 },                                
//           ]
// }

// 게임 시작 시 타워 기록 초기화
export const initializeTowers = (userId) => {
  userTowers[userId] = [];
};

// 타워 추가 기록
export const addTower = (userId, Tower) => {
  if (!userTowers[userId]) {
    userTowers[userId] = [];
  }
  userTowers[userId].push(Tower);
};

// 타워 제거 기록
export const removeTower = (userId, Tower) => {
    if (!userTowers[userId]) {
      return;
    }
    userTowers[userId].pull(Tower);
};

// 유저의 타워 획득 기록 조회
export const getUserTowers = (userId) => {
  return userTowers[userId] || [];
};

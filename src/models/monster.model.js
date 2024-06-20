const userMonstersInfo = {};

// userTowers 샘플
// {${userId} : { currentLevel: 1, data: [-1, 0, 1, 3...]}
//
//
// }

// 게임 시작 시 몬스터 기록 초기화
export const initializeMonsters = (userId) => {
  userMonstersInfo[userId] = { currentLevel: 1, totalKills: 0, data: [-1] };
};

// 몬스터가 죽었을 때 횟수 증가
export const increaseMonsterKillCount = (userId, monsterLevel, cnt = 1) => {
  if (monsterLevel !== 0) userMonstersInfo[userId].totalKills++;

  if (!userMonstersInfo[userId].data[monsterLevel]) {
    userMonstersInfo[userId].data[monsterLevel] = cnt;
  } else {
    userMonstersInfo[userId].data[monsterLevel] += cnt;
    if (userMonstersInfo[userId].totalKills % 20 === 0) increaseMonsterLevel(userId);
  }

  // console.log("userId: ", userId, "userMonstersInfo[userId]", userMonstersInfo[userId]);
};

// 몬스터 레벨 증가
export const increaseMonsterLevel = (userId) => {
  userMonstersInfo[userId].currentLevel++;
};

// 현재 몬스터 레벨 조회
export const getMonsterLevel = (userId) => {
  return userMonstersInfo[userId].currentLevel;
};

// 유저의 몬스터 기록 삭제
export const removeUserMonstersInfo = (userId) => {
  delete userMonstersInfo.userId;
};

// 유저의 몬스터 기록 조회
export const getUserMonstersInfo = (userId) => {
  return userMonstersInfo[userId] || [];
};

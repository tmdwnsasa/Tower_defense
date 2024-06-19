const userMonstersInfo = {};

// 게임 시작 시 몬스터 기록 초기화
export const initializeMonsters = (userId) => {
  userMonstersInfo[userId] = { currentLevel: 1, data: [-1] };
};

// 몬스터가 죽었을 때 횟수 증가
export const increaseMonsterKillCount = (userId, monsterLevel, cnt = 1) => {
  if (!userMonstersInfo[userId].data[monsterLevel]) {
    userMonstersInfo[userId].data.push(cnt);
  } else {
    userMonstersInfo[userId].data[monsterLevel] += cnt;
    if (userMonstersInfo[userId].data[monsterLevel] >= 20) increaseMonsterLevel(userId);
  }
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

const BASE_MAX_HP = 100;

const userBase = {};

// 게임 시작 시 베이스 체력 초기화
export const initializeBase = (userId) => {
  userBase[userId] = BASE_MAX_HP;
};

// 베이스 체력 설정
export const setBaseHp = (userId, baseHp) => {
  userBase[userId] = baseHp;
};

// 베이스 체력 가져오기
export const getBaseHp = (userId) => {
  return userBase[userId];
};

// 베이스 정보 삭제
export const removeBase = (userId) => {
  delete userBase.userId;
};

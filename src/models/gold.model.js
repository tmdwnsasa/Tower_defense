const userGoldInfo = {};

// 게임 시작 시 골드 기록 초기화
export const initializeGold = (userId) => {
  
  userGoldInfo[userId] = 1000;
  console.log(`initializeGold: ${JSON.stringify(userGoldInfo)}`);
};

// 해당 유저 골드 조회
export const getGold = (userId) => {
  if(!userId) return userGoldInfo;
  return userGoldInfo[userId];
};

// 해당 유저 골드 설정
export const setGold = (userId, gold) => {
  userGoldInfo[userId] = gold;
  // console.log(`success setGold >> userId : ${userId}, Current Gold: ${userGoldInfo[userId]}`);
};

// // 해당 유저 골드 추가
// export const addGold = (userId, gold) => {
//   userGoldInfo[userId] += gold;
  
// };

// // 해당 유저 골드 정보 제거
// export const removeGold = (userId) => {
//   delete userGoldInfo[userId];
// };

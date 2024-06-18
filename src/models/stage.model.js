const stages = {};

export const createStage = (userId) => {
  stages[userId] = []; // 초기 스테이지 배열 생성
};

export const getStage = (userId) => {
  return stages[userId];
};

export const setStage = (userId, id, timestamp) => {
  return stages[userId].push({ id, timestamp});
};

export const clearStage = (userId) => {
  return (stages[userId] = []);
};

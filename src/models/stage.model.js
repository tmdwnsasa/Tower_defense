const stages = {};

export const createStage = (userId) => {
  stages[userId] = []; // 초기 스테이지 배열 생성
  // console.log("stages: ", stages);
};

export const getStage = (userId) => {
  return stages[userId];
};

export const setStage = (userId, id, timestamp) => {
  const updatedStageInfo = stages[userId].push({ id, timestamp}); 
  //console.log(`stage.model.js setStage || userId >> ${userId}, stages:`, getStage(userId));
  return updatedStageInfo;
};

export const clearStage = (userId) => {
  //console.log(`clearStage! userId ${userId}`);
  return (stages[userId] = []);
};

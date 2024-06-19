import { getGameAssets } from '../init/assets.js';
import { getStage, setStage } from '../models/stage.model.js';

export const moveStageHandler = (userId, payload) => {

  let currentStages = getStage(userId); // 서버가 가지고 있는 유저의 현재 스테이지 정보
  if (!currentStages.length) {
    return { status: 'fail', message: 'No stages found for user' };
  }

  // 오름차순 -> 가장 큰 스테이지 ID를 확인 <- 유저의 현재 스테이지
  currentStages.sort((a, b) => a.id - b.id);
  const currentStage = currentStages[currentStages.length - 1];

  // 클라이언트 vs 서버 비교
  if (currentStage.id !== payload.currentStage) {
    return { status: 'fail', message: 'Current Stage mismatch' };
  }

  // targetStage 대한 검증 <- 게임 에셋에 존재하는가?
  const { stages } = getGameAssets();
  if (!stages.data.some(stage => stage.id === payload.targetStage)) {
    return { status: 'fail', message: `Target stage(${payload.targetStage}) not found` };
  }

  const serverTime = Date.now(); // 현재 타임스탬프
  
  const updatedStageInfo = setStage(userId, payload.targetStage, serverTime);
  // console.log("stageHandler >> setStage:  ", updatedStageInfo);

  return { status: 'success' };
};

import { initializeMonsters } from '../models/monster.model.js';
import { getGameAssets } from '../init/assets.js';
import { initializeBase } from '../models/base.model.js';
import { clearStage, createStage, setStage } from '../models/stage.model.js';
import { addTower, removeTower, upgradeTower } from '../models/tower.model.js';

export const gameStart = (id, payload) => {
  const { stages } = getGameAssets();
  clearStage(id);
  setStage(id, stages.data[0].id, payload.timestamp);

  initializeMonsters(id);
  initializeBase(id);

  return { status: 'success' };
};

export const gameEnd = (id, payload) => {
  const { timestamp: gameEndTime, score } = payload;

  // 점수 검증
  // if () {
  //   return { status: 'fail', message: 'score verification failed' };
  // }

  clearStage(id);
  //DB에 저장한다면 여기서
  return { status: 'success', message: 'Game ended', score };
};

export const handleTowerEvent = (userId, payload, eventId) => {
  const { x, y } = payload;
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
      return { status: 'fail', message: 'Invalid tower event' };
  }
};

// 지금 고민 중이 내용 정리
// 0. 스테이지와 관련된 json이나 핸들러를 넣어놓고 싶음.
// 1. 그래서 기존에 공룡 게임처럼 스테이지 구별을 하려고 했으나, 초당 점수가 오르는 기믹이 없어 스테이지 구별이 의미가 없음.
// 2. 그래도 넣으려고 했으나, 넣게되면 모든 핸들러에 넣어야 할 정도로 많은 코드를 수정해야함
// 3. 기왕 넣게되면 초당 점수가 오르는 것처럼 스테이지별 몬스터 스폰 개수를 넣어볼까 함
// 4. 근데 이것마저 기획부분이라 근본적인 로직을 뒤집어 엎어야 하는 부분들이 보임
// 5. 머리 과부하 걸려서 생각을 포기함.
// 6. 시간이 지나고 다시 생각할 의지가 생김

// 0~6번 무한 루프 도는 중
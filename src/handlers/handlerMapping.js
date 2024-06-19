import { gameStart, gameEnd, handleTowerEvent } from './game.handler.js';
import { addMonsterKillCount } from './monster.handler.js';

const handlerMapping = {
  2: gameStart,
  3: gameEnd,
  42: handleTowerEvent, // 초기 타워 배치
  43: handleTowerEvent, // 타워 구입
  44: handleTowerEvent, // 타워 환불
  45: handleTowerEvent // 타워 업그레이드
};

export default handlerMapping;

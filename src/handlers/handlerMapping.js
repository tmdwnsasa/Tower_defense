import { damageBase } from './base.handler.js';
import { gameStart, gameEnd, handleTowerEvent } from './game.handler.js';
import { addMonsterKillCount } from './monster.handler.js';

const handlerMapping = {
  2: gameStart,
  3: gameEnd,
  41: addMonsterKillCount,
  42: handleTowerEvent,
  43: handleTowerEvent,
  44: handleTowerEvent,
  45: handleTowerEvent,
  51: damageBase,
};

export default handlerMapping;

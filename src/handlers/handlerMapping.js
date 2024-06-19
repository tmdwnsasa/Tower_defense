import { damageBase } from './base.handler.js';
import { handleTowerEvent } from './tower.handler.js';
import { addMonsterKillCount } from './monster.handler.js';
import { gameEnd, gameStart } from './game.handler.js';


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

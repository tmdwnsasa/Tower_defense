import { damageBase } from './base.handler.js';
import { gameStart, gameEnd } from './game.handler.js';
import { addMonsterKillCount } from './monster.handler.js';

const handlerMapping = {
  2: gameStart,
  3: gameEnd,
  41: addMonsterKillCount,
  51: damageBase,
};

export default handlerMapping;

import { gameStart, gameEnd } from './game.handler.js';
import { addMonsterKillCount } from './monster.model.js';

const handlerMapping = {
  2: gameStart,
  3: gameEnd,
  41: addMonsterKillCount,
};

export default handlerMapping;

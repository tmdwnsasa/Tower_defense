import { damageBase } from './base.handler.js';
import { gameStart, gameEnd } from './game.handler.js';
import { moveStageHandler } from './stage.handler.js';
import { handleTowerEvent } from './tower.handler.js';
import { addMonsterKillCount } from './monster.handler.js';
<<<<<<< origin/Feature/#24-high-score-event
=======
import { gameEnd, gameStart } from './game.handler.js';
>>>>>>> dev

const handlerMapping = {
  2: gameStart,
  3: gameEnd,
  11: moveStageHandler,
  41: addMonsterKillCount,
  42: handleTowerEvent,
  43: handleTowerEvent,
  44: handleTowerEvent,
  45: handleTowerEvent,
  51: damageBase,
};

export default handlerMapping;

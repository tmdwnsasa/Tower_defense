import { damageBase } from './base.handler.js';
import { gameStart, gameEnd } from './game.handler.js';
import { moveStageHandler } from './stage.handler.js';
import { handleTowerEvent } from './tower.handler.js';
import { addMonsterKillCount, killGoldenGoblin, spawnGoldenGoblin } from './monster.handler.js';

const handlerMapping = {
  2: gameStart,
  3: gameEnd,
  11: moveStageHandler,
  31: addMonsterKillCount,
  32: spawnGoldenGoblin,
  33: killGoldenGoblin,
  42: handleTowerEvent,
  43: handleTowerEvent,
  44: handleTowerEvent,
  45: handleTowerEvent,
  51: damageBase,
};

export default handlerMapping;

import { damageBase } from './base.handler.js';
import { gameStart, gameEnd } from './game.handler.js';
import { moveStageHandler } from './stage.handler.js';
import { handleTowerEvent } from './tower.handler.js';
import { addMonsterKillScore } from './score.handler.js';
import { addMonsterKillCount, killGoldenGoblin, spawnGoldenGoblin } from './monster.handler.js';
import { applyChangedGold } from './gold.handler.js';

const handlerMapping = {
  2: gameStart,
  3: gameEnd,
  11: moveStageHandler,
  24: addMonsterKillScore,
  25: applyChangedGold,
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

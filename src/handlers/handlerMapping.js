import { gameStart, gameEnd } from './game.handler.js';

const handlerMapping = {
  2: gameStart,
  3: gameEnd,
};

export default handlerMapping;

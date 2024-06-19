import { addTower, removeTower, upgradeTower } from '../models/tower.model.js';



export const handleTowerEvent = (userId, payload) => {
  const { x, y , eventId} = payload;
  console.log(`userId: ${userId}, eventId : ${eventId} `); 
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
      return { status: 'fail', message: 'Invalid tower event'};
  }
};

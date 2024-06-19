const userTowers = {};

export const initializeTowers = (userId) => {
  userTowers[userId] = [];
};

export const addTower = (userId, Tower) => {
  if (!userTowers[userId]) {
    userTowers[userId] = [];
  }
  userTowers[userId].push(Tower);
};

export const removeTower = (userId, Tower) => {
  if (!userTowers[userId]) {
    return;
  }
  userTowers[userId] = userTowers[userId].filter(t => t.x !== Tower.x || t.y !== Tower.y);
};

export const upgradeTower = (userId, Tower) => {
  if (!userTowers[userId]) {
    return;
  }
  const tower = userTowers[userId].find(t => t.x === Tower.x && t.y === Tower.y);
  if (tower) {
    tower.isUpgraded = true;
    tower.attackPower *= 1.5;
    tower.range *= 1.2;
  }
};

export const getUserTowers = (userId) => {
  return userTowers[userId] || [];
};

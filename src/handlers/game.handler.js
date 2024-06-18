export const gameStart = (uuid, payload) => {
  return { status: 'success' };
};

export const gameEnd = (uuid, payload) => {
  const { timestamp: gameEndTime, score } = payload;

  // 점수 검증
  // if () {
  //   return { status: 'fail', message: 'score verification failed' };
  // }

  //DB에 저장한다면 여기서
  return { status: 'success', message: 'Game ended', score };
};

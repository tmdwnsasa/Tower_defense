import { getBaseHp, setBaseHp } from '../models/base.model.js';

export const damageBase = (id, payload) => {
  const { currHp } = payload;
  if (currHp <= 0) {
    //점수 저장하기
  }
  if (getBaseHp(id) < currHp) setBaseHp(currHp);
  else return { status: 'fail' };
};

import express from 'express';
import { prisma } from '../utils/prisma/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import configs from '../utils/configs.js';

const router = express.Router();

// 회원가입 API
router.post('/signUp', async (req, res, next) => {
  try {
    const { id: userId, password } = req.body;

    if (!userId || !password) {
      return res.status(401).json({ errorMessage: '입력 값이 잘못되었습니다.' });
    }
    // 아이디 중복 확인 테스트
    const isExistUser = await prisma.user.findUnique({
      where: { userId },
    });
    if (isExistUser) {
      return res.status(409).json({ errorMessage: '이미 존재하는 아이디입니다.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 유저 생성
    await prisma.user.create({
      data: {
        userId,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: '회원가입이 완료되었습니다.' });
  } catch (err) {
    return res.status(500).json({ errorMessage: '서버 내부 에러가 발생했습니다.' });
  }
});

// 로그인 API
router.get('/signIn', async (req, res, next) => {
  try {
    const { id: userId, password } = req.body;

    if (!userId || !password) {
      return res.status(401).json({ errorMessage: '입력 값이 잘못되었습니다.' });
    }

    // 유저 존재 유무 확인
    const user = await prisma.user.findUnique({
      where: { userId },
    });
    if (!user) {
      return res.status(404).json({ errorMessage: '존재하지 않는 아이디입니다.' });
    }

    // 비밀번호 확인
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ errorMessage: '비밀번호가 일치하지 않습니다.' });
    }

    const token = jwt.sign(
      {
        userId,
      },
      configs.tokenSecretKey
    );

    res.cookie('authorization', `Bearer ${token}`);
    return res.status(200).json({
      message: '로그인이 완료되었습니다.',
    });
  } catch (err) {
    return res.status(500).json({ errorMessage: '서버 내부 에러가 발생했습니다.' });
  }
});

export default router;

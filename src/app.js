import express from 'express';
import { createServer } from 'http';
import initSocket from './init/socket.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.router.js';

const app = express();
const server = createServer(app);

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('tower_defense_client'));
app.use(cookieParser());
app.use('/api', [userRouter]);
initSocket(server);

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World!' });
});

// app.listen(PORT, () => {
//   console.log(PORT, '포트 서버 연결 완료');
// });

server.listen(PORT, async () => {
  try {
    //리소스 로딩 하는 곳
    console.log('Success');
  } catch (err) {
    console.log('Failed to load game assets');
  }
});

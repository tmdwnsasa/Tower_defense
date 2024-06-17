import express from 'express';
import { createServer } from 'http';
import initSocket from './init/socket.js';

const app = express();
const server = createServer(app);

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('tower_defense_client'));
initSocket(server);

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World!' });
});

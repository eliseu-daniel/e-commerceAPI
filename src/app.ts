import express from 'express';
import routes from './interfaces/https/routes/index.ts';
import cors from 'cors';
import Container from './infra/di/container.ts';

export const diContainer = new Container();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

export default app;
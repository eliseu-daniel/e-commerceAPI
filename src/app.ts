import express from 'express';
import cors from 'cors';
import routes from './interfaces/https/routes/index.ts';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

export default app;
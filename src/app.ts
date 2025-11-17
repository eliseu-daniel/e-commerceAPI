import express, { Router } from 'express';
import cors from 'cors';
import startRoutes from './startRoutes.ts';

const app = express();
const router = Router();
app.use(cors());
app.use(express.json());
app.use('/api', router);
startRoutes(router);

export default app;
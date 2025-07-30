import express, { Request, Response } from 'express';
import {produtos, Teste} from '../controllers/UserController'

const router = express.Router();

router.get('/teste', Teste);

router.get('/', produtos);

export default router;
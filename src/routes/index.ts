import express from 'express';
import {ListarTarefas} from '../controllers/UserController'

const router = express.Router();

router.get('/', ListarTarefas);

export default router;
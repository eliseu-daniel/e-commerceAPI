import express from 'express';
import { Teste, createUser, getAll, getUser } from '../controllers/UserController.ts'
import { findAll } from '../controllers/ClientsController.ts';

const router = express.Router();

router.post('/teste', Teste);

router.get('/users', getAll);
router.get('/users/:id', getUser);
router.post('/users', createUser);


router.get('/clients', findAll);

export default router;
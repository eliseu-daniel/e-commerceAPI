import express from 'express';
import {Teste, createUser, getAll, getUser} from '../controllers/UserController'

const router = express.Router();

router.post('/teste', Teste);

router.get('/users', getAll);
router.get('/users/:id', getUser);
router.post('/users', createUser);



export default router;
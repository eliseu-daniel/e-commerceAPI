import express from 'express';
import {Teste, createUser, getAll} from '../controllers/UserController'

const router = express.Router();

router.post('/teste', Teste);

router.get('/users', getAll);
router.post('/users', createUser);



export default router;
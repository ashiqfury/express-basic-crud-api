import controller from '../controllers/users.js';
import express from 'express';

const router = express.Router();

router.get('/', controller.getUsers);

router.post('/', controller.createUser);

router.get('/:id', controller.getUser);

router.delete('/:id', controller.deleteUser);

router.patch('/:id', controller.updateUser);

export default router;

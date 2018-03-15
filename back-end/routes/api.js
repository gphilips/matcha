import express from 'express';
import { createUser } from '../controllers/users/createUser.js';
import { getAllUsers, getUser } from '../controllers/users/getUser.js';
// import { updateUser } from '../controllers/users/updateUser.js';
// import { deleteUser } from '../controllers/users/deleteUser.js';

const router = express.Router();

router.get('/users/get', getAllUsers);
router.get('/users/get/:id', getUser);
router.post('/users/create', createUser);
// router.put('/users/update/:id', updateUser);
// router.delete('/users/delete/:id', deleteUser);

module.exports = router;

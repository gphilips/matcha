import express from 'express';
import createUser from '../controllers/users/createUser.js';
import { getter, getAll } from '../controllers/general/getter.js';
import updater from '../controllers/general/updater.js';
import deleter from '../controllers/general/deleter.js';

const router = express.Router();

//Exemple de requete get et delete :
// http://localhost:5000/api/users/email?value=greg.philips@gmail.com

//Exemple de requete put :
// http://localhost:5000/api/users/email?value=greg.philips@yopmail.com&id=22

router.get('/:table', getAll);
router.get('/:table/:field', getter);
router.put('/:table/:field', updater);
router.delete('/:table/:field', deleter);
router.post('/users', createUser);

module.exports = router;

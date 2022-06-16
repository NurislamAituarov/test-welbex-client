import Router from 'express';
const router = new Router();
import Controller from '../controllers/controller.js';

router.get('/get', Controller.getTableItems);
router.post('/create', Controller.createTableItem);

export default router;

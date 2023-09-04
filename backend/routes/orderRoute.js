import express from 'express';

import  {newOrder, getSingleOrder} from '../controllers/orderController.js';

const router = express.Router();

router.post('/new', newOrder);
router.get('/getSingleOrder', getSingleOrder);








export default router;
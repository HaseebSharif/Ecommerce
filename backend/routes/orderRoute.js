import express from 'express';

import  {newOrder, getSingleOrder, myOrders , getAllOrders ,updateOrder ,deleteOrder} from '../controllers/orderController.js';

const router = express.Router();

router.post('/new', newOrder);
router.get('/getSingleOrder', getSingleOrder);
router.get('/myOrders', myOrders);
router.get('/getAll', getAllOrders);
router.put('/updateOrder', updateOrder);
router.delete('/deleteOrder', deleteOrder);












export default router;
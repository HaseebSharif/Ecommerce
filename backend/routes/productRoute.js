import express from 'express';

import  {createProduct , getAllProducts , updateProduct , deleteProduct , getSingleProduct} from '../controllers/productController.js';

const router = express.Router();

router.post('/new', createProduct);
router.get('/getall', getAllProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/:id', getSingleProduct);






export default router;
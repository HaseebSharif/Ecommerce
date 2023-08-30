import express from 'express';

import  {registerUser, Login , LogOut} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', Login);
router.post('/logout', LogOut);

// router.get('/getall', getAllProducts);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);
// router.get('/:id', getSingleProduct);






export default router;
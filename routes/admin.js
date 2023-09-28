const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-product', adminController.postAddProduct);
router.delete('/delete-product/:productId', adminController.postDeleteProduct);
router.get('/product/:productId', adminController.getEditProduct);
router.get('/products', adminController.getProducts);
router.put('/edit-product/:productId', adminController.postEditProduct);





module.exports = router;



import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../Controllers/ProductController.js';

import { verifyToken } from  '../middleware/auth.js'; 

const router = express.Router();


router.post('/', verifyToken, createProduct);


router.get('/', getAllProducts);


router.get('/:id', getProductById);


router.put('/:id', verifyToken, updateProduct);


router.delete('/:id', verifyToken, deleteProduct);

export default router;

// routes/adminRoutes.js
import express from 'express';
import { getAllUsers, loginAdmin } from '../controllers/adminController.js';
import { protectAdmin } from '../middleware/adminauthMiddleware.js';

const router = express.Router();

// Route to login admin
router.post('/login', loginAdmin);

// Route to get all users, protected by admin middleware
router.get('/users', protectAdmin, getAllUsers);

export default router;

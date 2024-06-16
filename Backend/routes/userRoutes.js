import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
import { markAttendance, markLeave, getAttendance } from '../controllers/attendanceController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.post('/attendance/mark', protect, markAttendance);
router.post('/attendance/leave', protect, markLeave);
router.get('/attendance', protect, getAttendance);

export default router;

// server.js or index.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js'; // import admin routes
import cors from 'cors';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// User routes
app.use('/api/users', userRoutes);

// Admin routes
app.use('/api/admin', adminRoutes); // use admin routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

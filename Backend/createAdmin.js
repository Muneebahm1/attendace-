// createAdmin.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from './models/Admin.js';
import connectDB from './db.js';
import dotenv from 'dotenv';

dotenv.config(); // Ensure you have your .env file with MONGO_URI

const createAdmin = async () => {
  try {
    await connectDB(); // Connect to the database

    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = new Admin({
      email: 'admin@gmail.com',
      password: hashedPassword,
    });
    await admin.save();
    console.log('Admin created successfully');
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();

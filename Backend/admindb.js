import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from './models/admin.js';

const createAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = new Admin({
      email: 'admin123@gmail.com',
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

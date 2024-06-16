// src/utils/jwtUtils.js
import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  return jwt.sign(
    { user: { id: user._id } }, // Ensure this structure
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );
};

export default generateToken;

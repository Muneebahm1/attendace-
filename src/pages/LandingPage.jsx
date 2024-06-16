// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const LandingPage = () => {
  return (
    <>
    <Nav/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-8">Welcome to the Attendance System</h1>
        <div className="space-y-4 ">
          <Link to="/login">
            <button className="w-full my-10 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              User Sign In
            </button>
          </Link>
          <Link to="/adminlogin">
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
              Admin Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;

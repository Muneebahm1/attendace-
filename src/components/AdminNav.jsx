import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Assuming token is stored in localStorage
    navigate('/adminlogin');
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/admin" className="text-white text-lg font-semibold hover:text-gray-200">
          Dashboard
        </Link>
        <div className="flex space-x-4">
          <button className="text-white hover:text-gray-200" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
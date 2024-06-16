import React from 'react';
import { Link} from 'react-router-dom';

const Nav = () => {

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold hover:text-gray-200">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

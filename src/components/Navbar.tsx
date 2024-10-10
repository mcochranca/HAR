import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">HAR System</Link>
        <div>
          <Link to="/" className="mr-4 hover:text-indigo-200">Dashboard</Link>
          <Link to="/axiom-editor" className="hover:text-indigo-200">Axiom Editor</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
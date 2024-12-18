import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-black text-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold hover:underline">
        My Portfolio
      </Link>
      <div className="space-x-6">
        <Link to="/projects" className="hover:text-gray-300 transition">
          Projects
        </Link>
        <Link to="/blog" className="hover:text-gray-300 transition">
          Blog
        </Link>
        <Link to="/about" className="hover:text-gray-300 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-300 transition">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

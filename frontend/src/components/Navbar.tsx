import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">
        My Portfolio
      </Link>
      <div className="space-x-4">
        <Link to="/projects" className="hover:underline">
          Projects
        </Link>
        <Link to="/blog" className="hover:underline">
          Blog
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex space-x-6 lg:space-x-8 mt-4 lg:mt-0`}
        >
          <Link to="/projects" className="block lg:inline-block hover:text-gray-300">
            Projects
          </Link>
          <Link to="/blog" className="block lg:inline-block hover:text-gray-300">
            Blog
          </Link>
          <Link to="/about" className="block lg:inline-block hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="block lg:inline-block hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

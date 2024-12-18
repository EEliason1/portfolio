import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <section className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
    <p className="text-lg mb-6">
      Explore my projects, read my blog, and learn more about my journey as a software engineer.
    </p>
    <div className="space-x-4">
      <Link
        to="/projects"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Projects
      </Link>
      <Link
        to="/blog"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Read Blog
      </Link>
      <Link
        to="/about"
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        About Me
      </Link>
    </div>
  </section>
);

export default Home;

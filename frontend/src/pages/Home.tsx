import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const Home: React.FC = () => (
  <PageWrapper>
    <section className="text-center px-4 py-8 sm:py-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
        Welcome to My Portfolio
      </h1>
      <p className="text-base sm:text-lg text-gray-400 mb-8">
        Explore my projects, read my blog, and learn more about my journey as a software engineer.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link
          to="/projects"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
        >
          View Projects
        </Link>
        <Link
          to="/blog"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
        >
          Read Blog
        </Link>
      </div>
    </section>
  </PageWrapper>
);

export default Home;

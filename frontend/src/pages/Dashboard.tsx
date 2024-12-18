import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT token
    navigate("/admin"); // Redirect to admin login
  };

  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Admin Dashboard</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-lg mx-auto">
        <Link
          to="/admin/projects"
          className="bg-gray-800 text-white px-6 py-4 rounded shadow-md hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
        >
          Manage Projects
        </Link>
        <Link
          to="/admin/blogs"
          className="bg-gray-800 text-white px-6 py-4 rounded shadow-md hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
        >
          Manage Blogs
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-transform transform hover:-translate-y-1 mt-8"
      >
        Logout
      </button>
    </section>
  );
};

export default Dashboard;

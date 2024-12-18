import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Admin Dashboard</h2>
      <div className="space-y-4">
        <Link
          to="/admin/projects"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
        >
          Manage Projects
        </Link>
        <Link
          to="/admin/blogs"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
        >
          Manage Blogs
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition-transform transform hover:-translate-y-1 mt-4"
      >
        Logout
      </button>
    </section>
  );
};

export default Dashboard;

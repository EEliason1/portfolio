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
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="space-x-4">
        <Link
          to="/admin/projects"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Manage Projects
        </Link>
        <Link
          to="/admin/blogs"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Manage Blogs
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
      >
        Logout
      </button>
    </section>
  );
};

export default Dashboard;

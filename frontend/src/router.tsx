import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageProjects from "./pages/ManageProjects";
import ManageBlogs from "./pages/ManageBlogs";

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/admin" element={<Admin />} />

    {/* Protected Admin Routes */}
    <Route element={<ProtectedRoute />}>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/projects" element={<ManageProjects />} />
      <Route path="/admin/blogs" element={<ManageBlogs />} />
    </Route>
  </Routes>
);

export default AppRouter;

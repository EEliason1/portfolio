import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

const Admin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <PageWrapper>
      <section className="p-8 max-w-md mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-transform transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>
      </section>
    </PageWrapper>
  );
};

export default Admin;

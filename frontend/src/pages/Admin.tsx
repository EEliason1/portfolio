import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Admin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Admin;

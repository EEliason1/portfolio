import React, { useState } from "react";
import axios from "../api/axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/contact", formData);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

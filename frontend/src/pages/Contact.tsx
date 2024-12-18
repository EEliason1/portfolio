import React, { useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/contact", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <PageWrapper>
      <section className="p-8 max-w-md mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-transform transform hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
      </section>
    </PageWrapper>
  );
};

export default Contact;

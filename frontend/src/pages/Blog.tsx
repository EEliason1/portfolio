import React, { useEffect, useState } from "react";
import axios from "../api/axios";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading blogs...</p>;

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Blog Posts</h2>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border-b pb-4">
            <h3 className="text-2xl font-semibold">{blog.title}</h3>
            <p className="text-gray-500 text-sm mb-2">By {blog.author}</p>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import PageWrapper from "../components/PageWrapper";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get("/blogs");
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <PageWrapper>
      <section className="p-8">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">Blog</h2>
        {loading ? (
          <p className="text-center text-gray-400">Loading blog posts...</p>
        ) : (
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-white">{blog.title}</h3>
                <p className="text-sm text-gray-400 mb-2">By {blog.author}</p>
                <p className="text-gray-300">{blog.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageWrapper>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../api/adminApi";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

const ManageBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [form, setForm] = useState({ title: "", content: "", author: "" });
  const [editId, setEditId] = useState<string | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (error) {
      toast.error("Failed to fetch blogs.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateBlog(editId, form, token!);
        toast.success("Blog updated successfully!");
      } else {
        await createBlog(form, token!);
        toast.success("Blog created successfully!");
      }
      setForm({ title: "", content: "", author: "" });
      setEditId(null);
      loadBlogs();
    } catch (error) {
      toast.error("Failed to save the blog.");
    }
  };

  const handleEdit = (blog: any) => {
    setForm(blog);
    setEditId(blog._id);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBlog(id, token!);
      toast.success("Blog deleted successfully!");
      loadBlogs();
    } catch (error) {
      toast.error("Failed to delete the blog.");
    }
  };

  return (
    <PageWrapper>
      <section className="p-8">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Manage Blogs</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <textarea
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={4}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          ></textarea>
          <input
            type="text"
            placeholder="Author"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-transform transform hover:-translate-y-1"
          >
            {editId ? "Update" : "Create"} Blog
          </button>
        </form>

        <div className="mt-8 space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-gray-800 p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
              <p className="text-gray-400 mt-2">{blog.content}</p>
              <p className="text-sm text-gray-500 mt-1">By {blog.author}</p>
              <div className="mt-4 space-x-4">
                <button
                  onClick={() => handleEdit(blog)}
                  className="text-yellow-500 hover:text-yellow-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-red-500 hover:text-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default ManageBlogs;

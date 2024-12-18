import React, { useEffect, useState } from "react";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../api/adminApi";

const ManageBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [form, setForm] = useState({ title: "", content: "", author: "" });
  const [editId, setEditId] = useState<string | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      await updateBlog(editId, form, token!);
    } else {
      await createBlog(form, token!);
    }
    setForm({ title: "", content: "", author: "" });
    setEditId(null);
    loadBlogs();
  };

  const handleEdit = (blog: any) => {
    setForm(blog);
    setEditId(blog._id);
  };

  const handleDelete = async (id: string) => {
    await deleteBlog(id, token!);
    loadBlogs();
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Manage Blogs</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full p-2 border rounded"
          rows={4}
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editId ? "Update" : "Create"} Blog
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-600">{blog.content}</p>
            <p className="text-sm text-gray-400">By {blog.author}</p>
            <div className="space-x-2 mt-2">
              <button onClick={() => handleEdit(blog)} className="text-yellow-500">
                Edit
              </button>
              <button onClick={() => handleDelete(blog._id)} className="text-red-500">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageBlogs;

import React, { useEffect, useState } from "react";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../api/adminApi";

const ManageProjects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [form, setForm] = useState({ title: "", description: "", demoUrl: "", repoUrl: "", imageUrl: "" });
  const [editId, setEditId] = useState<string | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      await updateProject(editId, form, token!);
    } else {
      await createProject(form, token!);
    }
    setForm({ title: "", description: "", demoUrl: "", repoUrl: "", imageUrl: "" });
    setEditId(null);
    loadProjects();
  };

  const handleEdit = (project: any) => {
    setForm(project);
    setEditId(project._id);
  };

  const handleDelete = async (id: string) => {
    await deleteProject(id, token!);
    loadProjects();
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Manage Projects</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Demo URL"
          value={form.demoUrl}
          onChange={(e) => setForm({ ...form, demoUrl: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Repo URL"
          value={form.repoUrl}
          onChange={(e) => setForm({ ...form, repoUrl: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editId ? "Update" : "Create"} Project
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {projects.map((project) => (
          <div key={project._id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <div className="space-x-2 mt-2">
              <button onClick={() => handleEdit(project)} className="text-yellow-500">Edit</button>
              <button onClick={() => handleDelete(project._id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageProjects;

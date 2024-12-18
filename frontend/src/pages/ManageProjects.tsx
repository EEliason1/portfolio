import React, { useEffect, useState } from "react";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../api/adminApi";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

const ManageProjects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [form, setForm] = useState({ title: "", description: "", demoUrl: "", repoUrl: "", imageUrl: "" });
  const [editId, setEditId] = useState<string | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      toast.error("Failed to fetch projects.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateProject(editId, form, token!);
        toast.success("Project updated successfully!");
      } else {
        await createProject(form, token!);
        toast.success("Project created successfully!");
      }
      setForm({ title: "", description: "", demoUrl: "", repoUrl: "", imageUrl: "" });
      setEditId(null);
      loadProjects();
    } catch (error) {
      toast.error("Failed to save the project.");
    }
  };

  const handleEdit = (project: any) => {
    setForm(project);
    setEditId(project._id);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id, token!);
      toast.success("Project deleted successfully!");
      loadProjects();
    } catch (error) {
      toast.error("Failed to delete the project.");
    }
  };

  return (
    <PageWrapper>
      <section className="p-8">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Manage Projects</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <input
            type="text"
            placeholder="Demo URL"
            value={form.demoUrl}
            onChange={(e) => setForm({ ...form, demoUrl: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <input
            type="text"
            placeholder="Repo URL"
            value={form.repoUrl}
            onChange={(e) => setForm({ ...form, repoUrl: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-transform transform hover:-translate-y-1"
          >
            {editId ? "Update" : "Create"} Project
          </button>
        </form>

        <div className="mt-8 space-y-4">
          {projects.map((project) => (
            <div key={project._id} className="bg-gray-800 p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4 space-x-4">
                <button
                  onClick={() => handleEdit(project)}
                  className="text-yellow-500 hover:text-yellow-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
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

export default ManageProjects;

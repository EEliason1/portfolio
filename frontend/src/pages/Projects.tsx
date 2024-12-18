import React, { useEffect, useState } from "react";
import axios from "../api/axios";

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading projects...</p>;

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project._id} className="border p-4 rounded-lg shadow-md">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Demo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

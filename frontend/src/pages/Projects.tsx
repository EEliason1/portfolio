import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import PageWrapper from "../components/PageWrapper";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get("/projects");
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <PageWrapper>
      <section className="p-8">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">Projects</h2>
        {loading ? (
          <p className="text-center text-gray-400">Loading projects...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project._id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageWrapper>
  );
};

export default Projects;

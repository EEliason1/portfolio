import axios from "./axios";

// Fetch all projects
export const getProjects = async () => {
  const { data } = await axios.get("/projects");
  return data;
};

// Create a project
export const createProject = async (project: any, token: string) => {
  const { data } = await axios.post("/projects", project, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Update a project
export const updateProject = async (id: string, project: any, token: string) => {
  const { data } = await axios.put(`/projects/${id}`, project, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Delete a project
export const deleteProject = async (id: string, token: string) => {
  const { data } = await axios.delete(`/projects/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Fetch all blog posts
export const getBlogs = async () => {
  const { data } = await axios.get("/blogs");
  return data;
};

// Create a blog
export const createBlog = async (blog: any, token: string) => {
  const { data } = await axios.post("/blogs", blog, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Update a blog
export const updateBlog = async (id: string, blog: any, token: string) => {
  const { data } = await axios.put(`/blogs/${id}`, blog, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Delete a blog
export const deleteBlog = async (id: string, token: string) => {
  const { data } = await axios.delete(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

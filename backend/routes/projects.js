const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/auth");

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new project (Admin only)
router.post("/", auth(["admin"]), async (req, res) => {
  try {
    const { title, description, demoUrl, repoUrl, imageUrl } = req.body;

    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required." });
    }

    const project = new Project({ title, description, demoUrl, repoUrl, imageUrl });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

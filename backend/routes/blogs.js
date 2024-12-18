const express = require("express");
const Blog = require("../models/Blog");
const auth = require("../middleware/auth"); // Ensure the correct path to the auth middleware

const router = express.Router();

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new blog (Admin only)
router.post("/", auth(["admin"]), async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

module.exports = router;

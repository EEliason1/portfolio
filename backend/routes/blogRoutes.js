const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

const router = express.Router();

// Public route to get all blogs
router.get('/', getBlogs);

// Admin-only routes
router.post('/', protect, createBlog);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);

module.exports = router;

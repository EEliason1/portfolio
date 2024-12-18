const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');

const router = express.Router();

// Public route to get all projects
router.get('/', getProjects);

// Admin-only routes
router.post('/', protect, createProject);
router.put('/:id', protect, updateProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;

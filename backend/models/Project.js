const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please add an image URL'],
  },
  demoUrl: {
    type: String,
    required: [true, 'Please add a demo URL'],
  },
  repoUrl: {
    type: String,
    required: [true, 'Please add a repository URL'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Project', projectSchema);

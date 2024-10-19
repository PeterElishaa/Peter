// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// backend/server.js
const Project = require('./models/project');
const about = require('./models/about');

const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/projectsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Project Schema
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

// Create Project Model
const Project = mongoose.model('Project', projectSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API Endpoints
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post('/api/projects', async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

app.put('/api/projects/:id', async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
});

app.delete('/api/projects/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

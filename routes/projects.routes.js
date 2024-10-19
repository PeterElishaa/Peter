const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects.controller');

// Define routes for projects
router.get('/', projectsController.getProjects);
router.post('/', projectsController.addProject);
router.put('/:id', projectsController.updateProject);
router.delete('/:id', projectsController.deleteProject);

module.exports = router;

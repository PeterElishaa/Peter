const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/about.controller');

// Define routes for about section
router.get('/', aboutController.getAbout);
router.put('/', aboutController.updateAbout); // Assuming only one entry

module.exports = router;

const About = require('../models/about'); // Import the About model

// Get the About Me information
exports.getAbout = async (req, res) => {
  try {
    const aboutInfo = await About.findOne(); // Assuming only one entry
    res.json(aboutInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update About Me information
exports.updateAbout = async (req, res) => {
  try {
    const updatedAbout = await About.findOneAndUpdate({}, req.body, { new: true });
    res.json(updatedAbout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

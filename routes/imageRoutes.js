// routes/imageRoutes.js
const express = require('express');
const multer = require('multer');
const Image = require('../models/imageModels');

const router = express.Router();

// Set up multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a POST route to handle file uploads
router.post('/upload', upload.single('photo'), async (req, res) => {
  console.log("Made it to route!");
  console.log("Req.file.originalname = " + req.file.originalname);
  // console.log("Req.file.buffer = " + req.file.buffer);
  console.log("Req.file.mimetype = " + req.file.mimetype);
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const newImage = new Image({
    name: req.file.originalname,
    img: {
      data: req.file.buffer,
      contentType: req.file.mimetype
    }
  });

  try {
    await newImage.save();
    res.status(200).send('Image uploaded successfully');
  } catch (err) {
    res.status(500).send('Error saving image: ' + err.message);
  }
});

module.exports = router;
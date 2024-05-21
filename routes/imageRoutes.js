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
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const { image_title, uploader, tags } = req.body;

  const newImage = new Image({
    image_title: image_title,
    file_name: req.file.originalname,
    uploader: uploader,
    img: {
      data: req.file.buffer,
      contentType: req.file.mimetype
    },
    tags: tags ? tags.split(',') : []
  });

  try {
    await newImage.save();
    res.status(200).send('Image uploaded successfully');
  } catch (err) {
    res.status(500).send('Error saving image: ' + err.message);
  }
});

module.exports = router;
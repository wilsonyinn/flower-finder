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

//get 12 most recent images
router.get('/recent-images', async (req, res) => {
  try {
    const recentImages = await Image.find().sort({ upload_date: -1 }).limit(12);
    res.json(recentImages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving the images' });
  }
});

//get images uploaded by specified user
router.get('/images/user/:uploader', async (req, res) => {
  const { uploader } = req.params;

  if (!uploader) {
    return res.status(400).json({ success: false, message: 'Uploader not specified' });
  }

  try {
    const userImages = await Image.find({ uploader });
    res.json(userImages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'An error occurred while retrieving the images' });
  }
});

module.exports = router;
// models/imageModel.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  image_title: String,
  file_name: String,
  uploader: {
    type: String,
    required: true
  },
  upload_date: {
    type: Date,
    default: Date.now
  },
  tags: [String],
  img: {
    data: Buffer,
    contentType: String
  }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
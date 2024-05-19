const express = require("express");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const crypto = require("crypto");
const path = require("path");
const { db, gfs } = require("../db");

const router = express.Router();

// Create storage engine
const storage = new GridFsStorage({
  url: db.client.s.url,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

// Upload endpoint
router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

// // Get all files metadata
// router.get("/files", (req, res) => {
//   gfs.files.find().toArray((err, files) => {
//     if (!files || files.length === 0) {
//       return res.status(404).json({ err: "No files exist" });
//     }
//     return res.json(files);
//   });
// });

// // Get a file by filename
// router.get("/files/:filename", (req, res) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     if (!file || file.length === 0) {
//       return res.status(404).json({ err: "No file exists" });
//     }
//     return res.json(file);
//   });
// });

// // Get an image by filename
// router.get("/image/:filename", (req, res) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     if (!file || file.length === 0) {
//       return res.status(404).json({ err: "No file exists" });
//     }

//     // Check if image
//     if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
//       // Read output to browser
//       const readstream = gfs.createReadStream(file.filename);
//       readstream.pipe(res);
//     } else {
//       res.status(404).json({ err: "Not an image" });
//     }
//   });
// });

module.exports = router;

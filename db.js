const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

mongoose.connect("mongodb://localhost:27017/flower-finder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

let gfs;
db.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = { db, gfs };

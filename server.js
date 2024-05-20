const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/imageRoutes");
const connectDB = require('./config/db');

const app = express();
const PORT = 3000;

connectDB();

// middleware
app.use(bodyParser.json());
app.use(express.static("public"));

//routes
app.use("/api/users", userRoutes);
app.use("/api/uploads", uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

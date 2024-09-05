const express = require("express");
const bodyParser = require("body-parser")
const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/imageRoutes");
const connectDB = require("./config/db");
const cors = require('cors');

const app = express();
const PORT = 5000;

connectDB();

//middleware
app.use(bodyParser.json());

//routes
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/uploads", uploadRoutes);

app.listen(PORT, () => {
  console.log("Server started on port 5000");
});

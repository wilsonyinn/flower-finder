const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/flower-finder', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const PORT = 3000;

const userSchema = new mongoose.Schema({
    username: String,
    password: String
  });

  const User = mongoose.model('User', userSchema);

const newUser = new User({ username: 'user1', password: 'password1' });

newUser.save((err) => {
  if (err) return console.error(err);
  console.log('User saved successfully!');
});

let users = [];

// middleware
app.use(bodyParser.json());
app.use(express.static('public'));

//routes
app.use('/api/users', userRoutes);
app.use('/api/uploads', uploadRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
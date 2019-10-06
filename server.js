const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB Config

const db = require('./config/keys').mongoURI;

//Connect to mongodB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Bring in the routes

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

app.get('/', (req, res) => {
  res.send('Hello');
});

// Redirecting the routes to specific folders
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

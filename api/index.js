require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');

mongoose.connect(dbUri)
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const User = require('./models/user');
const Game = require('./models/game');
const Venue = require('./models/venue');

app.post('/register', async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    const secretKey = crypto.randomBytes(32).toString('hex');
    const token = jwt.sign({userId: newUser._id}, secretKey);
    res.status(200).json({token});
  } catch (error) {
    console.log('Error creating user', error);
    res.status(500).json({error: 'Internal server error'});
  }
});

app.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({message: 'Invalid email'});
    }
    if (user.password !== password) {
      return res.status(401).json({message: 'Invalid password'});
    }

    const secretKey = crypto.randomBytes(32).toString('hex');
    const token = jwt.sign({userId: user._id}, secretKey);
    res.status(200).json({token});
  } catch (error) {
    console.log('error loggin in', error);
    res.status(500).json({message: 'Error loggin In'});
  }
});
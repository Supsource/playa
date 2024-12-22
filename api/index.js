require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

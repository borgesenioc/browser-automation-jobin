const express = require('express');
const schedule = require('./schedule');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

schedule.start();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

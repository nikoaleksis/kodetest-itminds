/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const notes = require('./controllers/note');
const users = require('./controllers/user');
const app = express();
const hostname = '127.0.0.1';
const port = process.env.port || 8081;
const corsSettings = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
}

app.use(cors(corsSettings));
app.use('/api', notes);
app.use('/api', users);

app.listen(port, hostname, () => {
  console.log(`Running on http://${hostname}:${port}`)
});
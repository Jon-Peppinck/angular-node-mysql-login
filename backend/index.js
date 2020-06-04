const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const pollRoutes = require('./routes/poll');

const app = express();

const ports = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/poll', pollRoutes);

app.listen(ports, () => console.log(`listening on port ${ports}`));

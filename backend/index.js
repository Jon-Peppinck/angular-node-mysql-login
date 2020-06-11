const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const pollRoutes = require('./routes/poll');

const errorController = require('./controllers/error');

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

app.use('/auth', authRoutes);

app.use('/poll', pollRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));

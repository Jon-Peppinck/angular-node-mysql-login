const express = require('express');

const pollRoutes = require('./routes/poll');

const app = express();

const ports = process.env.PORT || 3000;

app.use('/poll', pollRoutes);

app.listen(ports, () => console.log(`listening on port ${ports}`));

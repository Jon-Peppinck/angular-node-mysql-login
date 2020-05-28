const express = require('express');

const pollController = require('../controllers/poll');

const router = express.Router();

router.get('/', pollController.getAllPolls);

module.exports = router;

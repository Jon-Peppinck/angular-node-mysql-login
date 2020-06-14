const express = require('express');

const pollController = require('../controllers/poll');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/:id', auth, pollController.getPoll);

router.get('/', auth, pollController.getAllPolls);

router.post('/', auth, pollController.createPoll);

module.exports = router;

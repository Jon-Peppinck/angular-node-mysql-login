const Poll = require('../models/poll');

exports.getAllPolls = async (req, res, next) => {
  try {
    const [allPolls] = await Poll.fetchAll();
    res.status(200).json(allPolls);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getPoll = async (req, res, next) => {
  try {
    const [poll] = await Poll.fetchPoll(req.params.id);
    res.status(200).json(poll);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.createPoll = async (req, res) => {
  try {
    const createPoll = await Poll.createPoll(
      req.body.imgId,
      req.body.question,
      req.body.answer1,
      req.body.answer2,
      req.body.answer3,
      req.body.userId
    );
    res.status(201).json(createPoll);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePoll = async (req, res, next) => {
  try {
    const deleteResponse = await Poll.deletePoll(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

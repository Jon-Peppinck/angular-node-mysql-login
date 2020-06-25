const Poll = require('../models/poll');

exports.getAllPolls = async (req, res, next) => {
  const [allPolls] = await Poll.fetchAll();
  res.status(200).json(allPolls);
  // TODO: catch errors
};

exports.getPoll = async (req, res, next) => {
  const [poll] = await Poll.fetchPoll(req.params.id);
  res.status(200).json(poll);
};

exports.createPoll = async (req, res) => {
  const createPoll = await Poll.createPoll(
    req.body.imgId,
    req.body.question,
    req.body.answer1,
    req.body.answer2,
    req.body.answer3,
    req.body.userId
  );
  res.status(201).json(createPoll);
};

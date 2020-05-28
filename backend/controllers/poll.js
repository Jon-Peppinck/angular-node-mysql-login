const Poll = require('../models/poll');

exports.getAllPolls = (req, res, next) => {
  res.status(200).json(Poll.fetchAll());
};

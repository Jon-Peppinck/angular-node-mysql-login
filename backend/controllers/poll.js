const Poll = require('../models/poll');

exports.getAllPolls = async (req, res, next) => {
  const [allPolls] = await Poll.fetchAll();
  res.status(200).json(allPolls);
  // TODO: catch errors
};

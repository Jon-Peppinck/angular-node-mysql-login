exports.get404 = (req, res, next) => {
  const error = new Error('Not found.');
  error.status = 404;
  next(error);
};

exports.get500 = (error, req, res, next) => {
  const data = error.data;
  res.status(error.statusCode || 500);
  res.json({
    error: {
      message: error.message,
      data: data,
    },
  });
};

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    // jwt.verify both decodes and verifies the token and is validated with the secret
    decodedToken = jwt.verify(token, 'secretfortoken');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  // check if token unverified i.e. undefined
  if (!decodedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};

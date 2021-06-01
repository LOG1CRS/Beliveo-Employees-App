const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    // Bearer
    const token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid token.');
      }
    }
  }
};

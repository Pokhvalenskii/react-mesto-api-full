const NotFoundError = require('../errors/not-found-err');

const notFound = (req, res, next) => {
  // console.log('NotFoundError');
  next(new NotFoundError());
};

module.exports = notFound;

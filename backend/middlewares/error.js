const checkError = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  if (err.details !== undefined || err.name === 'CastError') {
    res.status(400).send({
      message: 'Неправильный, некорректный запрос',
    });
  } else {
    res.status(statusCode).send({
      message: statusCode === 500
        ? 'Внутренняя ошибка сервера'
        : message,
    });
    next();
  }
};

module.exports = checkError;

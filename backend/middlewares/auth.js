const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');

require('dotenv').config();

const { JWT_TOKEN } = process.env;
// const JWT_TOKEN = 'aboba-secret-word';

// функция для работы с печеньками от постмана
// function postmanCookie(req) {
//   const { cookie } = req.headers;
//   if (cookie) {
//     const values = cookie.split(';').reduce((res, item) => {
//       const data = item.trim().split('=');
//       return { ...res, [data[0]]: data[1] };
//     }, {});
//     return values;
//   } return undefined;
// }

const auth = (req, res, next) => {
<<<<<<< HEAD
  // const token = postmanCookie(req);
  const token = req.headers.authorization.split(' ')[1];
  console.log('token: ', token);
=======
  const token = postmanCookie(req);
  // const token = req.cookie.jwt;
>>>>>>> 1547e3f16656ecb95d0f99ab3285460d0fa26f75
  if (!token) {
    next(new UnauthorizedError());
  } else {
    let payload;
    try {
      payload = jwt.verify(token, JWT_TOKEN);
    } catch (err) {
      next(new UnauthorizedError());
    }

    req.user = payload;
    next();
  }
};

module.exports = auth;

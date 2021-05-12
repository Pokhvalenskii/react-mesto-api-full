const router = require('express').Router();

<<<<<<< HEAD
const cors = require('cors');
=======
// const cors = require('cors');
>>>>>>> 1547e3f16656ecb95d0f99ab3285460d0fa26f75
const auth = require('../middlewares/auth');
const checkError = require('../middlewares/error');
const notFound = require('../middlewares/notFound');
const userRouter = require('./users');
const cardRouter = require('./cards');
const login = require('./login');
const createUser = require('./createUsers');
const { reqLogger, errLogger } = require('../middlewares/logger');

<<<<<<< HEAD
const corsWhiteList = ['http://localhost:3000', 'https://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (corsWhiteList.indexOf(origin) !== -1) {
      callback(null, true);
    }
  },
  credentials: true,
};

router.use(reqLogger);
router.use(cors(corsOptions));
=======
// const corsWhiteList = ['https://lenskii.yandex15.nomoredomains.icu', 'http://lenskii.yandex15.nomoredomains.icu'];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (corsWhiteList.indexOf(origin) !== -1) {
//       callback(null, true);
//     }
//   },
//   credentials: true,
// };

// router.use(header);
router.use(reqLogger);
// router.use(cors(corsOptions));
>>>>>>> 1547e3f16656ecb95d0f99ab3285460d0fa26f75
router.use('/signin', login);
router.use('/signup', createUser);
router.use(auth);
router.use('/cards', cardRouter);
router.use('/users', userRouter);
router.use('*', notFound);

router.use(errLogger);

router.use(checkError);

module.exports = router;

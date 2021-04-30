const router = require('express').Router();

const cors = require('cors');
const auth = require('../middlewares/auth');
const checkError = require('../middlewares/error');
const notFound = require('../middlewares/notFound');
const userRouter = require('./users');
const cardRouter = require('./cards');
const login = require('./login');
const createUser = require('./createUsers');
const { reqLogger, errLogger } = require('../middlewares/logger');

const corsWhiteList = ['https://lenskii.yandex15.nomoredomains.icu', 'http://lenskii.yandex15.nomoredomains.icu'];

const corsOptions = {
  origin: (origin, callback) => {
    if (corsWhiteList.indexOf(origin) !== -1) {
      callback(null, true);
    }
  },
  credentials: true,
};

// router.use(header);
router.use(reqLogger);
router.use(cors(corsOptions));
router.use('/signin', login);
router.use('/signup', createUser);
router.use(auth);
router.use('/cards', cardRouter);
router.use('/users', userRouter);
router.use('*', notFound);

router.use(errLogger);

router.use(checkError);

module.exports = router;

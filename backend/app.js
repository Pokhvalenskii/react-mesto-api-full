const express = require('express');
const mongoose = require('mongoose');

const app = express();
<<<<<<< HEAD
const { PORT = 2999 } = process.env;
=======
const { PORT = 3001 } = process.env;
>>>>>>> 1547e3f16656ecb95d0f99ab3285460d0fa26f75
const router = require('./routes/index');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use(router);
app.listen(PORT, () => {});

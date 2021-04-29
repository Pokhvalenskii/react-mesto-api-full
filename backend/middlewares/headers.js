const header = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://lenskii.yandex15.nomoredomains.icu');
  next();
};

module.exports = header;

const pkg = require('../../package.json');

module.exports = (req, res) => {
  var strip = pkg.version.replace(/['.']/g, '');
  var version = strip.slice(0,1);
  var revision = strip.slice(1);
  res.status(200).send({
    version,
    revision
  });
};

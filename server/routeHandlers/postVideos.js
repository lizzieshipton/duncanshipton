const Video = require('../../db/schema').Video;

module.exports = (req, res) => {

  const embedUrl = req.body.url.replace('watch?v=', 'embed/');

  Video.create({
    title: req.body.title,
    url: embedUrl,
    filmographer: req.body.videographer,
    date_filmed: req.body.date,
    snippet: req.body.snippet
  })
  .then((video) => {
    res.status(201);
  })
};

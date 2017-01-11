const Photo = require('../../db/schema').Photo;
const fs = require('fs');

module.exports = (req, res) => {
  console.log(req.body, "DATA");

  const photo = fs.readFileSync(req.body.image);

  Photo.create({
    image: photo,
    photographer: req.body.photographer,
    date_taken: req.body.date,
    snippet: req.body.snippet
  })
  .then(() => {
    res.sendStatus(201);
  });
};

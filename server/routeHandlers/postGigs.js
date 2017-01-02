const Gig = require('../../db/schema').Gig;

module.exports = (req, res) => {

  const gig = req.body.gig;
  res.status(201).send('Success! Gig saved to database. Have yourself a cup of tea.');
};

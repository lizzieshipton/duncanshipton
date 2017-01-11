const Sequelize = require('sequelize');
const db = require('./config');

const Video = db.define('video', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  url: Sequelize.STRING,
  filmographer: Sequelize.STRING,
  date_filmed: Sequelize.DATEONLY,
  snippet: Sequelize.STRING,
});

const Photo = db.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: Sequelize.BLOB(),
  photographer: Sequelize.STRING,
  date_taken: Sequelize.DATEONLY,
  snippet: Sequelize.STRING,
});

const Gig = db.define('gig', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  location: Sequelize.STRING,
  date: Sequelize.DATEONLY,
  time: Sequelize.TIME,
  notes: Sequelize.STRING,
});

db
  .sync({ force: false })
  .then(() => {
    console.log('All tables created');
  })
  .catch((err) => {
    console.log('error creating tables', err);
  });


module.exports = {
  Video,
  Photo,
  Gig,
};

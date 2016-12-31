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
  date_filmed: Sequelize.DATEONLY,
  snippet: Sequelize.STRING,
});

const Photo = db.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  url: Sequelize.STRING,
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
  date: Sequelize.STRING,
  time: Sequelize.STRING,
});

module.exports = {
  Video,
  Photo,
  Gig,
};

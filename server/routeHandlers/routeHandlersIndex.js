const postVideos = require('./postVideos');
const postPhotos = require('./postPhotos');
const postGigs = require('./postGigs');
const getVideos = require('./getVideos');
const getPhotos = require('./getPhotos');
const getGigs = require('./getGigs');

const db = require('../../db/config');

db.authenticate().then(() => {
  console.log('Connection established');
}).catch((err) => {
  console.log('Unable to connect: ', err);
});

module.exports.routeHandlers = {
  postVideos,
  postPhotos,
  postGigs,
  getVideos,
  getPhotos,
  getGigs,
};

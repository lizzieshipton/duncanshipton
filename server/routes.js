const routeHandlers = require('./routeHandlers/routeHandlersIndex');

module.exports.router = (app) => {
  app.post('/videos', routeHandlers.postVideos);
  app.post('/photos', routeHandlers.postPhotos);
  app.post('/gigs', routeHandlers.postGigs);
  app.get('/videos', routeHandlers.getVideos);
  app.get('/photos', routeHandlers.getPhotos);
  app.get('/gigs', routeHandlers.getGigs);
  app.get('/package', routeHandlers.getPackage);
};

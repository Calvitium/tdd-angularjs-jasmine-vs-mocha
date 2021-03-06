'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);

  app.route('/api/heroes')
    .get(api.heroes)
    .post(api.createHero);

  app.route('/api/heroes/:id')
    .delete(api.deleteHero)
    .get(api.hero);

  app.route('/api/comics')
    .post(api.createComic);


  app.route('/api/comics/:resourceURI')
    .get(api.comic);

  app.route('/api/events')
    .post(api.createEventEntry);

  app.route('/api/events/:resourceURI')
    .get(api.eventEntry);

  app.route('/api/series')
    .post(api.createSeries);

  app.route('/api/series/:resourceURI')
    .get(api.series);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( index.index);
};

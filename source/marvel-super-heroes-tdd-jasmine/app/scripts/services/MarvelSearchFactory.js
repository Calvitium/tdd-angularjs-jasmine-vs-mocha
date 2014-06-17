// app/scripts/services/MarvelSearchFactory.js

'use strict';

angular.module( 'app.services' )
  .factory( 'MarvelSearchFactory', function() {

    var factory = {};

    factory.searchResults = [];
    factory.search = function() {};

    return factory;

  });
// app/scripts/services/HeroesFactory.js

angular.module( 'app.services' )
  .factory( 'HeroesFactory', function() {

    var factory = {};

    factory.heroes = [];

    factory.save = function() {};

    return factory;

  });

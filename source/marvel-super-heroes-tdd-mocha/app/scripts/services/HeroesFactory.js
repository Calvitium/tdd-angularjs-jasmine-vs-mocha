// app/scripts/services/HeroesFactory.js

'use strict';

angular.module( 'app.services' )
  .factory( 'HeroesFactory', function($resource) {

    var factory = {};
    var HeroResource = $resource('/api/heroes/:id');

    factory.heroes = HeroResource.query();

    factory.save = function(hero) {
      hero.favorite = true;
      factory.heroes.push(hero);
      HeroResource.save(hero);
    };

    factory.remove = function(id) {
      angular.forEach(factory.heroes, function(hero, index) {
        if(hero.id === id) {
          factory.heroes.splice(index, 1);
        }
      });
      HeroResource.delete({id: id});
    };

    return factory;

  });

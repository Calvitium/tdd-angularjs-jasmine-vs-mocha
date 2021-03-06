// test/client/spec/app/route.js

'use strict';

describe( 'Testing routes:', function() {

  var $route;

  beforeEach( function() {
    module( 'marvelSuperHeroesApp' );
    inject( function(_$route_) {
      $route = _$route_;
    });
  });

  describe( 'Testing root route:', function() {

    it( 'should have a working root path route', function() {
      expect($route.routes['/']).toBeDefined();
    });

    it( 'should have a the correct templateUrl ("partial/heroes")', function() {
      expect($route.routes['/'].templateUrl).toEqual('partials/heroes');
    });

    it( 'should have a the correct controller ("HeroesCtrl")', function() {
      expect($route.routes['/'].controller).toEqual('HeroesCtrl');
    });

  });


});

define([], function () {
  'use strict';

  //var maidService;
  var app = angular.module('app', ['agt.couchPotato']);
  app.config(['$routeProvider', '$couchPotatoProvider',
    function( $routeProvider, $couchPotatoProvider) {

      $routeProvider.when('/view1',
        $couchPotatoProvider.resolveDependenciesProperty({
          templateUrl:'/sample/partials/partial1.html',
          controller: 'MyCtrl1',
          dependencies: [
            //lazy/services/version is an indirect dependency
            'lazy/directives/appVersion',
            'lazy/controllers/myCtrl1'
          ]
        })
      );

      $routeProvider.when('/view2',
        $couchPotatoProvider.resolveDependenciesProperty({
          templateUrl:'/sample/partials/partial2.html',
          controller: 'MyCtrl2',
          dependencies: [
            'lazy/controllers/myCtrl2',
            'lazy/filters/interpolator'
            //lazy/services/myService2 is an indirect dependency
          ]
        })
      );

      $routeProvider.otherwise({redirectTo: '/view1'});
    }
  ]);

  app.run(['$couchPotato',
    function($couchPotato) {
      //"cheating" so that couchPotato is available in requirejs
      //define modules -- we want run-time registration of components
      //to take place within those modules because it allows
      //for them to have their own dependencies also be lazy-loaded.
      //this is what requirejs is good at.
      app.couchPotato = $couchPotato;
   }
  ]);

  return app;

});

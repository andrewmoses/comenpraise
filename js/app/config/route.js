angular.module('App').config(function ($routeProvider, $httpProvider) {
  //initialize get if not there
  if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
  }

  // Answer edited to include suggestions from comments
  // because previous version of code introduced browser-related errors

  //disable IE ajax request caching
  // $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
  // extra
  $httpProvider.defaults.headers.get['If-None-Match'] = '';
  // $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

  $routeProvider
      .when('/refselector', {
          templateUrl: 'partials/pages/refselector.html',
          controller: 'RefselectorController'
      })
      .when('/passage/:songindex', {
          templateUrl: 'partials/pages/passage.html',
          controller: 'PassageController'
      })
      .otherwise({
          redirectTo: '/refselector'
      });
});

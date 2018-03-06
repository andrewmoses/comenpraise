angular.module('App').config(function ($routeProvider) {
$routeProvider
    .when('/home', {
        templateUrl: 'partials/pages/home.html',
        controller: 'HomeController'
    })
    .when('/refselector', {
        templateUrl: 'partials/pages/refselector.html',
        controller: 'RefselectorController'
    })
    .when('/book/:bookindex', {
        templateUrl: 'partials/pages/chapselector.html',
        controller: 'ChapselectorController'
    })
    .when('/passage/:bookindex/:chapterindex', {
        templateUrl: 'partials/pages/passage.html',
        controller: 'PassageController'
    })
    .otherwise({
        redirectTo: '/home'
    });
});

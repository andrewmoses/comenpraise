angular.module('App').config(function ($routeProvider) {
$routeProvider
    .when('/dev_home', {
        templateUrl: 'partials/pages/dev_home.html',
        controller: 'DevHomeController'
    })
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
    .when('/chapter/:bookindex/:chapterindex', {
        templateUrl: 'partials/pages/verses.html',
        controller: 'VersesController'
    })
    .when('/passage/:bookindex/:chapterindex/:verseindex', {
        templateUrl: 'partials/pages/passage.html',
        controller: 'PassageController'
    })
    .otherwise({
        redirectTo: '/dev_home'
    });
});

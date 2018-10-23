angular.module('App').config(function ($routeProvider) {
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

angular.module('App').controller('DevHomeController', function ($scope, $http, $location) {

  $('.parallax').parallax();
  $scope.swiped_bro = function () {
    console.log('wow da');
    $location.path( "/home" );
  }


});

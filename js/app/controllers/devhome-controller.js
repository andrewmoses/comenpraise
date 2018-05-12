angular.module('App').controller('DevHomeController', function ($scope, $http, $location) {

  $('.parallax').parallax();
  $scope.swiped_bro = function () {
    $location.path( "/home" );
  }


});

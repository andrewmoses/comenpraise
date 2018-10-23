angular.module('App').controller('HomeController', function ($scope, $http) {
  // $scope.chapterdiv = false;
  // $scope.selectedbook = "Pick a book";
  // $http.get('en_kjv.json').then(function(res){
  //   $scope.bible = res.data;
  //
  // });

  $scope.getchapters = function () {
    console.log('pls work');
    // console.log(chapindex);
    // console.log($scope.bible[chapindex].name);
    // $scope.book = "wow da";
    // console.log($scope.bible[chapindex].chapters.length);
  }
  $scope.closeapp = function () {
    console.log('im in the fun');
    KioskPlugin.exitKiosk();
  }







});

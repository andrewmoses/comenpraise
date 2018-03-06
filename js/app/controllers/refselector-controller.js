angular.module('App').controller('RefselectorController', function ($scope, $http) {
  $http.get('en_kjv.json').then(function(res){
    $scope.bible = res.data;
  });
  $scope.closeapp = function () {
    console.log('im in the fun');
    KioskPlugin.exitKiosk();
  }
  // $scope.getchapters = function (bookindex) {
  //   $scope.booklist = false;
  //   $scope.chapters = [];
  //   for(var i=1;i<=$scope.bible[bookindex].chapters.length;i++)
  //   {
  //     $scope.chapters.push(i);
  //   }
  //   $scope.selectedbook = $scope.bible[bookindex].name;
  //   $scope.chaplist = true;
  // }

});

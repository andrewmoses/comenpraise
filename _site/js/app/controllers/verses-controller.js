angular.module('App').controller('VersesController', function ($scope, $routeParams, $http) {
  $http.get('en_kjv.json').then(function(res){

    $scope.bible = res.data;
    $scope.bookno = $routeParams.bookindex
    $scope.chapterno = $routeParams.chapterindex;
    $scope.bo_ch = $scope.bible[$routeParams.bookindex].name + " "+$routeParams.chapterindex;
    $scope.verses = [];
    for(var i=1;i<$scope.bible[$routeParams.bookindex].chapters[$routeParams.chapterindex-1].length;i++)
    {
      $scope.verses.push(i);
    }
  });
});

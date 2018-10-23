angular.module('App').controller('ChapselectorController', function ($scope, $routeParams, $http) {
  $scope.bookindex = $routeParams.bookindex;  
  $http.get('en_kjv.json').then(function(res){
    $scope.bible = res.data;
    $scope.selectedbook = $scope.bible[$routeParams.bookindex].name;
    $scope.chapters = [];
    for(var i=1;i<=$scope.bible[$routeParams.bookindex].chapters.length;i++)
    {
      $scope.chapters.push(i);
    }
  });
});

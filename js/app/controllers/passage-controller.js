angular.module('App').controller('PassageController', function ($scope, $http, $routeParams) {
  console.log($routeParams.bookindex);
  console.log($routeParams.chapterindex);
  var myEl = angular.element( document.querySelector( '#passagetag' ) );
  $http.get('en_kjv.json').then(function(res){
    $scope.bible = res.data;
    $scope.passagetitle = $scope.bible[$routeParams.bookindex].name + " "+$routeParams.chapterindex;
    // $scope.selectedpassage = "";
    for(var i = 1; i<=$scope.bible[$routeParams.bookindex].chapters[$routeParams.chapterindex-1].length;i++)
    {
      myEl.append("&nbsp;&nbsp;<small><b>"+i+"</b></small>"+" "+$scope.bible[$routeParams.bookindex].chapters[$routeParams.chapterindex-1][i-1]);
      // $scope.selectedpassage = $scope.selectedpassage + " <small>"+i+"</small>"+" "+$scope.bible[$routeParams.bookindex].chapters[$routeParams.chapterindex][i-1];
    }
  });

});

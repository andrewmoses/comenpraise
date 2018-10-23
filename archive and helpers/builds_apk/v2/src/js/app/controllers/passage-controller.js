angular.module('App').controller('PassageController', function ($scope, $http, $routeParams, $location, $anchorScroll, $sce) {
  console.log($routeParams.songindex);
  // var myEl = angular.element( document.querySelector( '#passagetag' ) );
  $http.get('test_songs.json').then(function(res){
    $scope.s_title = res.data[$routeParams.songindex].title;
    $scope.bindHTML = $sce.trustAsHtml(res.data[$routeParams.songindex].lyrics);
    $scope.s_lyrics = res.data[$routeParams.songindex].lyrics;
    $scope.sno = parseInt($routeParams.songindex)+1;
  });

});

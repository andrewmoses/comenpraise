angular.module('App').controller('PassageController', function ($scope, $http, $routeParams, $location, $anchorScroll) {
  console.log($routeParams.bookindex);
  console.log($routeParams.chapterindex);
  console.log($routeParams.verseindex);
  var myEl = angular.element( document.querySelector( '#passagetag' ) );
  $http.get('en_kjv.json').then(function(res){
    $scope.bible = res.data;
    $scope.passagetitle = $scope.bible[$routeParams.bookindex].name + " "+$routeParams.chapterindex;
    // $scope.selectedpassage = "";
    for(var i = 1; i<=$scope.bible[$routeParams.bookindex].chapters[$routeParams.chapterindex-1].length;i++)
    {
      myEl.append("<div id='v"+i+"' > &nbsp;&nbsp;<small><b>"+i+"</b></small>"+" "+$scope.bible[$routeParams.bookindex].chapters[$routeParams.chapterindex-1][i-1]+"</div>");
      // $scope.selectedpassage = $scope.selectedpassage + " <small>"+i+"</small>"+" "+$scope.bible[$routeParams.bookindex].chapters[$routeParams.chapterindex][i-1];
    }
    myEl.append("<Br><br><Br><Br><Br>");
    $('html, body').animate({
        scrollTop: $("#v"+$routeParams.verseindex).offset().top
    }, 1500);
  });

});

angular.module('App').controller('RefselectorController', function ($scope, $http) {
  $http.get('test_songs.json').then(function(res){
    console.log('wow da');
    console.log(res.data);
    $scope.songs = res.data;
    // $scope.bible = res.data;
    // $scope.ot = [];
    // $scope.nt = [];
    // angular.forEach($scope.bible,function(value,index){
    //     if(index<39)
    //     {
    //       $scope.ot.push({name: value.name, bno: index});
    //     }
    //     else
    //     {
    //       $scope.nt.push({name: value.name, bno: index});
    //     }
    // });
    // $('#ot_id').height($(window).height() - ($('#b_head').height()+95));
    // $('#nt_id').height($(window).height() - ($('#b_head').height()+95))
  }).catch(function (err) {console.log(err);});;

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

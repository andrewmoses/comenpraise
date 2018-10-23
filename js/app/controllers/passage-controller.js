angular.module('App').controller('PassageController', function ($scope, $http, $routeParams, $location, $anchorScroll, $sce) {
  // var myEl = angular.element( document.querySelector( '#passagetag' ) );
  // $http.get('test_songs.json').then(function(res){
  //   $scope.s_title = res.data[$routeParams.songindex].title;
  //   $scope.bindHTML = $sce.trustAsHtml(res.data[$routeParams.songindex].lyrics);
  //   $scope.s_lyrics = res.data[$routeParams.songindex].lyrics;
  //   $scope.sno = parseInt($routeParams.songindex)+1;
  // });

  var storage = window.localStorage;
  var db;
  var databaseName = 'myDB';
  var databaseVersion;
  var allsongs;
  var dbv_fs = storage.getItem('db_v');
  databaseVersion = dbv_fs;
  var openRequest = window.indexedDB.open(databaseName, databaseVersion);
  openRequest.onerror = function (event) {
      console.log(openRequest.errorCode);
  };
  openRequest.onsuccess = function (event) {
      // Database is open and initialized - we're good to proceed.
      db = openRequest.result;
      displayData();
  };


  function displayData() {
    // console.log(db);
    var result = [];
    var handleResult = function(event) {
    	var cursor = event.target.result;
    	if (cursor) {
    		result.push({title:cursor.value.title, lyrics:cursor.value.lyrics});
    		cursor.continue();
    	}
    };
    var transaction = db.transaction('customers', "readonly");
  	var objectStore = transaction.objectStore("customers");
    objectStore.openCursor().onsuccess = handleResult;

  	transaction.oncomplete = function(event) {
      $scope.$apply(function(){
        $scope.s_title = result[$routeParams.songindex].title;
        $scope.bindHTML = $sce.trustAsHtml(result[$routeParams.songindex].lyrics);
        $scope.s_lyrics = result[$routeParams.songindex].lyrics;
        $scope.sno = parseInt($routeParams.songindex)+1;

      });
  	};
  }

});

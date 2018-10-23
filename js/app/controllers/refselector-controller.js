angular.module('App').controller('RefselectorController', function ($scope, $http) {
  $scope.song_index = false;
  $scope.error_msg = false;
  $scope.loader = true;
  $scope.songs = [];
  var storage = window.localStorage;
  var db;
  var databaseName = 'myDB';
  var databaseVersion;
  var allsongs;
  // Hit the github test_json for songs
  $http.get('https://api.github.com/gists/f1c2b4b17f22bf344ff8ccaf875d378e').then(function(res){
    // entire content as a string
    var fullcontent = JSON.parse(res.data['files']['test_json.json']['content']);
    var db_v = fullcontent['db_v'];
    // console.log(fullcontent);
    console.log("online db version ",db_v);
    var songsdata = fullcontent['data'];
    // console.log(songsdata);
    // check for the db_v value and update the localstorage value.
    storage.setItem('db_v', db_v);
    // load the data into the indexedDB
    databaseVersion = db_v;
    allsongs = songsdata;
    var openRequest = window.indexedDB.open(databaseName, databaseVersion);
    openRequest.onerror = function (event) {
        console.log(openRequest.errorCode);

    };
    openRequest.onsuccess = function (event) {
        // Database is open and initialized - we're good to proceed.
        db = openRequest.result;
        displayData();
    };
    openRequest.onupgradeneeded = function (event) {
        // This is either a newly created database, or a new version number
        // has been submitted to the open() call.
        var db = event.target.result;
        db.onerror = function () {
            console.log(db.errorCode);
        };

        // Create an object store and indexes. A key is a data value used to organize
        // and retrieve values in the object store. The keyPath option identifies where
        // the key is stored. If a key path is specified, the store can only contain
        // JavaScript objects, and each object stored must have a property with the
        // same name as the key path (unless the autoIncrement option is true).
        var store;
        if(storage.getItem('firsttime') == null) {
          // this means this is first time.
          try {
              db.deleteObjectStore('customers');
          }
          catch(err) {
              console.log('opps');
          }


          store = db.createObjectStore('customers', { keyPath: 'customerId' });

          // Define the indexes we want to use. Objects we add to the store don't need
          // to contain these properties, but they will only appear in the specified
          // index of they do.
          //
          // syntax: store.createIndex(indexName, keyPath[, parameters]);
          //
          // All these values could have duplicates, so set unique to false
          store.createIndex('title', 'title', { unique: false });
          store.createIndex('lyrics', 'lyrics', { unique: false });
          store.transaction.oncomplete = function (event) {
              // The transaction method takes an array of the names of object stores
              // and indexes that will be in the scope of the transaction (or a single
              // string to access a single object store). The transaction will be
              // read-only unless the optional 'readwrite' parameter is specified.
              // It returns a transaction object, which provides an objectStore method
              // to access one of the object stores that are in the scope of this
              //transaction.
              var customerStore = db.transaction('customers', 'readwrite').objectStore('customers');
              var runner = 0
              allsongs.forEach(function (song) {
                  customerStore.add({'customerId': runner, 'title':song.title, 'lyrics':song.lyrics});
                  runner = runner + 1;
              });

          };
        }
        else {
          store.transaction.oncomplete = function (event) {
              // The transaction method takes an array of the names of object stores
              // and indexes that will be in the scope of the transaction (or a single
              // string to access a single object store). The transaction will be
              // read-only unless the optional 'readwrite' parameter is specified.
              // It returns a transaction object, which provides an objectStore method
              // to access one of the object stores that are in the scope of this
              //transaction.
              var customerStore = db.transaction('customers', 'readwrite').objectStore('customers');
              var runner = 0
              allsongs.forEach(function (song) {
                  customerStore.add({'customerId': runner, 'title':song.title, 'lyrics':song.lyrics});
                  runner = runner + 1;
              });

          };

        }


        // Once the store is created, populate it

    };
  }).catch(function (err) {
    // console.log(err);
    // dbv from storage variable, will be null, if first time loaded without internet
    var dbv_fs = storage.getItem('db_v');
    if(dbv_fs == null) {
      console.log('pls connect to the internet');
      $scope.loader = false;
      $scope.error_msg = true;

    }
    else {
      // load the data from the db .
      databaseVersion = dbv_fs;
      console.log("in offline db version ",databaseVersion);
      var openRequest = window.indexedDB.open(databaseName, databaseVersion);
      openRequest.onerror = function (event) {
          console.log(openRequest.errorCode);
      };
      openRequest.onsuccess = function (event) {
          // Database is open and initialized - we're good to proceed.
          db = openRequest.result;
          displayData();
      };
    }

  });
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
        if(storage.getItem('firsttime') == null) {
          // this means this is first time.
          storage.setItem('firsttime', 'yes');
        }
        $scope.songs = result;
        $scope.loader = false;
        $scope.song_index = true;

      });
  	};
  }

});

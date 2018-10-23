angular.module('App').controller('RefselectorController', function ($scope, $http) {
  $scope.index_test = [];
  $scope.newflag = 'initial value';
  var db;
  var databaseName = 'myDB';
  var databaseVersion = 1;
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
      var store = db.createObjectStore('customers', { keyPath: 'customerId' });

      // Define the indexes we want to use. Objects we add to the store don't need
      // to contain these properties, but they will only appear in the specified
      // index of they do.
      //
      // syntax: store.createIndex(indexName, keyPath[, parameters]);
      //
      // All these values could have duplicates, so set unique to false
      store.createIndex('firstName', 'firstName', { unique: false });
      store.createIndex('lastName', 'lastName', { unique: false });

      // Once the store is created, populate it
      store.transaction.oncomplete = function (event) {
          // The transaction method takes an array of the names of object stores
          // and indexes that will be in the scope of the transaction (or a single
          // string to access a single object store). The transaction will be
          // read-only unless the optional 'readwrite' parameter is specified.
          // It returns a transaction object, which provides an objectStore method
          // to access one of the object stores that are in the scope of this
          //transaction.
          var customerStore = db.transaction('customers', 'readwrite').objectStore('customers');
          customers = [{'customerId':'1', 'firstName':'Andrew', 'lastName':'Moses'},{'customerId':'2', 'firstName':'Andrew', 'lastName':'Moses'},{'customerId':'3', 'firstName':'Andrew', 'lastName':'Moses'}]
          customers.forEach(function (customer) {
              customerStore.add(customer);
          });
          console.log('wow da');
          $scope.$apply(function(){$scope.newflag = 'onupgradeneeded fun has been called';});

      };
  };
  function displayData() {
    // console.log(db);
    var result = [];
    var handleResult = function(event) {
    	var cursor = event.target.result;
    	if (cursor) {
    		result.push({customerId:cursor.customerId, firstName:cursor.value.firstName, lastName:cursor.value.lastName});
    		cursor.continue();
    	}
    };
    var transaction = db.transaction('customers', "readonly");
  	var objectStore = transaction.objectStore("customers");
    objectStore.openCursor().onsuccess = handleResult;

  	transaction.oncomplete = function(event) {
      $scope.$apply(function(){$scope.index_test = result;});
  	};
  }

  $http.get('test_songs.json').then(function(res){
    $scope.songs = res.data;
  }).catch(function (err) {console.log(err);});

});

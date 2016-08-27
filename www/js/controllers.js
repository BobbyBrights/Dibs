angular.module('app.controllers', [])

.controller('donateCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseObject,$firebaseArray) {
  var config = {
    apiKey: "AIzaSyCSQV5isQGbu1fsjGtUdg8oBK5L0eeDkWQ",
    authDomain: "dibs-57559.firebaseapp.com",
    databaseURL: "https://dibs-57559.firebaseio.com",
    storageBucket: "dibs-57559.appspot.com",
  };
  firebase.initializeApp(config);
  $scope.firebase = firebase;


}])

.controller('workerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseObject,$firebaseArray) {
  var config = {
    apiKey: "AIzaSyCSQV5isQGbu1fsjGtUdg8oBK5L0eeDkWQ",
    authDomain: "dibs-57559.firebaseapp.com",
    databaseURL: "https://dibs-57559.firebaseio.com",
    storageBucket: "dibs-57559.appspot.com",
  };
  firebase.initializeApp(config);
  $scope.firebase = firebase;

}])

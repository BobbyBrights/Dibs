angular.module('app.controllers', ['ngMap','google.places','oitozero.ngSweetAlert','ngCordova'])

.controller('donateCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseObject,$firebaseArray) {
  $scope.firebase = firebase;
  $scope.firebase.database().ref().child("location").push("San Leandro");
  $scope.firebase.database().ref().child("location").on('value', function(snapshot) {
    $scope.dbVal = snapshot.val();
    console.log(snapshot.val());
  });

  $scope.windowPopUp = function(){



  }




}])

.controller('workerCtrl', ['$scope', '$stateParams','$state','$cordovaBarcodeScanner','$ionicPlatform', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseObject,$firebaseArray, $cordovaBarcodeScanner,$ionicPlatform) {
  $scope.firebase = firebase;

  $scope.scan = function(){
    document.addEventListener("deviceready", function () {
      cordova.plugins.barcodeScanner.scan(
      function (result) {
          $scope.splitResult = result.text.split(";");
          $scope.name = $scope.splitResult[0];
          $scope.id = $scope.splitResult[1];
          alert("We got a barcode\n" +
                "Result: " + $scope.splitResult[0] + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          "preferFrontCamera" : true, // iOS and Android
          "showFlipCameraButton" : true, // iOS and Android
          "prompt" : "Place a barcode inside the scan area", // supported on Android only
          "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
      }
   );
  });
  $scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
  $scope.firebase.database().ref().child("users/" + $scope.id).set({
    name:$scope.name,
    lastDibbed:$scope.time,
  });
  $scope.firebase.database().ref().child('users/' + $scope.id).on("value",function(snapshot){
    $scope.snapshot = snapshot.val();
  });
  alert($scope.snapshot);
}



}])

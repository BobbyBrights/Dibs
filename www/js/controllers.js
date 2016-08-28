angular.module('app.controllers', ['ngMap','google.places','oitozero.ngSweetAlert'])

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

.controller('workerCtrl', ['$scope', '$stateParams','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseObject,$firebaseArray,$state) {
  $scope.firebase = firebase;

  $scope.createUser = function(email,password){
    console.log(email);
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if(errorCode == "auth/email-already-in-use"){
        alert("The email is in use ");
        $scope.sucess = false;
      }
      // ...
      $state.go('tabsController.workersHome', {page: 4});
    });
     $scope.sucess = true;

  }


}])

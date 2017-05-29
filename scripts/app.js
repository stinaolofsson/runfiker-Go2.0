angular.module('runFikerGo', ['ngMap'])
  .controller('runFikerController', function($http, $scope){

    // Show and view scopes
    // $scope.loginView =false;
    // $scope.mapView =false;
    // $scope.chatView = true;

    $scope.loginView =true;
    $scope.mapView =true;
    $scope.chatView = false;

  });

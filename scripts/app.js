angular.module('runFikerGo', ['ngMap'])
  .controller('runFikerController', function($http, $scope){

    // Show and view scopes
    // $scope.loginView =false;
    // $scope.mapView =false;
    // $scope.chatView = true;

    $scope.startView =false;
    $scope.mapView =true;
    $scope.chatView = false;

  });

angular.module('runFikerGo', ['ngMap'])
  .controller('runFikerController', function($http, $scope){

    // Show and view scopes
    $scope.mapView =true;
    $scope.chatView = false;
  });

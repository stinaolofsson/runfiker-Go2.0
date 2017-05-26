angular.module('myMap',['ngMap']).controller('MyCtrl', function(NgMap) {
    var vm = this;
    vm.message = 'You can not hide. :)';
    NgMap.getMap("map").then(function(map) {
      vm.map = map;
    });
    vm.callbackFunc = function(param) {
      console.log('I know where '+ param +' are. ' + vm.message);
      console.log('You are at' + vm.map.getCenter());
    };
    $scope.mouseover = function() {
      console.log('mouseover', this);
      this.style.backgroundColor = 'grey';
    };
    $scope.mouseout = function() {
      this.style.backgroundColor = 'white';
    };
    $scope.click = function() {console.log('click')};
});

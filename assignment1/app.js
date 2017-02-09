(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";

  $scope.checkItems = function () {
    $scope.result = $scope.items.split(',')
    if($scope.items.length==0){
      $scope.message="Empty"
    }
    else {
      if($scope.items.length<3){
        $scope.message="Enjoy!"
      }
      else{
        $scope.message="Too much!"
      }
    }
  };

}

})();

(function () {

'use strict';

angular.module('restaurant')
.controller('GetInfoController', GetInfoController);

GetInfoController.$inject = ['MenuDataService','notify'];
function GetInfoController(MenuDataService,notify) {
   var get = this;
  get.getInfo = function(){
    get.info=MenuDataService.getInfo();
  };
  get.getUserData = function(){
    get.userData=MenuDataService.getUserData();
    console.log(get.userData);
  };
}
})();

(function () {
'use strict';
angular.module('restaurant')
.service('MenuDataService', MenuDataService);
MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getItemFromShortName = function getItemFromShortName(shortName) {
  var service = this;
  var  url = 'https://ychaikin-course50.herokuapp.com/menu_items/'+shortName.toUpperCase()+'.json'
    return $http({
      method: 'GET',
      url: url
    }).then(function (result) {
        service.info=result.data;
        return result.data;
      });
};
service.getInfo = function getInfo() {
    return service.info;
};

service.setUserData = function setUserData(userData) {
    service.userData=userData;
};
service.getUserData = function getUserData() {
    return service.userData;
};

};
})();

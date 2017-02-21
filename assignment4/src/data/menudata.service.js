(function () {
'use strict';
angular.module('data',[])
.service('MenuDataService', MenuDataService);
MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
    service.getAllCategories = function getAllCategories() {
        return $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/categories.json'}).then(function (result) {
              return result.data
            });
      };
    service.getItemsForCategory = function getItemsForCategory(categoryShortName) {
      var url =' https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName
      return $http({
        method: 'GET',
        url: url
      }).then(function (result) {
          return result.data;
        });
    };
  };

})();
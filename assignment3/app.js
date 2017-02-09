(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownAppController', NarrowItDownAppController)
.directive('foundItems', foundItemsDirective)
.service('MenuSearchService', MenuSearchService);

NarrowItDownAppController.$inject = ['MenuSearchService'];
function NarrowItDownAppController(MenuSearchService) {
  var list = this;
  list.searchFunction = function () {
    var promise = MenuSearchService.getMatchedMenuItems(list.search);
    promise.then(function(response){
      list.found=response;
    });
  };

  list.removeItem = function (itemIndex) {
  list.found.splice(itemIndex, 1);
  };

}
function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function foundItemsDirectiveController() {
  var list = this;
    list.isEmpty = function () {
      if (list.items && list.items.length==0) {
        return true;
      }
    };
}



MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function (result) {
        var foundItems =[];
        result.data.menu_items.forEach(function(entry) {
          if(entry.description.includes(searchTerm)){
            foundItems.push(entry);
          }
        });
        return foundItems;
      });

  };
};

})();

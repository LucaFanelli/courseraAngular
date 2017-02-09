(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;
  list.shoppingListToBuy = ShoppingListCheckOffService.getshoppingListToBuy();
  list.buyElement = function (position) {
      ShoppingListCheckOffService.switchElement(position);
      };
  list.isShoppingListToBuyEmpty = function () {
    var ret=true;
if (list.shoppingListToBuy.length>0) {
return false;
}
else {
  return true;
}

  };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;
  list.shoppingListBought = ShoppingListCheckOffService.getshoppingListBought();
  list.isShoppingListBoughtEmpty = function () {
    var ret=true;
if (list.shoppingListBought.length>0) {
return false;
}
else {
  return true;
}

  };
};

function ShoppingListCheckOffService() {
  var service = this;
  var shoppingListToBuy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];
  var shoppingListBought = [];

  service.switchElement = function switchElement(position) {
    shoppingListBought.push(shoppingListToBuy[position]);
    shoppingListToBuy.splice(position,1);
  };



service.getshoppingListToBuy = function () {
  return shoppingListToBuy;
};

service.getshoppingListBought = function () {
  return shoppingListBought;
};
}


})();

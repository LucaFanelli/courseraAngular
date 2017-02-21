(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['item'];
function ItemDetailController(item) {
   var ItemDetailController = this;
   ItemDetailController.data=item.menu_items;
    console.log('item:',item.menu_items);
}

})();

(function () {
'use strict';

angular.module('data')
.component('itemsComponent', {
  templateUrl: 'src/data/templates/items.component.html',
  bindings: {
    items: '<'
  }
  });
})();

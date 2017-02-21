(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoriesList'];
function CategoriesController(categoriesList) {
   var categoriesController = this;
  console.log('categories are:',categoriesList);
  categoriesController.data=categoriesList;
}



})();

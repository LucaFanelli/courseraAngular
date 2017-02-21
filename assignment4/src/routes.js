(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })
  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.html',
    controller: 'CategoriesController as categoriesController',
    resolve: {
      categoriesList: ['MenuDataService',
        function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
    }
  })
// Items page
  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/data/templates/item-detail.template.html',
    controller: 'ItemDetailController as ItemDetailController',
    resolve: {
      item: ['$stateParams','MenuDataService',
        function($stateParams,MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.itemId);
        }]
    }
  });
}
})();

(function() {
"use strict";

/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('restaurant', ['public','cgNotify'])
.config(config);

config.$inject = ['$stateProvider','$urlRouterProvider'];
function config($stateProvider,$urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
// Set up UI states
$stateProvider
  .state('getInfo', {
    url: '/getInfo',
    templateUrl: 'src/getInfo.html'
  })

  .state('registration', {
    url: '/registration',
    templateUrl: 'src/registration.html'
  });
}
})();

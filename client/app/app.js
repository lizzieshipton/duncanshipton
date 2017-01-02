const duncanApp = angular.module('duncanApp', ['ngRoute']);

duncanApp.config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/admin', {
          templateUrl: '/app/admin/admin.html',
          controller: 'adminController'
        }).
        otherwise({
          redirectTo: '/'
        });
  }
]);

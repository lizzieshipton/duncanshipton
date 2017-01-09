const duncanApp = angular.module('duncanApp', ['ngRoute']);

duncanApp.config(['$locationProvider', '$routeProvider', '$sceDelegateProvider',
  function config($locationProvider, $routeProvider, $sceDelegateProvider) {
    $locationProvider.hashPrefix('!');

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/**'
    ]);

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

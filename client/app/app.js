angular.module('duncanApp', ['ngRoute', 'ui.bootstrap']).run(['$rootScope', function($rootScope){
  $rootScope.time = new Date().toLocaleDateString();
  $rootScope.version = {
    ver:''
  };
}])
.config(['$locationProvider', '$routeProvider', '$sceDelegateProvider',
  function config($locationProvider, $routeProvider, $sceDelegateProvider) {
    $locationProvider.hashPrefix('!');
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/**'
    ]);

    $routeProvider.
        when('/', {
          templateUrl: '/app/home/home.html',
          controllerAs: 'HomeController'
        }).
        when('/admin', {
          templateUrl: '/app/admin/admin.html',
          controllerAs: 'AdminController'
        }).
        when('/gigs', {
          templateUrl: '/app/gigs/gigs.html',
          controllerAs: 'GigController'
        }).
        when('/photos', {
          templateUrl: '/app/photos/photos.html',
          controllerAs: 'PhotoController'
        }).
        when('/videos', {
          templateUrl: '/app/videos/videos.html',
          controllerAs: 'VideoController'
        }).
        otherwise({
          redirectTo: '/'
        });
  }
]);

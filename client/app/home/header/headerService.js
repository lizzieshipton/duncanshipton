angular.module('duncanApp').factory('headerService', ['$http', function($http) {
  return {
    getPackage: () => {
      return $http({
        method: 'GET',
        url: '/package'
      });
    }
  };
}]);

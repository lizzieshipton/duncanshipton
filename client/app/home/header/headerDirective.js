angular.module('duncanApp').directive('dsHeader', ['dateFilter', 'headerService', function(dateFilter, headerService) {
  return {
    restrict: 'E',
    templateUrl: 'app/home/dsHeader.html',
    scope: {},
    link: function($scope, el, attrs){
      var format = 'M/d/yyyy';
      $scope.date = dateFilter(new Date(), format);
      headerService.getPackage().then((data) => {
        $scope.ver = data.data.version;
        $scope.rev = data.data.revision;
      });
    }
  };
}]);

duncanApp.controller('adminController', ['$scope', '$sce', 'videoService', function($scope, $sce, videoService){
  $scope = {};

  
  $scope.saveVideo = (video) => {
    console.log(video);
    videoService.postVideo(video)
    .then((response) => {
      console.log(response);
      $scope.response = response;
      $scope.reset;
    });
  };



  $scope.reset = () => {
    $scope = {};
  };
}]);

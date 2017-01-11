duncanApp.controller('adminController', ['$scope', '$sce', 'videoService', 'photoService', function($scope, $sce, videoService, photoService){

  $scope.show = function() {
    // $scope.video.url = $scope.video.url.replace('watch?v=', 'embed/');
    $scope.preview = true;
  };

  $scope.saveVideo = function(video) {
    videoService.postVideo(video)
    .then(() => {
      $scope.reset();
    });
  };

  $scope.savePhoto = function(photo) {
    console.log("PHOTO", photo);
    photoService.postPhoto(photo)
    .then((response) => {
      console.log(response);
    })
  };

  $scope.reset = function() {
    $scope.video = null;
    $scope.photo = null;
    $scope.gig = null;
  };
}]);

angular.module('duncanApp').factory('videoService', ['$http', function($http) {

  const videoService = {};

  videoService.postVideo = (video) => {
    return $http({
      method: 'POST',
      url: '/videos',
      data: video
    });
  };

  videoService.getAllVideos = () => {
    return $http({
      method: 'GET',
      url: '/videos',
    });
  };

  return videoService;

}]);

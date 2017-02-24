angular.module('duncanApp').factory('photoService', ['$http', function($http) {

  const photoService = {};

  photoService.postPhoto = (photo) => {
    return $http({
      method: 'POST',
      url: '/photos',
      data: photo
    });
  };

  photoService.getAllPhotos = () => {
    return $http({
      method: 'GET',
      url: '/photos',
    });
  };

  return photoService;

}]);

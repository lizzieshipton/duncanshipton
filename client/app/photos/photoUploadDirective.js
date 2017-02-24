angular.module('duncanApp').directive('photoUploadDirective', function() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function($scope, el, attrs, ngModel){
      let intermediateStorage = [];
      el.bind('change', function(e){
        const files = e.target.files;
        const handleFile = (file) => {
          const reader = new FileReader();
          reader.addEventListener('loadend', function(blob) {
            const raw = blob.currentTarget.result;
            // console.log("//**-----RAW-----**//\n", raw)
            intermediateStorage.push(raw);
            ngModel.$setViewValue(raw);
            $scope.$apply();
          });
          reader.readAsArrayBuffer(file);
        };
        for(var i = 0; i < files.length; i++) {
          handleFile(files[i]);
        }
      });
      console.log("//**=====TEMPSTORAGE=====**//", intermediateStorage);
    }
  };
});

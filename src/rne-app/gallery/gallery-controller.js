app.controller('GalleryController', function ($scope, $location, galleryImages) {


    $scope.init = function () {
        $scope.gallery = galleryImages;
    }

    $scope.init();

});

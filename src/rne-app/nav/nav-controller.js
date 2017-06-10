app.controller('NavController', function ($scope, $location) {

    $scope.isCurrentLocation = function (loc) {
        return loc === $location.path();
    }

    $scope.isActive = function (loc) {
        if ($scope.isCurrentLocation(loc)) {
            return 'bg-lightbrown';
        } else {
            return '';
        }
    }

});

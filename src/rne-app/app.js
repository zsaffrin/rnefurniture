var app = angular.module('rneSiteApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {  

    $routeProvider
        .when('/', { templateUrl: 'views/home.html' })
        .when('/story', { templateUrl: 'views/story.html' })
        .when('/gallery', { 
            templateUrl: 'views/gallery.html',
            controller: 'GalleryController'
        })
        .when('/classes', { templateUrl: 'views/classes.html' })
        .when('/contact', { templateUrl: 'views/contact.html' })
        .otherwise( { redirectTo: '/' } );

    $locationProvider.html5Mode(true);

}]);

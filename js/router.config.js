angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'summary',
        url: '/summary',
        templateUrl: 'pages/summary.html',
        controller: summaryCtr
    })
        .state({
            name: 'signup',
            url: '/signup',
            templateUrl: 'pages/signup.html',
            controller: signupCtr
        })
        .state({
            name: 'storey',
            url: '/storey',
            templateUrl: 'pages/storey.html',
            controller:  storeyCtr
        })
        .state({
            name: 'courses',
            url: '/courses',
            templateUrl: 'pages/courses.html',
            controller:  coursesCtr
        })
        .state({
            name: 'inquiry',
            url: '/inquiry',
            templateUrl: 'pages/inquiry.html',
            controller:  inquiryCtr
        })
        .state({
            name: 'teach',
            url: '/teach',
            templateUrl: 'pages/teach.html',
            controller:  teachCtr
        });
});
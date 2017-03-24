'use strict';

angular.module('blogDemoApp', [
    'ui.router',
    'constants',
    'ngResource',
    'LocalStorageModule',
    'ui.bootstrap'
])
    .config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
        $urlRouterProvider
            .otherwise('/');
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/templates/main.html',
                controller: 'mainCtrl'
            });
    })
    .run(function ($rootScope, CONFIG) {
        $rootScope.$on('$stateChangeSuccess', function (event, currentRoute) {

            //Change page title, based on Route information
            var defaultSeo = {
                title: CONFIG.SEO_TITLE,
                description: CONFIG.SEO_DESCRIPTION
            };

            $rootScope.title = (currentRoute.title ? currentRoute.title : defaultSeo.title);
            $rootScope.description = (currentRoute.description ? currentRoute.description : defaultSeo.description);

        });
    });

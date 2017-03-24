'use strict';

angular.module('blogDemoApp')
    .directive('navbar', function () {
        return {
            templateUrl: 'components/navbar/templates/navbar.html',
            restrict: 'E',
            controller: 'publicNavbarCtrl'
        };
    });
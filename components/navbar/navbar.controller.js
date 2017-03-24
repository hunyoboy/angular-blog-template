'use strict';

angular.module('blogDemoApp')
    .controller('publicNavbarCtrl', ['$scope', '$window', 'CONFIG',
        function ($scope, $window, CONFIG) {
            $scope.blogName = CONFIG.BLOG_NAME;          
        }]);


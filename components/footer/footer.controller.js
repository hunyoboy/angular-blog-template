'use strict';

angular.module('blogDemoApp')
    .controller('publicFooterCtrl', ['$scope', 'CONFIG',
        function ($scope, CONFIG) {
            $scope.blogName = CONFIG.BLOG_NAME;
        }]);
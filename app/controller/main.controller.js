'use strict';

angular.module('blogDemoApp')
    .controller('mainCtrl', ['$scope', 'Articles', 'Utils', 'CONFIG',
        function ($scope, Articles, Utils, CONFIG) {
            var articles;
            $scope.blogName = CONFIG.BLOG_NAME;

            //by default we sort by date ascending
            $scope.sortDir = 'Date - New To Old';

            //user sort by date
            $scope.sortByDate = function (property, dir) {
                if (0 === dir) {
                    $scope.sortDir = 'Date - Old To New';
                    $scope.articles = Utils.groupArticles(articles.sort(Utils.compareDesc), 3);
                    return undefined;
                }
                $scope.sortDir = 'Date - New To Old';
                $scope.articles = Utils.groupArticles(articles.sort(Utils.compare), 3);
            };

            //user sort by title
            $scope.sortByTitle = function (property, dir) {
                if (0 === dir) {
                    $scope.sortDir = 'Title  A-Z';
                    $scope.articles = Utils.groupArticles(articles.sort(Utils.compareByTitle), 3);
                    return undefined;
                }
                $scope.sortDir = 'Title  Z-A';
                $scope.articles = Utils.groupArticles(articles.sort(Utils.compareByTitleDesc), 3);
            };

            $scope.loadData = function () {
                articles = Articles.getList();
                if (typeof articles.then === 'function') {
                    return articles.then(function (data) {
                        articles = data;
                        $scope.articles = Utils.groupArticles(data.sort(Utils.compare), 3);
                        return data;
                    });
                }
                else {
                    $scope.articles = Utils.groupArticles(articles.sort(Utils.compare), 3);
                    return articles;
                }
            };


        }]);
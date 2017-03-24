'use strict';

angular.module('blogDemoApp')
    .factory('Articles', ['$resource', 'localStorageService', 'CONFIG', '$document', '$window',
        function ($resource, localStorageService, CONFIG, $document, $window) {

            var resource = $resource(CONFIG.BASE_HREF + '/data/articles.json', {}, {
                get: { method: 'GET', isArray: true }
            });

            //retrieve articles from local storage
            resource.getArticlesFromLocalStore = function () {
                return localStorageService.get(CONFIG.ARTICLES_STORE);
            };

            //save articles to local storage
            resource.setArticlesToLocalStore = function (articles) {
                return localStorageService.set(CONFIG.ARTICLES_STORE, articles);
            };
           
            
            //get list of articles from storage or json file
            resource.getList = function () {
                //check local storage first
                var storedArticles = this.getArticlesFromLocalStore(),
                    oThis = this;

                //if no article on storage, get them from json file
                if (!storedArticles) {
                    return this.get().$promise.then(function (articles) {
                        oThis.setArticlesToLocalStore(articles);
                        return articles;
                    });
                }

                return storedArticles;
            };           
            
            return resource;
        }]);

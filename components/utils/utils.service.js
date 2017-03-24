/**
 * General utilities function
 */

'use strict';

angular.module('blogDemoApp')
    .factory('Utils', [
        function () {
            var Utils = {};

            //from newer to older
            Utils.compare = function (a, b) {
                return new Date(b.date) - new Date(a.date);
            };

            //from older to newer
            Utils.compareDesc = function (a, b) {
                var key1 = new Date(a.date);
                var key2 = new Date(b.date);

                if (key1 < key2) {
                    return -1;
                } else if (key1 == key2) {
                    return 0;
                } else {
                    return 1;
                }
            };

            //A - Z
            Utils.compareByTitle = function (a, b) {
                var nameA = a.title.toUpperCase(), // ignore upper and lowercase
                    nameB = b.title.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            };

            //Z - A
            Utils.compareByTitleDesc = function (a, b) {
                var nameA = a.title.toUpperCase(), 
                    nameB = b.title.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            };



            /**
             * Returns a grouped array in specified group size
             */
            Utils.groupArticles = function (articles, groupSize) {
                var groups = articles.map(function (item, index) {
                    return index % groupSize === 0 ? articles.slice(index, index + groupSize) : null;
                })
                    .filter(function (item) {
                        return item;
                    });
                return groups;
            }

            return Utils;
        }]);
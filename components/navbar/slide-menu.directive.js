'use strict';

angular.module('blogDemoApp')
    .directive('slideMenu', function () {

        function link(scope, element, attrs) {
            element.on('click touch', function (e) {               
                e.preventDefault();
                var body = angular.element(document.querySelector('body'));
                body.toggleClass('nav-expanded');
            });
        }

        return {
            link: link
        };

    });
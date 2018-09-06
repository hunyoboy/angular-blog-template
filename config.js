'use strict';
/**
 * The values here are used as fixed constant values on public side
 */
angular.module("constants", [])
    .constant("CONFIG", {
        "BASE_HREF": '/blog/demo/angular-blog-template', //set the proper base folder on deployment
        "ARTICLES_STORE": 'blog-storage', //name of the articles storage
        "BLOG_NAME": 'My Cool Blog',
        "SEO_TITLE": 'My Blog\'s Page Title',
        "SEO_DESCRIPTION": 'The coolest blog in town.'
    });
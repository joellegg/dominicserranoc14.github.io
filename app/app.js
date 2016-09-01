"use strict";

var app = angular.module("APP", ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {


  $routeProvider.
  when('/', {
    templateUrl: 'partials/about.html',
    controller: 'AboutCtrl'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutCtrl'
  }).
  when('/contact', {
    templateUrl: 'partials/contact-view.html',
    controller: 'ContactCtrl'
  }).
  when('/projects', {
    templateUrl: 'partials/project-view.html',
    controller: 'ProjectsCtrl'
  }).
  otherwise('/');

});

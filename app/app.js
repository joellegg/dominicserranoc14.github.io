"use strict";

var app = angular.module("APP", ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {


  $routeProvider.
  when('/', {
    templateUrl: 'partials/project-view.html',
    controller: 'ProjectsCtrl'
  }).
  when('/about', {
    templateUrl: 'partials/about.html',
    controller: 'AboutCtrl'
  }).
  when('/projects', {
    templateUrl: 'partials/project-view.html',
    controller: 'ProjectsCtrl'
  }).
  otherwise('/');

});
/////////////////////////////////////////

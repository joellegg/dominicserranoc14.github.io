"use strict";

var app = angular.module("APP", ['ngRoute']);

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
  when('/projects', {
    templateUrl: 'partials/project-view.html',
    controller: 'ProjectsCtrl'
  }).
  otherwise('/');

});
/////////////////////////////////////////

"use strict";

var app = angular.module("APP", ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {


  $routeProvider.
  when('/about', {
    templateUrl: '/partials/about.html',
    controller: 'AboutCtrl'
  }).
  otherwise('/about');

});

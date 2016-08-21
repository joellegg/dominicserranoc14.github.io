"use strict";

var app = angular.module("APP", ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {


  $routeProvider.
  when('/home', {
    templateUrl: '',
    controller: ''
  }).
  otherwise('/home');

});

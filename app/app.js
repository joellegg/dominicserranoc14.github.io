"use strict";

var app = angular.module("Pinterest", ['ngRoute'])
.constant('FirebaseURL', "https://pinkey-brain.firebaseio.com");

app.config(function($routeProvider, FBCreds) {


  $routeProvider.
  when('/home', {
    templateUrl: '',
    controller: ''
  }).
  otherwise('/home');

});

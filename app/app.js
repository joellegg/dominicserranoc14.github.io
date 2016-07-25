"use strict";

var app = angular.module("Pinterest", ['ngRoute'])
.constant('FirebaseURL', "https://pinkey-brain.firebaseio.com/");

app.config(function($routeProvider) {

  $routeProvider.
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  }).
  when('/boards', {
    templateUrl: 'partials/board-view.html',
    controller: 'BoardCtrl'
  }).
  when('/boards/new', {
    templateUrl: 'partials/new-board.html',
    controller: 'NewBoard'
  }).
  when('/boards/pins', {
    templateUrl: 'partials/pin-view.html',
    controller: 'PinCtrl'
  }).
  when('/boards/pins/new', {
    templateUrl: 'partials/new-pin.html',
    controller: 'NewPinCtrl'
  }).
  otherwise('/boards');

});
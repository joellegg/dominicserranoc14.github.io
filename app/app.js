"use strict";

var app = angular.module("Pinterest", ['ngRoute'])
.constant('FirebaseURL', "https://pinkey-brain.firebaseio.com/");

// app.config(function($routeProvider) {

//   $routeProvider.
//   when('/login', {
//     templateURL: 'partials/login.html',
//     controller: 'LoginCtrl'
//   }).
//   when('/boards', {
//     templateURL: 'partials/board-view.html',
//     controller: 'BoardCtrl'
//   }).
//   when('/boards/new', {
//     templateURL: 'partials/new-board.html',
//     controller: 'NewBoard'
//   }).
//   when('/boards/pins', {
//     templateURL: 'partials/pin-view.html',
//     controller: 'PinCtrl'
//   }).
//   when('/boards/pins/new', {
//     templateURL: 'partials/new-pin.html',
//     controller: 'NewPinCtrl'
//   }).
//   when('/boards/pins/detals', {
//     templateURL: 'partials/pin-detals.html',
//     controller: 'PinDetailsCtrl'
//   }).
//   otherwise('/boards');

// });
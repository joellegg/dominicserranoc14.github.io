"use strict";

app.controller("NavCtrl", function($scope, AuthFactory, $rootScope) {

  $scope.search = false;

  $rootScope.searchText = {};

  $rootScope.searchText.search = "";

  $scope.logout = function() {
    AuthFactory.signOut();
  };

});
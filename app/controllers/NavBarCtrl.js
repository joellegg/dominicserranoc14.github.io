"use strict";

//Simple controller that logs $scope
app.controller('NavBarCtrl', function($scope) {

  //////////////////////////////////////////
  //NavBar opening functionality goes here
  $scope.navOpen = false;

  //Function that toggles the navbar view on and off
  $scope.toggleNavbar = function() {
    $scope.navOpen = !$scope.navOpen;
  };

  //////////////////////////////////////////
  //////////////////////////////////////////


});//End NavBarCtrl

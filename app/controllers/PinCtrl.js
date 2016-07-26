"use strict";

app.controller("PinCtrl", function($scope, PinStorage, $routeParams) {


  // PinStorage.getPins()
  //   .then( function (pinCollection) {
  //   $scope.pins = pinCollection;
  //  });

  PinStorage.getPins()
  .then(function(pinCollection) {
    $scope.pins = pinCollection;
    $scope.pins = $scope.pins.filter(function (pin) {
      console.log("pins", pin);
      return pin.fb_b_key === $routeParams.boardId;
    });
  });  

});
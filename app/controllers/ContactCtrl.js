"use strict";

//Simple controller that logs $scope
app.controller('ContactCtrl', function($scope) {

  $scope.test = 'Hello! I work!';

  console.log("Test $scope", $scope.test);

});

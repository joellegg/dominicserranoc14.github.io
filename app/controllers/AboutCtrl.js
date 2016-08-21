"use strict";

//Simple controller that logs $scope
app.controller('AboutCtrl', function($scope) {

  $scope.test = 'Hello! I work!';
  console.log("Test $scope.test", $scope.test);

});//End of AboutCtrl

"use strict";

//Simple controller that logs $scope
app.controller('ProjectsCtrl', function($scope) {

  $scope.test = 'Hello! I work!';

  console.log("Test $scope", $scope.test);

});

"use strict";

app.controller("NewBoardCtrl", function($scope, BoardStorage, $location, AuthFactory) {

  $scope.newBoard = {
    name: "",
    desc: "",
    keywords:""
  };

  $scope.addNewBoard = function() {
    $scope.newBoard.uid = AuthFactory.getUser();
    BoardStorage.postNewBoard($scope.newBoard)
    .then(function(response) {
      $location.url("/boards");
    })
  };

});
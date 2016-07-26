"use strict";

app.controller("BoardCtrl", function($scope, BoardStorage, AuthFactory, $location) {

  if(!AuthFactory.getUser()) {
    $location.url("/login");
  } 

  BoardStorage.getBoards(AuthFactory.getUser())
  .then( function (boardCollection) {
    $scope.boards = boardCollection;
  });

  $scope.delete = function (id) {
    BoardStorage.deleteBoard(id)
    .then(function() {
      console.log("deleted");
      BoardStorage.getBoards(AuthFactory.getUser())
      .then(function(boardCollection) {
        console.log("board collection", boardCollection);
        $scope.boards = boardCollection;
      });
    });
  };


});
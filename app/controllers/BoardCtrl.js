"use strict";

app.controller("BoardCtrl", function($scope, BoardStorage, AuthFactory) {

   BoardStorage.getBoards(AuthFactory.getUser())
    .then( function (boardCollection) {
    $scope.boards = boardCollection;
   });

});
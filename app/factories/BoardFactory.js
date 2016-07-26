"use strict";

app.factory("BoardStorage", function(FirebaseURL, $q, $http) {

  let getBoards = function (id) {
    let boards = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}items.json?orderBy="uid"&equalTo="${id}"`)
      .success(function(boardObject){
        console.log("boardObject", boardObject);
        if (boardObject) {
          Object.keys(boardObject).forEach(function(key) {
            boardObject[key].id = key;
            boards.push(boardObject[key]);
          });
        };
        resolve(boards);
        })
        .error(function(error){
          reject(error);
      });
    });
  };

  let postNewBoard = function() {

  }

  return {
    getBoards
  };

});
"use strict";

app.factory("BoardStorage", function(FirebaseURL, $q, $http) {

  let getBoards = function (userId) {
    let boards = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/board.json?orderBy="uid"&equalTo="${userId}"`)
      .success(function(boardObject){
        if (boardObject) {
          Object.keys(boardObject).forEach(function(key) {
            boardObject[key].id = key;
            boards.push(boardObject[key]);
          });
        }
        resolve(boards);
        })
        .error(function(error){
          reject(error);
      });
    });
  };

  let postNewBoard = function(newBoard) {
    return $q(function(resolve, reject) {
      $http.post(
        `${FirebaseURL}/board.json`,
        JSON.stringify(newBoard)
      )
      .success(function(ObjFromFirebase) {
        resolve(ObjFromFirebase);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  let deleteBoard = function (id) {
    return $q(function(resolve, reject) {
      $http.delete(
        `${FirebaseURL}/board/${id}.json`
      )
      .success(function() {
        resolve();
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  return {
    getBoards, postNewBoard, deleteBoard
  };

});
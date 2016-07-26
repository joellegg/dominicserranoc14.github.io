"use strict";

app.factory("PinStorage", function(FirebaseURL, $q, $http) {

  let getPins = function () {
    let pins = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}/pin.json`)
      .success(function(pinObject){
        console.log("pinObject", pinObject);
        if (pinObject) {
          Object.keys(pinObject).forEach(function(key) {
            pinObject[key].id = key;
            pins.push(pinObject[key]);
          });
        };
        resolve(pins);
        })
        .error(function(error){
          reject(error);
      });
    });
  };

  return {
    getPins
  };

});
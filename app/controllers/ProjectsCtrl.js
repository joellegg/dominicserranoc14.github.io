"use strict";

//Simple controller that logs $scope
app.controller('ProjectsCtrl', function($scope, $sce) {

  //Selected option value is store here
  $scope.selected = "";
  $scope.selectedTitle = "";
  $scope.viewIframe = true;

  //Prepopulated list of projects to show
  $scope.urlList = [
    { name: 'Invimtory', url: 'https://front-end-capstone.firebaseapp.com/' }
  ];

  //Function that shows the iframe when project is selected
  $scope.activateIframe = function() {
    $scope.viewIframe = false;
  };

  //Set the url for the iframe and show the iframe div
  $scope.changeUrl = function() {

    $scope.url = $sce.trustAsResourceUrl($scope.selected.url);
    $scope.selectedTitle = $scope.selected.name;

    $scope.activateIframe();
  };



});

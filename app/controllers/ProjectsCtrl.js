"use strict";

//Simple controller that logs $scope
app.controller('ProjectsCtrl', function($scope, $sce) {

  //Selected option value is store here
  $scope.selectedTitle = "";
  $scope.viewIframe = true;

  //Prepopulated list of projects to show
  $scope.urlList = [
    {
      name: 'Invimtory',
      url: 'https://front-end-capstone.firebaseapp.com/', desc: 'Sales order and inventory tracking app.',
      detailDesc: 'Invimtory is a sales and inventory tracking system. It is designed for an adminstration level user to be able to create customers and orders associated to specific customers. The admin user will aslo be able to track item inventory levels and sales of item for particular time periods.',
      githubRepo: 'https://github.com/DominicSerranoC14/Front-End-Capstone-Project',
      hostedUrl: 'https://front-end-capstone.firebaseapp.com/',
      projectImg: "img/invim-home.png",
      imgAlt: 'Invimtory Home Page Screenshot',
      tech: [
        { img: 'img/angular-material-logo.png', title: 'Angular Material' },
        { img: 'img/angular.js-logo.png', title: 'Angular JS' },
        { img: 'img/css3-logo.png', title: 'CSS3' },
        { img: 'img/html5-logo.png', title: 'HTML5' },
        { img: 'img/sass-logo.png', title: 'Sass' },
        { img: 'img/firebase-logo.png', title: 'Firebase'},
        { img: 'img/js-logo.png', title: 'Javascript'},
        { img: 'img/jquery-logo.jpeg', title: 'jQuery' }
      ]
    },

    {
    name: 'Coming Soon!',
    url: '',
    desc: '',
    img: "img/coming-soon.png",
    imgAlt: 'Project Coming Soon'
    },

    {
    name: 'Coming Soon!',
    url: '',
    desc: '',
    img: "img/coming-soon.png",
    imgAlt: 'Project Coming Soon'
    }
  ];

  //Function that shows the iframe when project is selected
  $scope.activateIframe = function() {
    $scope.viewIframe = false;
  };

  //Set the url for the iframe and show the iframe div
  $scope.changeUrl = function(item) {

    $scope.url = $sce.trustAsResourceUrl(item.url);
    $scope.selectedTitle = item.name;
    $scope.selectedObj = item;

    $scope.activateIframe();
  };



});

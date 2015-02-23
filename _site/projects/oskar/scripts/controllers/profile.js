/*
* User Profile
*/

'use strict';

angular.module('myApp')
  .controller('ProfileCtrl',
    function($scope, $routeParams, $location, userService, languageService, presenceService) {

      // the user whose profile page is being viewed
      $scope.profile = userService.findByUid($routeParams.username);

      $scope.profile.$on('loaded', function(user){
        var lang = languageService.find(user.motherTongue);
        lang.$on('loaded', function(language){
          $scope.primaryLanguage = language.name;
        });
      });

      // the logged in user
      $scope.user = userService.findByUid($scope.auth.user.uid);

      presenceService.getStatus($routeParams.username)
        .then(function(connected){
          $scope.isConnected = connected;
        });

    }
);
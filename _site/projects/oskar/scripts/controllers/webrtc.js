'use strict';

angular.module('myApp')
  .controller('WebRTCCtrl', function($scope, $routeParams, userService, webrtcService, notificationService) {
    // Two people make a video chat, a caller and an answerer.
    var roomName = $routeParams.userId; // uid of the answerer
    var uid = $scope.auth.user.uid; // the logged in user
    var user = userService.findByUid(uid);

    user.$on('loaded', function(user){
      if (roomName === uid){
        // This user is the answerer.
        webrtcService.setParams(roomName, false);
      } else {
        // This user is the caller
        webrtcService.setParams(roomName, true);
        notificationService.notify(roomName, user);
      }
      webrtcService.getUserMedia();
    });



  }
);
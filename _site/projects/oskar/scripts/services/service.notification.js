/*
 * Notifications Service
 * Manage real-time notifications using Firebase.
 */

'use strict';

angular.module('myApp.service.notification', [])
  .factory('notificationService', function ($rootScope, $firebase, FBURL) {
    var pullNotifications,
        ref = new Firebase(FBURL + 'notifications'),
        pushNotifications = $firebase(ref),
        msg = null,
        msgRef;


    $rootScope.$on('$firebaseSimpleLogin:login', startWatching);

    function startWatching(){
      pullNotifications = new Firebase(FBURL + 'notifications/' + $rootScope.auth.user.uid);
      pullNotifications.endAt().limit(1).on('child_added', function(snapshot){
        msg = snapshot.val();
        msgRef = snapshot.name();
        $rootScope.$broadcast('onNewMessage');
      });
//        currentMsg = newMessageSnapshot.name();
    };

    var Pusher = {
      notify: function(toUser, fromUser){
        pushNotifications.$child(toUser).$add( { 'roomName': toUser, 'from': fromUser, 'read': false });
      },
      getMessages: function(){
        return msg; // set in startWatching method
      },
      start: function(){
        // Start watching for new notifications.
        startWatching();
      },
      unsetRequest: function(){
        msg = null;
        pullNotifications.remove();
//        console.log(pullNotifications.child(''));
      }
    };

    return Pusher;
  }
);
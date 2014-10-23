'use strict';

angular.module('myApp.service.presence', [])
  .factory('presenceService', function($rootScope, $firebase, $q){
//    var authRef = new Firebase('https://oskar-lingo.firebaseio.com/.info/authenticated');
    var presenceRef = new Firebase('https://oskar-lingo.firebaseio.com/.info/connected');
    var userRef;

    $rootScope.$on('$firebaseSimpleLogin:logout', stopWatching);
    $rootScope.$on('$firebaseSimpleLogin:login', startWatching);

    function startWatching(){
      userRef = new Firebase('https://oskar-lingo.firebaseio.com/presence/' + $rootScope.auth.user.uid);
      // Firebase onValue event fires when the data changes.
      presenceRef.on('value', function (snap) {
        if (snap.val()) {
          userRef.set({ connected: true });
          userRef.onDisconnect().remove();
        }
      });

    };

    function stopWatching(){
      if (userRef){
        userRef.remove();
      }
    };


    return {
      getStatus: function(uid){
        var ref = new Firebase('https://oskar-lingo.firebaseio.com/presence/' + uid);
        var deferred = $q.defer();
        ref.on('value', function(snap){
          if (snap.val() && snap.val().connected) {
            deferred.resolve(true);
          } else {
            deferred.reject(false);
          }
        });
        return deferred.promise;
      },
      startPresence: function(){
        startWatching();
      }
    };

  });
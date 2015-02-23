/*
 * Web RTC Service
 */

'use strict';

angular.module('myApp.service.webrtc', [])
  .factory('webrtcService', function ($rootScope, FBURL) {

    var ref = new Firebase(FBURL + 'rooms'),
        roomName, // the video chat 'room'
        type, // initiator or receiver
        otherType; // opposite of type

    // shims
    var PeerConnection = window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
        SessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription,
        IceCandidate = window.mozRTCIceCandidate || window.RTCIceCandidate;
    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

    // options for the PeerConnection
    var server = {
      iceServers: [
        {url: 'stun:23.21.150.121'},
        {url: 'stun:stun.l.google.com:19302'},
        {url: 'turn:numb.viagenie.ca', credential: 'webrtcdemo', username: 'akiryk@yahoo.com'}
      ]
    };

    var options = {
      optional: [
        { DtlsSrtpKeyAgreement: true } // required for Chrome and Firefox to interoperate
//        { RtpDataChannels: true } // required if we want to make use of the DataChannels API on ff
      ]
    };

    // create the PeerConnection
    var pc = new PeerConnection(server, options);

    pc.onicecandidate = function (e) {
      // take the first candidate that isn't null
      if (!e.candidate) { return; }
      pc.onicecandidate = null;

      // request the other peers ICE candidate
      recv(roomName, 'candidate:' + otherType, function (candidate) {
        pc.addIceCandidate(new IceCandidate(JSON.parse(candidate)));
      });

      // send our ICE candidate
      console.log('pc.onicecandidate!!!');
      send(roomName, 'candidate:'+type, JSON.stringify(e.candidate));
    };

    // grab the video elements from the document
    var video = document.getElementById('video');
    var video2 = document.getElementById('otherPeer');

    // when we get the other peer's stream, add it to the second
    // video element.
    pc.onaddstream = function (e) {
      video2.src = URL.createObjectURL(e.stream);
    };

    // constraints on the offer SDP. Easier to set these
    // to true unless you don't want to receive either audio
    // or video.
    // An Offer SDP (Session Description Protocol) is metadata that describes
    // to the other peer the format to expect (video, formats, codecs, encryption,
    // resolution, size, etc etc).
    var constraints = {
      mandatory: {
        OfferToReceiveAudio: true,
        OfferToReceiveVideo: true
      }
    };

    // a nice wrapper to send data to FireBase
    function send (room, key, data) {
      console.log('key is ' + key);
      ref.child(room).child(key).set(data);
    }

    // clean out the FireBase record before staring a new session
    function cleanAndSend (room, key, data) {
      console.log('Clean room ' + room);
      ref.child(room).remove();
      send(room, key, data);
    }

    // wrapper function to receive data from FireBase
    function recv (room, type, cb) {
      ref.child(room).child(type).on('value', function (snapshot) {
        var data = snapshot.val();
        if (data) {
          cb(data);
        }
      });
    }

    // generic error handler
    function errorHandler (err) {
      console.error(err);
    }

    function connect () {
      if (type === 'offerer') {
        // create the offer SDP
        pc.createOffer(function (offer) {
          pc.setLocalDescription(offer);

          // send the offer SDP to FireBase
          cleanAndSend(roomName, 'offer', JSON.stringify(offer));

          // wait for an answer SDP from FireBase
          recv(roomName, 'answer', function (answer) {
            pc.setRemoteDescription(
              new SessionDescription(JSON.parse(answer))
            );
          });
        }, errorHandler, constraints);

      } else {
        // answerer needs to wait for an offer before
        // generating the answer SDP
        recv(roomName, 'offer', function (offer) {
          pc.setRemoteDescription(
            new SessionDescription(JSON.parse(offer))
          );

          // now we can generate our answer SDP
          pc.createAnswer(function (answer) {
            pc.setLocalDescription(answer);

            // send it to FireBase
            send(roomName, 'answer', JSON.stringify(answer));
          }, errorHandler, constraints);
        });
      }
    }

    var RTC = {
      getUserMedia: function(){
        // get the user's media, in this case just video
        navigator.getUserMedia( {video: true, audio: true}, function (stream) {
          // set one of the video src to the stream
          video.src = URL.createObjectURL(stream);
          video.muted = "muted";
          // add the stream to the PeerConnection
          pc.addStream(stream);
          // now we can connect to the other peer
          connect();
        }, errorHandler);
      },
      setParams: function(room, isOfferer){
        roomName = room;
        if (isOfferer){
          type = 'offerer';
          otherType = 'answerer';
        } else {
          type = 'answerer';
          otherType = 'offerer';
        }
      }
    };

    return RTC;
  }
);
WebRTC
======

Working examples of WebRTC

The first thing that happens is we request access to the user's video channel with
navigator.getUserMedia();

Nothing really happens at that point until the user says 'yes' to enabling
video stream. 

Once user enables video, connect is called, which creates an offer and 
starts the process of creating a 'room' using firebase.
// replace these values with those generated in your TokBox Account
var apiKey = "46314152";
var sessionId = "1_MX40NjMxNDE1Mn5-MTU1NTkyMDQzNDkxMn5XR0FOaG5mbVJhMDZ5T0dzaEZWdUF5MHB-fg";
var token = "T1==cGFydG5lcl9pZD00NjMxNDE1MiZzaWc9YjkyYjE3OGE3MzA0ZDFjYmM0ZWNlYjM0NTY4N2VmOGEyOTBiN2VkZDpzZXNzaW9uX2lkPTFfTVg0ME5qTXhOREUxTW41LU1UVTFOVGt5TURRek5Ea3hNbjVYUjBGT2FHNW1iVkpoTURaNVQwZHphRVpXZFVGNU1IQi1mZyZjcmVhdGVfdGltZT0xNTU1OTIwNDkyJm5vbmNlPTAuMDExNTY4MDQ4OTI2MDMzNDcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU1NTkyNDA5MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here
initializeSession();

session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

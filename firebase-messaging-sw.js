importScripts('https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCx9i0pLHI402zYdshJQkeqZuMcy6m0fL0",
    authDomain: "fir-react-d8d26.firebaseapp.com",
    databaseURL: "https://fir-react-d8d26.firebaseio.com",
    projectId: "fir-react-d8d26",
    storageBucket: "fir-react-d8d26.appspot.com",
    messagingSenderId: "1049769121640"
  };
  firebase.initializeApp(config);
 
  const messaging = firebase.messaging();

  messaging.onMessage(function(payload)
{
    const title = 'Hello , World';
    const option = {
        body:payload.data.status
    };
    return self.registration.showNotification(title,option);
});

  messaging.setBackgroundMessageHandler(function(payload)
{
    const title = 'Hello , World';
    const option = {
        body:payload.data.status
    };
    return self.registration.showNotification(title,option);
});
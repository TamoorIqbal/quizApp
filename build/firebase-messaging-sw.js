importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyA6JBU5k6r1O8AVaA2KsXS2mGUgEt1doj0",
  authDomain: "notificationapp-9102c.firebaseapp.com",
  projectId: "notificationapp-9102c",
  storageBucket: "notificationapp-9102c.appspot.com",
  messagingSenderId: "106831662045",
  appId: "1:106831662045:web:6ad046f3dc36f257750434"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();


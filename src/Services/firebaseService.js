import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyA6JBU5k6r1O8AVaA2KsXS2mGUgEt1doj0",
    authDomain: "notificationapp-9102c.firebaseapp.com",
    projectId: "notificationapp-9102c",
    storageBucket: "notificationapp-9102c.appspot.com",
    messagingSenderId: "106831662045",
    appId: "1:106831662045:web:6ad046f3dc36f257750434"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
  

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if(permission === "granted"){
            getToken(messaging, { vapidKey: 'BKvocDplHyh-8tedD8Y3Lfq_ZjbT-J1WqXd3aHjCVtOHEgNa0xB_JEMpkDeCZZSa6ErCcGCqAKVM_ledAa1AH9c' }).then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}


// export default firebase;
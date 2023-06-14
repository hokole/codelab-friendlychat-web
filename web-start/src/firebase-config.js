/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCvxV5f6DbTAMFQazDz6ABaTS6RRlPioSE",
    authDomain: "friendlychat-dc8ed.firebaseapp.com",
    projectId: "friendlychat-dc8ed",
    storageBucket: "friendlychat-dc8ed.appspot.com",
    messagingSenderId: "563671151778",
    appId: "1:563671151778:web:1c2c3d0566f0cfe77f93fb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyBdhzozATOUVJG5HxSRR2hqIpW93WoWogo",
  authDomain: "friendlychat-39e47.firebaseapp.com",
  projectId: "friendlychat-39e47",
  storageBucket: "friendlychat-39e47.appspot.com",
  messagingSenderId: "185732929232",
  appId: "1:185732929232:web:53aa432cb95ac605fdf0d5"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
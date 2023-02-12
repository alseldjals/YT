import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA61IbD6zQFP5vYjAFQOe9B18gv2eUqNXE",
    authDomain: "yt-project-922fc.firebaseapp.com",
    projectId: "yt-project-922fc",
    storageBucket: "yt-project-922fc.appspot.com",
    messagingSenderId: "643703048561",
    appId: "1:643703048561:web:4c3ac4572cdbf98a940ed0",
    measurementId: "G-22PC7MPRLE",
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase.auth()
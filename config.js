import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCewkKJnmE4FHjV69cjyvjej04Rres1w5U",
    authDomain: "team-voting-app-7a1e0.firebaseapp.com",
    projectId: "team-voting-app-7a1e0",
    storageBucket: "team-voting-app-7a1e0.appspot.com",
    messagingSenderId: "124286861053",
    appId: "1:124286861053:web:504ec9baf0328dfbe74894"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
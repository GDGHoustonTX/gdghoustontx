import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBb1aFfFtCXiBeKUotIo_1BBo_qv11l6yA",
  authDomain: "gdghouston-tx.firebaseapp.com",
  databaseURL: "https://gdghouston-tx.firebaseio.com",
  projectId: "gdghouston-tx",
  storageBucket: "gdghouston-tx.appspot.com",
  messagingSenderId: "310258154205",
  appId: "1:310258154205:web:7660121c5948ace4ca3934"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};
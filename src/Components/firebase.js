import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA-6M9cEhh0IIMXAqQXBAI4SM-huMn6yaY",
    authDomain: "tekstor-3017d.firebaseapp.com",
    projectId: "tekstor-3017d",
    storageBucket: "tekstor-3017d.appspot.com",
    messagingSenderId: "507509217619",
    appId: "1:507509217619:web:ea4a8ae28ccdb53af729a6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};

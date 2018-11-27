import firebase from 'firebase';

export const firebase_config = {
    //our firebase connection information from firebase.google.com
    apiKey: "AIzaSyA_ZTn2jWVLkSPPaUtnNDOCBWpCvImHGd8",
    authDomain: "applab-flashcards.firebaseapp.com",
    databaseURL: "https://applab-flashcards.firebaseio.com",
    projectId: "applab-flashcards",
    storageBucket: "applab-flashcards.appspot.com",
    messagingSenderId: "1098231202945"
};

const Firebase = firebase.initializeApp(firebase_config);

export default Firebase;
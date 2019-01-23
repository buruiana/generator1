import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCtFtmLL3Aw_a6yDFxOU4mhUzI8czqL8S4",
  authDomain: "generator-2fd28.firebaseapp.com",
  databaseURL: "https://generator-2fd28.firebaseio.com",
  projectId: "generator-2fd28",
  storageBucket: "generator-2fd28.appspot.com",
  messagingSenderId: "225807301339"
});

const firebaseConfig = new ReduxSagaFirebase(firebaseApp);

export default firebaseConfig;
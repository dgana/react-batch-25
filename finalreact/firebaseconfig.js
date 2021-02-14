import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: 'AIzaSyB_0QiU0D4R4Y41oSZW9EDTJNMidDKKu-M',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'spxsales-70d77',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_ID',
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;

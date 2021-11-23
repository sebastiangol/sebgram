// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMiMzmpL_fm7VRViK5rSFuY13O7KNjjes',
  authDomain: 'sebgram-3cac7.firebaseapp.com',
  projectId: 'sebgram-3cac7',
  storageBucket: 'sebgram-3cac7.appspot.com',
  messagingSenderId: '606877859793',
  appId: '1:606877859793:web:695a06d296198b33d66af0'
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

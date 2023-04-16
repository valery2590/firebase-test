// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENTID,

// apiKey: "AIzaSyBfdjQX2wcJBnFlQF50RhbHmRYkOx45jlc",
// authDomain: "fir-test-bc0ba.firebaseapp.com",
// projectId: "fir-test-bc0ba",
// storageBucket: "fir-test-bc0ba.appspot.com",
// messagingSenderId: "591926261288",
// appId: "1:591926261288:web:37a8a6d011f495d010671d",
// measurementId: "G-S1VZ8GGESG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
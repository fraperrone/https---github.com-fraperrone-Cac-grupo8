// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// PROFE
// const firebaseConfig = {
//   apiKey: "AIzaSyCu__FU90E2lO7lC595rTHMb69-1Bkr0DM",
//   authDomain: "cac-75c62.firebaseapp.com",
//   projectId: "cac-75c62",
//   storageBucket: "cac-75c62.appspot.com",
//   messagingSenderId: "33307439892",
//   appId: "1:33307439892:web:976ea5d2074a5d7ca7c801"
// };

//NICO
// const firebaseConfig = {
//     apiKey: "AIzaSyATWJSKcfhnoHEcFocyvnYc7GfCgQ8tkyQ",
//     authDomain: "cac-react-cac60.firebaseapp.com",
//     projectId: "cac-react-cac60",
//     storageBucket: "cac-react-cac60.appspot.com",
//     messagingSenderId: "27764092592",
//     appId: "1:27764092592:web:5ecaef82571485d70dd575",
//     measurementId: "G-TP0FCW0NMB"
//   };

//Fran:
const firebaseConfig = {
  apiKey: "AIzaSyDbtE-YH1eZw-NI7h_G9yoxW3mJOXQwNY8",
  authDomain: "cac-grupo08.firebaseapp.com",
  databaseURL: "https://cac-grupo08-default-rtdb.firebaseio.com",
  projectId: "cac-grupo08",
  storageBucket: "cac-grupo08.appspot.com",
  messagingSenderId: "1080499680946",
  appId: "1:1080499680946:web:9f55108ff56734a0e0bbab"
};


//

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
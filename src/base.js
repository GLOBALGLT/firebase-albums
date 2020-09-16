import firebase from "firebase";
import "firebase/storage";

export const app = firebase.initializeApp({
  projectId: "pseudogram-2f068",
  appId: "1:773250736691:web:fa6160e1ac53828d957946",
  databaseURL: "https://pseudogram-2f068.firebaseio.com",
  storageBucket: "pseudogram-2f068.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyAGPiqbOOq3p-ReQLKAKlkCRk-8vxq6q5g",
  authDomain: "pseudogram-2f068.firebaseapp.com",
  messagingSenderId: "773250736691",
  measurementId: "G-4SCP9JSJHB",
});

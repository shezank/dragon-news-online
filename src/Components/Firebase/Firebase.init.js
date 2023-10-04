// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr3L8Sm9iPC68-IaxWgxryZrMvGXFbbvA",
  authDomain: "dragon-news-online.firebaseapp.com",
  projectId: "dragon-news-online",
  storageBucket: "dragon-news-online.appspot.com",
  messagingSenderId: "678549135913",
  appId: "1:678549135913:web:0a4eb1f9b378053185b238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
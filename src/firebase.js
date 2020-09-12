import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBmr0MUNizDEQlS0aLLMQQmyPZho4UFEb8",
    authDomain: "twitter-clone-af477.firebaseapp.com",
    databaseURL: "https://twitter-clone-af477.firebaseio.com",
    projectId: "twitter-clone-af477",
    storageBucket: "twitter-clone-af477.appspot.com",
    messagingSenderId: "677339749398",
    appId: "1:677339749398:web:58f9a7cd2177f4d32f6937"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export const auth = firebase.auth();

  export default db;


  
  
  
 
import firebase from "firebase/app"

import "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyC-OlTafUI6E11FY5ZqPwgvFkc4c0mJRoI",
    authDomain: "dolce-ragazza-6a4ca.firebaseapp.com",
    projectId: "dolce-ragazza-6a4ca",
    storageBucket: "dolce-ragazza-6a4ca.appspot.com",
    messagingSenderId: "956834836537",
    appId: "1:956834836537:web:de139335bf425695f1dde8"
  }


const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)



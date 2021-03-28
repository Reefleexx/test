import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCW767TyyBAO2O0TgNkLo_cK1sjMGZkeuw",
    authDomain: "test-48865.firebaseapp.com",
    databaseURL: "https://test-48865.firebaseio.com",
    projectId: "test-48865",
    storageBucket: "test-48865.appspot.com",
    messagingSenderId: "194075501667",
    appId: "1:194075501667:web:12c1e917ee0b045f16c456"
};

firebase.initializeApp(firebaseConfig)

export const storage = firebase.storage()
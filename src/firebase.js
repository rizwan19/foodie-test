import firebase from "firebase/app";
import "firebase/auth";

const app= firebase.initializeApp({
    // apiKey: "AIzaSyBNpXt_raVBDZU38lW7fMd-JkXw6UUM8zo",
    // authDomain: "fir-auth-development-ab065.firebaseapp.com",
    // projectId: "fir-auth-development-ab065",
    // storageBucket: "fir-auth-development-ab065.appspot.com",
    // messagingSenderId: "715021144791",
    // appId: "1:715021144791:web:17eb919fd9c76e9ea3d692"
    apiKey: "AIzaSyDGR498KJJN_e39L83vJyJgv1nZGiwCAAw",
    authDomain: "foodie-auth-development.firebaseapp.com",
    projectId: "foodie-auth-development",
    storageBucket: "foodie-auth-development.appspot.com",
    messagingSenderId: "692591505226",
    appId: "1:692591505226:web:dfbc7296335e14b6301bb3"
});

const auth = app.auth();
export {auth};
export default app;
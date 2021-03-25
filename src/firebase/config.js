import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAhy-qNqMfeZvAQUIjB-XK0Vn2ZxrZUI7Y",
  authDomain: "upload-image-20931.firebaseapp.com",
  projectId: "upload-image-20931",
  storageBucket: "upload-image-20931.appspot.com",
  messagingSenderId: "334742114460",
  appId: "1:334742114460:web:49f2d86e8fb273d0469d59"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
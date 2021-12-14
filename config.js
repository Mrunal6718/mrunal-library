import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHxxnacgL7f_2vXBjc9wlSlW8d2LjF9O8",
  authDomain: "mrunal---book-santa.firebaseapp.com",
  projectId: "mrunal---book-santa",
  storageBucket: "mrunal---book-santa.appspot.com",
  messagingSenderId: "599887572776",
  appId: "1:599887572776:web:16fab61aec33d34856aa1d"
};

// Initialize Firebase
if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig); 
}

export default firebase.firestore();

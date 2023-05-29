// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAchKVWYChkEYALPmus7_zUXk4FG9tU-AI",
//   authDomain: "notesapp-9cdee.firebaseapp.com",
//   projectId: "notesapp-9cdee",
//   storageBucket: "notesapp-9cdee.appspot.com",
//   messagingSenderId: "276981122690",
//   appId: "1:276981122690:web:7f2b3137d6f9dd88dc569b",
//   measurementId: "G-57P6DQB6DV"
// };

//   if (!firebase.app.length){
//     firebase.initializeApp(firebaseConfig);
//   }

//   export {firebase};

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
      apiKey: "AIzaSyAchKVWYChkEYALPmus7_zUXk4FG9tU-AI",
      authDomain: "notesapp-9cdee.firebaseapp.com",
      projectId: "notesapp-9cdee",
      storageBucket: "notesapp-9cdee.appspot.com",
      messagingSenderId: "276981122690",
      appId: "1:276981122690:web:7f2b3137d6f9dd88dc569b",
      measurementId: "G-57P6DQB6DV"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "KHeaSyDT5LXjmKHAN_p2UKTmskUqc6JSdfISQZU",
    authDomain: "chamados-db22f.firebaseapp.com",
    projectId: "chamados-db22f",
    storageBucket: "chamados-db22f.appspot.com",
    messagingSenderId: "512402139644",
    appId: "1:512402139644:web:738f6cdb6cbd5f24df2a79",
    measurementId: "G-NVWTPTHN83"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig) 
}

export default firebase

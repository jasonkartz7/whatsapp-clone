import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBmNtcnoEaizZPUzB0U3KLgayqUXJSC-j8',
  authDomain: 'whatsapp-2-ac273.firebaseapp.com',
  projectId: 'whatsapp-2-ac273',
  storageBucket: 'whatsapp-2-ac273.appspot.com',
  messagingSenderId: '826855179265',
  appId: '1:826855179265:web:9c39ff0848c17f65e8ac00',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };

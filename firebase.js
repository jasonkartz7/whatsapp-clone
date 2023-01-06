import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBmNtcnoEaizZPUzB0U3KLgayqUXJSC-j8',
  authDomain: 'whatsapp-2-ac273.firebaseapp.com',
  projectId: 'whatsapp-2-ac273',
  storageBucket: 'whatsapp-2-ac273.appspot.com',
  messagingSenderId: '826855179265',
  appId: '1:826855179265:web:9c39ff0848c17f65e8ac00',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider };

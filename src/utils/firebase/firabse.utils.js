import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDFWX1QL-nq-0BLyt0iQLaflERn0VpjAVg",
    authDomain: "clothes-store-dcf11.firebaseapp.com",
    projectId: "clothes-store-dcf11",
    storageBucket: "clothes-store-dcf11.appspot.com",
    messagingSenderId: "343595491314",
    appId: "1:343595491314:web:53517e3ee8ceda65e6956b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider =  new GoogleAuthProvider();
  
  provider.setCustomParameters( {
    prompt: "select-account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
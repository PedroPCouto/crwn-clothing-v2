import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDFWX1QL-nq-0BLyt0iQLaflERn0VpjAVg",
    authDomain: "clothes-store-dcf11.firebaseapp.com",
    projectId: "clothes-store-dcf11",
    storageBucket: "clothes-store-dcf11.appspot.com",
    messagingSenderId: "343595491314",
    appId: "1:343595491314:web:53517e3ee8ceda65e6956b"
  };

  initializeApp(firebaseConfig);

  const googleProvider =  new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

  export const database = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(database, 'user', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log('Error creating the user', error.message);
        }
    } else {
        return userDocRef;
    }
  }

export const createAuthUserWithEmailAndPassword = async ({ password, email}) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}
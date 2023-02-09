import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../../utils/firebase/firabse.utils';

export const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Log in with Google</button>
        </div>
    );
}
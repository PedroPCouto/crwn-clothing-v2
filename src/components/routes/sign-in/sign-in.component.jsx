import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../../utils/firebase/firabse.utils';
import { SignUpForm } from '../../sign-up/sign-up.component';


export const SignIn = () => {

    const logGoogleUserPopUp = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUserPopUp}>Log in with Google Pop up</button>
            <SignUpForm/>
        </div>
    );
}
import { signInWithGooglePopup } from '../../../utils/firebase/firabse.utils';

export const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Log in with Google</button>
        </div>
    );
}
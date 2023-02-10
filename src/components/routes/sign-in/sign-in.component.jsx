import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../../utils/firebase/firabse.utils';
import { SignUpForm } from '../../sign-up/sign-up.component';
import { Button } from '../../button/button.component';

export const SignIn = () => {

    const logGoogleUserPopUp = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In</h1>
            <Button onClick={logGoogleUserPopUp} children="Log in with Google Pop up" buttonType="google"/>
            <SignUpForm/>
        </div>
    );
}
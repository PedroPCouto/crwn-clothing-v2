import { useState } from "react";
import { FormInput } from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firabse.utils";


const dafultFormFields = {
    displayName:'',
    password: '',
    confirmPassword:'',
    email:''
}


export const SignUpForm = () => {

    const resetFormFields = () => {
        setFormFields(dafultFormFields);
    }
    
    const createAuthUser = async (event)=>{
        event.preventDefault();
        let displayName = document.getElementById('display-name').value;
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirm-password').value;
        let email = document.getElementById('email').value;
        setFormFields({displayName, password, confirmPassword, email});
        try{
            let {user} = await createAuthUserWithEmailAndPassword(formFields);
            formFields.uid = user.uid;
            createUserDocumentFromAuth(formFields);
            resetFormFields();
        }catch(error){
            console.log(error.message);
        }
    }


    const passwordVerification = () => {
        let Password = document.getElementById('email').value;
        let confirmPasswordElement = document.getElementById('password');
        if(confirmPasswordElement.value.length >= Password.length && confirmPasswordElement.value !== Password){
            let btn = document.getElementById('signUp-submit');
            btn.disabled = true;
        }
    }
    const [formFields, setFormFields] = useState(dafultFormFields);
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={createAuthUser}>
                <FormInput label="Display Name" type="text" id="display-name"/>
                <FormInput label="Email" type="email" id="email"/>
                <FormInput label="Password"type="password" id="password"/>
                <FormInput label="Confirm Password" type="password" id="confirm-password" onChange={passwordVerification}/>
                <button type="submit" id="signUp-submit">Sign Up</button>
            </form>
        </div>
    )
}
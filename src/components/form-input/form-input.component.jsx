import './form-input.styles.scss';

export const FormInput = (label, ...otherProps) => {
    return(
    <>
        <label>{label}</label> 
        <input 
        required 
        {...otherProps}/>
    </>
    );
}
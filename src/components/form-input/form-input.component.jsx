import './form-input.styles.scss';
import { useState } from 'react';

export const FormInput = ({label, id, ...otherProps}) => {
    const idFoda = id;
    const [inputValue, setInputValue] = useState('');
    return(
    <div className='group'>
        <input className='form-input' id={id} {...otherProps} onChange = {()=> 
        {setInputValue(document.getElementById(idFoda).value)}
        }/>
        {label && (
        <label 
            className={`${inputValue.length > 0 ? 'shrink' : ''} form-input-label`}>
            {label}
        </label> 
        )}
    </div>
    );
}
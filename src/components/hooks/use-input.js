import {useState} from 'react';


const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    let  isValid = validateValue(enteredValue);
    let  hasError = !IsValid && isTouched;

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const blurHandler = (event) => {
        setIsTouched(true);
    };


    return {
        enteredValue,
        isValid,
        hasError,
        inputChangeHandler,
        blurHandler,
    };


};

export default useInput;
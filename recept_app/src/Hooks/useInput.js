import { useState } from "react";
import DOMPurify from 'dompurify';

export default function useInput(validationFunction , errorMessage){
    const initialValue = {
        value:"",
        isTouched:false,
        isValid:false,
        showError: false,
        errorMessage:errorMessage,
    }
    const [text , setText] = useState(initialValue);

    function onChange(value){
        setText(()=>{
            value = DOMPurify.sanitize(value);
            const isValid = validationFunction(value)
            const isTouched = true;
            return {
                isValid:isValid,
                value:value,
                isTouched:isTouched,
                showError: isTouched && !isValid,
                errorMessage:errorMessage,
            }
        })
    }

    function validate(){
        setText((prev)=>{
            const isValid = validationFunction(text.value)
            const isTouched = true;
            return {
                ...prev,
                isTouched:isTouched,
                isValid:isValid,
                showError: isTouched && !isValid

            }
        })
    }
    function reset(){
        setText(()=>{return initialValue});
    }

    return [text , onChange , reset , validate]

}
import { useState } from "react";
import DOMPurify from 'dompurify';

export default function useInput(validationFunction){
    const initialValue = {
        value:"",
        isTouched:false,
        isValid:false,
        isHighlighted: false,
    }
    const [text , setText] = useState(initialValue);

    function onChange(value){
        setText(()=>{
            value = value.trim();
            value = DOMPurify.sanitize(value);
            const isValid = validationFunction(value)
            const isTouched = true;
            const isHighlighted = isTouched && !isValid
            return {
                isValid:isValid,
                value:value,
                isTouched:true,
                isHighlighted: isHighlighted,
            }
        })
    }

    return [text , onChange]

}
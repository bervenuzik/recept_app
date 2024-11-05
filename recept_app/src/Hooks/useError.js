import { useState } from "react";

function useError() {
    const initialValue = {
        status:false,
        message:""
    }
    const [error , setError] = useState(initialValue);

    function resetError(){
        setError(initialValue);
    }
    function setErrorMessage(message){
        setError({
            status:true,
            message:message,
        })
    }

    return [error, setErrorMessage , resetError];
}

export default useError;
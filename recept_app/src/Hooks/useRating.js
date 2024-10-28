import { useState } from "react";

function useRating(defaultRating = 1){
    const errorInitialValue = {
        message:"",
        status:false,
    }
    const [rating, setRating] = useState(defaultRating);
    const [isRated ,setIsRated] = useState(false);
    const [error , setError] = useState(errorInitialValue);

   function resetError(){
    setError(errorInitialValue);
   }

   function resetRating(){
        setRating(0);
        setIsRated(false);
   }

   function setErrorMessage(message){
        setError({
            message:message,
            status:true,
        })
   }

    return {rating , setRating , isRated , setIsRated , error ,setErrorMessage , resetError , resetRating};
}

export default useRating;
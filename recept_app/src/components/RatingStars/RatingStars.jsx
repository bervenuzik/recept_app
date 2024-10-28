import { Button, Rating, Snackbar } from "@mui/material";
import { useState } from "react";
import sendRating from "../../functions/sendRating.js"
import useRating from "../../Hooks/useRating.js";

function RatingStars({drinkID}) {
  const {rating , setRating , isRated , setIsRated , error ,setErrorMessage, resetError , resetRating} = useRating(0);

  function comfirmRating(rating){
        sendRating(rating , drinkID)
        .then(()=>{
            setIsRated(true);
        })
        .catch((error)=>{
            resetRating();
            setErrorMessage(error.message);
        }); 
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    resetError();
}
  return (
    <div>
      { !isRated && <div>
        <h3>Sätt ditt betyg</h3>
        <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
            
            setRating(()=>newValue);
            comfirmRating(newValue);
        }}
        defaultValue={1}
        precision={1}
        />
        </div>
        }
        {isRated && <h3>Tack för ditt betyg</h3>}
        <Snackbar
         open={error.status}
         autoHideDuration={4000}
         onClose={handleClose}
         message={error.message}
      />
    </div>
  );
}

export default RatingStars;

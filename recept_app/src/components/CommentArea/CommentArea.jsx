import styles from "./CommentArea.module.css";
import { Button, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import sendComment from "../../functions/sendComment";
import useInput from "../../Hooks/useInput";
import useRequestStatus from "../../Hooks/useRequestStatus";

function CommentArea({ drinkID,onComment ,  ...props }) {
  const isNameValid = (name)=>{
    const nameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    return name.length > 2 && nameRegex.test(name);
  }
  const isCommmentValid = (comment)=>{
    if(comment.length <= 0) return false;
    return true;
  }

  const [comment , onCommentChange] = useInput(isCommmentValid);
  const [name , onNameChange] = useInput(isNameValid);
  const { requestStatus, handleErrorOnSend, handleSuccessOnSend, resetRequestStatus} = useRequestStatus();
  


  async function handleConfirmation() {
    if(!isNameValid(name.value) || !isCommmentValid(comment.value)) {
      handleErrorOnSend("Wrong input, try again")
      return
    }
    const isSuccessed = await sendComment(comment.value, name.value, drinkID , handleSuccessOnSend , handleErrorOnSend);
    if(isSuccessed) onComment()
  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    resetRequestStatus();
}


  return (
    <div {...props}>
      <TextField
        onChange={(event) => {
          onNameChange(event.target.value);
        }}
        value={name.value}
        required
        id="outlined-required"
        label="Your name"
        defaultValue=""
        fullWidth
        margin="dense" 
        error={name.isHighlighted}
      />
      <TextField
        onChange={(event) => {
          onCommentChange(event.target.value);
        }}
        value={comment.value}
        label="Coment Field"
        placeholder="Leave a comment"
        multiline
        fullWidth
        margin="dense" 
        minRows="3"
        error={comment.isHighlighted}
      ></TextField>
      <Button onClick={handleConfirmation} color="success" variant="contained">
        To comment
      </Button>
      <Snackbar
         open={requestStatus.error.status}
         autoHideDuration={6000}
         onClose={handleClose}
         message={requestStatus.error.message}
      />
      <Snackbar
         open={requestStatus.success.status}
         autoHideDuration={6000}
         onClose={handleClose}
         message={requestStatus.success.message}
      />
    </div>
  );
}

export default CommentArea;

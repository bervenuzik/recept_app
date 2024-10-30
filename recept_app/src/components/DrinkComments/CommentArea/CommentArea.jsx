import styles from "./CommentArea.module.css";
import { Button, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import sendComment from "../../../functions/sendComment";
import useInput from "../../../Hooks/useInput";
import useRequestStatus from "../../../Hooks/useRequestStatus";

function CommentArea({ drinkID,onComment ,  ...props }) {
  const isNameValid = (name)=>{
    const nameRegex = /^[a-äA-Z][a-zA-Z0-9]*$/;
    return name.length > 2 && nameRegex.test(name);
  }
  const isCommmentValid = (comment)=>{
    if(comment.length <= 0) return false;
    return true;
  }
  const nameErrorMessage = "Namnet måste vara minst 2 symboler och börja med en bokstav."
  const commmentErrorMessage = "Kan inte vara tom!"
  const [comment , onCommentChange , resetComment , validateComment] = useInput(isCommmentValid ,commmentErrorMessage);
  const [name , onNameChange , resetName , validateName] = useInput(isNameValid , nameErrorMessage);
  const { requestStatus, handleErrorOnSend, handleSuccessOnSend, resetRequestStatus , markAsSend} = useRequestStatus();

  async function handleConfirmation() {
    validateComment();
    validateName();
    if(!name.isValid || !comment.isValid) {
      handleErrorOnSend("Fel inmatning , försök igen");
      return;
    }
    const isSuccessed = await sendComment(comment.value, name.value, drinkID , handleSuccessOnSend , handleErrorOnSend);
    if(isSuccessed) {
      onComment();
      resetComment();
      resetName();
      markAsSend();
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    resetRequestStatus();
}


  return (
    <div className={styles.inputs} {...props}>
      {requestStatus.isSent ?<h3>Tack för din kommentar</h3> : 
      < >
        <div className={styles.inputWrapper}>

      <TextField
        onChange={(event) => {
          onNameChange(event.target.value);
        }}
        value={name.value}
        required
        id="outlined-required"
        label="Ditt namn"
        fullWidth
        margin="dense" 
        error={name.showError}
        />
        {name.showError ? <span className={styles.errorMessage}>{name.errorMessage}</span>: null}
        </div>
        <div className={styles.inputWrapper}>

      <TextField
        onChange={(event) => {
          onCommentChange(event.target.value);
        }}
        value={comment.value}
        label="Kommentarsfält"
        placeholder="Lämna en kommentar"
        multiline
        fullWidth
        margin="dense" 
        minRows="3"
        error={comment.showError}
        ></TextField>
        {comment.showError ? <span className={styles.errorMessage}>{comment.errorMessage}</span>: null}
        </div>
      <Button sx={{
        "mt": "7px",
        "mb": "15px"
      }}  className={styles.sendBtn} onClick={handleConfirmation} color="success" variant="contained">
        Kommentera
      </Button>
        </>}
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



function Input({textarea}) {

    return (
    
    <>
        {textarea ? <TextField
        onChange={(event) => {
          setComment(event.target.value);
        }}
        value={comment}
        label="Coment Field"
        placeholder="Leave a comment"
        multiline
        fullWidth
        margin="dense" 
        minRows="3"
      /> : <TextField
      onChange={(event) => {
        setName(event.target.value);
        console.log(name)
      }}
      value={name}
      required
      id="outlined-required"
      label="Your name"
      defaultValue=""
      fullWidth
      margin="dense" 
      error={isNameValid}
    />
            
        }
</>
 );
}

export default Input;

import styles from "./DrinkComments.module.css"
import { CircularProgress } from "@mui/material";
import CommentsList from "./CommentsList/CommentsList";
function DrinkComments({comments , isLoading = false}) {

    console.log(comments)
    console.log(isLoading)
  return (
    <div className={styles.comments}>
    <h3 className={styles.header}>Comments</h3>
      {comments.length > 0 && <CommentsList comments={comments}/>}
      {comments.length == 0 && isLoading && <div className={styles.loader}><CircularProgress size="30px" /></div>}
      {comments.length == 0 && !isLoading && <h3>This cocktail have no comments yet</h3>}
    </div>
  )
}

export default DrinkComments;

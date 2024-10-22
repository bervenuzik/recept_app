
import styles from "./DrinkComments.module.css"
import { CircularProgress } from "@mui/material";
import CommentsList from "./CommentsList/CommentsList";
import CommentArea from "./CommentArea/CommentArea";
import useCommentsList from "../Hooks/useCommentsList";
function DrinkComments({drinkID}) {

const {comments , isLoading , refreshComments} = useCommentsList(drinkID)
    

  return (
    <div className={styles.comments}>
    <CommentArea drinkID={drinkID} onComment={refreshComments}/>
    <h3 className={styles.header}>Comments</h3>
      {comments.length > 0 && <CommentsList comments={comments}/>}
      {comments.length == 0 && isLoading && <div className={styles.loader}><CircularProgress size="30px" /></div>}
      {comments.length == 0 && !isLoading && <h3>This cocktail have no comments yet</h3>}
    </div>
  )
}

export default DrinkComments;

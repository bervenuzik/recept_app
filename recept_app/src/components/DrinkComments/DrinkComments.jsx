
import styles from "./DrinkComments.module.css"
import { CircularProgress } from "@mui/material";
import CommentArea from "./CommentArea/CommentArea.jsx";
import useCommentsList from "../../Hooks/useCommentsList";
import CommentsList from "./CommentsList/CommentsList.jsx";
function DrinkComments({drinkID}) {

const {comments , isLoading , refreshComments} = useCommentsList(drinkID)
    

  return (
    <div className={styles.comments}>
    <CommentArea drinkID={drinkID} onComment={refreshComments}/>
    <h3 className={styles.header}>Kommentarer</h3>
      {comments.length > 0 && <CommentsList comments={comments}/>}
      {comments.length == 0 && isLoading && <div className={styles.loader}><CircularProgress size="30px" /></div>}
      {comments.length == 0 && !isLoading && <h3>Denna drink har ingen kommentar ännu.</h3>}
    </div>
  )
}

export default DrinkComments;

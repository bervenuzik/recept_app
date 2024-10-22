import { useMemo } from "react";
import formatDate from "../../functions/formateDate";
import styles from "./CommentsList.module.css"
function CommentsList({comments}) {
    const reversedComments = useMemo(()=>{
        return [...comments].reverse()
    }, [comments])
    return <div className={styles.comments}>
        {reversedComments.map((comment)=>{
            const formatedDate = formatDate(comment.createdAt)
            return<div className={styles.comment} key={comment._id}>
                <div className={styles.header}>
                    <span>{comment.name}</span>
                    <span>{formatedDate}</span>
                </div>
                <div className={styles.text}>{comment.comment}</div>
            </div>
        })}
      </div> 
    
}
export default CommentsList;
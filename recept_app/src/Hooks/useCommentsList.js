import { useCallback, useEffect, useState } from "react";
import fetchCommentsByID from "../functions/fetchCommentsById";

export default function useCommentsList (ID){
    const [comments , setComments]  = useState([])
    const [isLoading , setIsloading] = useState(true);

    const downloadComments = useCallback(async function downloadComments(){
        const response =  await fetchCommentsByID(ID);
        if(response) setComments(response);
        setIsloading(false);
    },[setComments , ID])


    const refreshComments = useCallback( async function refreshComments(){
        await downloadComments()
    }, [downloadComments])
    
    useEffect(()=>{
        downloadComments()
    },[ID, downloadComments , refreshComments])

    return {
        comments,
        isLoading,
        refreshComments
    }

}
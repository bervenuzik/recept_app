import { useState } from "react";


export default function useRequestStatus() {
    const [requestStatus, setRequestStatus] = useState({
        success: {
          message: "",
          status: false,
        },
        error: {
          message: "",
          status: false,
        },
        isSent:false
      });


      function handleErrorOnSend(message) {
        setRequestStatus( {
            success:{
                message:"",
                status:false,
            },
            error:{
                message:message,
                status:true
            }}
        );
      }

      function handleSuccessOnSend() {
        setRequestStatus( {
          success:{
              message:"Commment is Added",
              status:true,
          },
          error:{
              message:"",
              status:false
          }}
      );
      }
      function markAsSend(){
        setRequestStatus((prev)=>{
            return {
                ...prev,
                isSent:true,
            }
        })
      }

      function resetRequestStatus(){
        setRequestStatus( (prev)=>{
            return{
                ...prev,
                success: {
                    message: "",
                    status: false,
                  },
                error: {
                    message: "",
                    status: false,
                  },
                }
            }
        );
      }

    return {
        requestStatus,
        handleErrorOnSend,
        handleSuccessOnSend,
        resetRequestStatus,
        markAsSend

    }
}

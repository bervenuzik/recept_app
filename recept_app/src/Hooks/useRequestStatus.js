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

      function handleSuccessOnSend(callback) {
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

      function resetRequestStatus(){
        setRequestStatus( {
            success: {
                message: "",
                status: false,
              },
              error: {
                message: "",
                status: false,
              },
            }
        );
      }

    return {
        requestStatus,
        handleErrorOnSend,
        handleSuccessOnSend,
        resetRequestStatus

    }
}

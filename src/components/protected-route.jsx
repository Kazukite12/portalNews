import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";


const ProtectedRoute = (props) => {

    console.log(props.auth)

    if (!props.auth) {
      return <Navigate to="/login" />;
    } 
      
    return props.children;
  
}

export default ProtectedRoute
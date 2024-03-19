import React, { useEffect } from "react";
import axios from "axios";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  
    const token = localStorage.getItem("token")
    return token ? children : <Navigate to="/" />;


//   if (localStorage.getItem("token")) {
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
};

export default PrivateRoute;
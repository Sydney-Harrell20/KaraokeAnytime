import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";

const LoggedRoute = ({ children }) => {
    let { user } = useUserAuth();
    console.log(user)
    if (user) {
        return <Navigate to="/home" />;
    }
    return children;
}

export default LoggedRoute;
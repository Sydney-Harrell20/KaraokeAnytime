import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    let { user } = useUserAuth();
    console.log(user)
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default ProtectedRoute;